"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boostRouter = void 0;
var express_1 = require("express");
var boost_service_1 = require("../services/boost.service");
var auth_middleware_1 = require("../middleware/auth.middleware");
exports.boostRouter = express_1.default.Router();
exports.boostRouter.patch('/:id', auth_middleware_1.AuthMiddleware, boost_service_1.updateBoost);
