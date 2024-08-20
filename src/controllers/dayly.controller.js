"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daylyRouter = void 0;
var express_1 = require("express");
var dayly_service_1 = require("../services/dayly.service");
var auth_middleware_1 = require("../middleware/auth.middleware");
exports.daylyRouter = express_1.default.Router();
exports.daylyRouter.get('/:id', auth_middleware_1.AuthMiddleware, dayly_service_1.checkBonus);
