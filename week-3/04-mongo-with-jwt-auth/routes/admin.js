const { Router } = require("express");
const { Admin, Course } = require('../db/index');
const { signJwt } = require('../../02-jwt/index');
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const body = req.body;
    const existingAdmin = await Admin.findOne({username: body.username});
    if(existingAdmin) {
        res.status(401).send('Username already exists');
        return;
    }
    Admin.create({
        username: body.username,
        password: body.password
    });
    res.json({
        message: 'Admin created successfully'
    });
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const admin = await Admin.findOne({username: username, password: password});
    if(!admin) {
        res.status(403).send('Forbidden. Invalid credentials');
        return;
    }
    const token = signJwt(username, password);
    if(!token) {
        res.status(403).send('Forbidden');
        return;
    }
    res.json({ token: token });
});

router.post('/courses', adminMiddleware, (req, res) => {
    const body = req.body;
    Course.create({
        title: body.title,
        description: body.description,
        price: body.price,
        image: body.image
    }).then((createdCourse) => {
        res.json({message: 'Course created successfully', courseId: createdCourse.id });
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    Course.find({}).then(courses => res.json({courses: courses}));
});

module.exports = router;