"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.login = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var crypto_1 = require("crypto");
var config_1 = require("../db/config");
var token_entity_1 = require("../entities/token.entity");
var user_entity_1 = require("../entities/user.entity");
var tokenRepository = config_1.AppDataSource.getRepository(token_entity_1.Token);
var usersRepository = config_1.AppDataSource.getRepository(user_entity_1.User);
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data_1, user, checkString, secretKey, signature, ttlRefresh, accessToken, refreshToken, newUser, newToken, e_1;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 6, , 7]);
                data_1 = JSON.parse(JSON.stringify(req.query));
                user = JSON.parse(data_1.user);
                checkString = Object.keys(data_1)
                    .filter(function (key) { return key !== 'hash'; })
                    .map(function (key) { return "".concat(key, "=").concat(data_1[key]); })
                    .sort()
                    .join('\n');
                secretKey = crypto_1.default.createHmac('sha256', 'WebAppData').update(process.env.TOKEN).digest();
                signature = crypto_1.default.createHmac('sha256', secretKey).update(checkString).digest('hex');
                if (!(data_1.hash === signature)) return [3 /*break*/, 5];
                ttlRefresh = new Date(Date.now() + 1000 * 60 * 60 * 24);
                accessToken = jsonwebtoken_1.default.sign(data_1, (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : '', {
                    expiresIn: '1h',
                });
                refreshToken = jsonwebtoken_1.default.sign(data_1, (_b = process.env.JWT_SECRET) !== null && _b !== void 0 ? _b : '', {
                    expiresIn: '1d',
                });
                return [4 /*yield*/, usersRepository.findOne({ where: { id: user.id } })];
            case 1:
                newUser = _c.sent();
                if (!!newUser) return [3 /*break*/, 3];
                return [4 /*yield*/, usersRepository.save(user)];
            case 2:
                newUser = _c.sent();
                _c.label = 3;
            case 3:
                newToken = new token_entity_1.Token();
                newToken.token = refreshToken;
                newToken.user_id = newUser.id;
                return [4 /*yield*/, tokenRepository.save(newToken)];
            case 4:
                _c.sent();
                res.send({ user: newUser, accessToken: accessToken });
                return [2 /*return*/];
            case 5:
                res.status(400).send('Неправильные данные');
                return [3 /*break*/, 7];
            case 6:
                e_1 = _c.sent();
                console.log(e_1);
                res.status(500).send(e_1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, user, refreshToken, accessToken;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                data = JSON.parse(JSON.stringify(req.query));
                user = JSON.parse(data.user);
                return [4 /*yield*/, tokenRepository.findOne({
                        where: { user_id: user.id },
                    })];
            case 1:
                refreshToken = _d.sent();
                try {
                    jsonwebtoken_1.default.verify((_a = refreshToken === null || refreshToken === void 0 ? void 0 : refreshToken.token) !== null && _a !== void 0 ? _a : '', (_b = process.env.JWT_SECRET) !== null && _b !== void 0 ? _b : '');
                    accessToken = jsonwebtoken_1.default.sign(data, (_c = process.env.JWT_SECRET) !== null && _c !== void 0 ? _c : '', { expiresIn: '1h' });
                    res.send({ accessToken: accessToken });
                }
                catch (e) {
                    console.log(e);
                    res.status(401).send('Not authorized');
                }
                return [2 /*return*/];
        }
    });
}); };
exports.update = update;
