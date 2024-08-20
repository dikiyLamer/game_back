"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var AuthMiddleware = function (req, res, next) {
    var _a;
    var bearerToken = req.get('Authorization');
    if (!bearerToken) {
        res.status(401).send('Token not provided!');
        return;
    }
    try {
        var pureToken = bearerToken.replace('Bearer ', '');
        jsonwebtoken_1.default.verify(pureToken, (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : '');
    }
    catch (e) {
        console.log(e);
        if (e instanceof jsonwebtoken_1.TokenExpiredError) {
            res.status(401).send('Token expired!');
            return;
        }
        res.status(401).send('Invalid token!');
    }
    next();
};
exports.AuthMiddleware = AuthMiddleware;
