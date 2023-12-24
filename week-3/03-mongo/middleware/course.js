const mongoose = require('mongoose');

const courseIdMiddleware = (req, res, next) => {
    const courseId = req.params.courseId;
    if(!mongoose.Types.ObjectId.isValid(courseId)) {
        res.status(401).send('Invalid course id passed');
        return;
    } else {
        next();
    }
};

module.exports = courseIdMiddleware;