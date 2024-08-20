"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var express_1 = require("express");
var auth_service_1 = require("../services/auth.service");
exports.authRouter = express_1.default.Router();
exports.authRouter.post('/login', auth_service_1.login);
exports.authRouter.post('/update', auth_service_1.update);
