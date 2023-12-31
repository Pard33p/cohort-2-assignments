const { verifyJwt } = require('../../02-jwt/index');

function userMiddleware(req, res, next) {
    const [bearer, token] = req.headers.authorization.split(' ');
    if(verifyJwt(token)) {
        next();
    } else {
        res.status(403).send('Invalid admin credentials');
    }
}

module.exports = userMiddleware;