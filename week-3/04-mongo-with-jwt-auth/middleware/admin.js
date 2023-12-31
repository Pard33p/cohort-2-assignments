// Middleware for handling auth
const { verifyJwt } = require('../../02-jwt/index');

function adminMiddleware(req, res, next) {
    const [bearer, token] = req.headers.authorization.split(' ');
    if (verifyJwt(token)) {
        next();
    } else {
        res.status(403).send('Invalid admin credentials');
    }
}

module.exports = adminMiddleware;