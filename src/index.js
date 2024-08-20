"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Импортируем необходимые модули
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
require("reflect-metadata");
var users_controller_1 = require("./controllers/users.controller");
var config_1 = require("./db/config");
var dotenv_1 = require("dotenv");
var auth_controller_1 = require("./controllers/auth.controller");
var cookie_parser_1 = require("cookie-parser");
var dayly_controller_1 = require("./controllers/dayly.controller");
var boost_controller_1 = require("./controllers/boost.controller");
var app = (0, express_1.default)();
(0, dotenv_1.config)();
var PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: ['https://leonumeno.web.app', 'http://192.168.88.216:9001', 'http://192.168.0.58:9001'],
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json({ limit: '5mb' }));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/api/users', users_controller_1.usersRouter);
app.use('/api/auth', auth_controller_1.authRouter);
app.use('/api/dayly', dayly_controller_1.daylyRouter);
app.use('/api/boost', boost_controller_1.boostRouter);
config_1.AppDataSource.initialize()
    .then(function () {
    return app.listen(PORT, function () {
        console.log("\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u043D\u0430 http://localhost:".concat(PORT, " \uD83D\uDE80"));
    });
})
    .catch(function (error) { return console.log(error); });
