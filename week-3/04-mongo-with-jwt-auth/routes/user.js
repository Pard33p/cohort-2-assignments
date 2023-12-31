const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const courseIdMiddleware = require('../middleware/course');
const { User, Course, UserCourse } = require('../db/index');
const { signJwt } = require('../../02-jwt/index');
const jwt = require('jsonwebtoken');

// User Routes
router.post('/signup', async (req, res) => {
    const body = req.body;
    const existingUser = await User.findOne({username: body.username});
    if(existingUser) {
        res.status(401).send('User already exists');
        return;
    }
    User.create({
        username: body.username,
        password: body.password
    });
    res.json({
        message: 'User created successfully'
    });
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({username: username, password: password});
    if(!user) {
        res.status(403).send('Forbidden. Invalid credentials');
        return;
    }
    const token = signJwt(username, password);
    if(!token) {
        res.status(403).send('Unable to sign in');
        return; 
    }
    res.json({ token: token });
});

router.get('/courses', (req, res) => {
    Course.find({}).then(courses => res.json({courses: courses}));
});

router.post('/courses/:courseId', userMiddleware, courseIdMiddleware, async (req, res) => {
    const [bearer, token] = req.headers.authorization.split(' ');
    const { username } = jwt.decode(token);
    const courseId = req.params.courseId;
    const course = await Course.findOne({ _id : courseId});
    if(!course) {
        res.status(401).send('Course does not exist');
        return;
    }
    const userCourse = await UserCourse.findOne({ username: username, courseId: courseId });
    if(userCourse) {
        res.status(404).send('User already bought this course');
        return;
    }
    UserCourse.create({
        username: username,
        courseId: courseId
    });
    res.json({
        message: 'Course purchased successfully'
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const [bearer, token] = req.headers.authorization.split(' ');
    const { username } = jwt.decode(token);
    const userCourses = await UserCourse.find({ username: username });
    if(!userCourses) {
        res.json({
            purchasedCourses: []
        });
        return;
    }
    const courseIds = userCourses.map(userCourse => userCourse.courseId );
    const courses = await Course.find({ _id : { $in: courseIds} });
    res.json({
        purchasedCourses: courses
    });
});

module.exports = router