const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://pardeepsingh0920:xgpUyAbIdcCsLALK@cluster0.9f7qem8.mongodb.net/CoursesWithJwt');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String
});

const UserCourseSchema = new mongoose.Schema({
    username: String,
    courseId: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
const UserCourse = mongoose.model('UserCourse', UserCourseSchema);

module.exports = {
    Admin,
    User,
    Course,
    UserCourse
}