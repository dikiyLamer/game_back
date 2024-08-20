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
exports.mapToUserDto = exports.checkBonus = void 0;
var config_1 = require("../db/config");
var user_entity_1 = require("../entities/user.entity");
var moment_1 = require("moment");
var dayly_entity_1 = require("../entities/dayly.entity");
var Boost_entity_1 = require("../entities/Boost.entity");
var constants_1 = require("../constants/constants");
var usersRepository = config_1.AppDataSource.getRepository(user_entity_1.User);
var daylyRepository = config_1.AppDataSource.getRepository(dayly_entity_1.Dayly);
var boostRepository = config_1.AppDataSource.getRepository(Boost_entity_1.Boost);
var checkBonus = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, date, user, dayly_1, boost_1, clientDate, serverDate, diff, dayly, boost, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.id;
                date = String(req.query.date);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 9, , 10]);
                return [4 /*yield*/, usersRepository.findOne({
                        where: { id: Number(userId) },
                        relations: { dayly: true, boost: true },
                    })];
            case 2:
                user = _a.sent();
                if (!user) {
                    res.status(400).send('Такого пользователя нет');
                    return [2 /*return*/];
                }
                if (!!user.dayly) return [3 /*break*/, 6];
                dayly_1 = new dayly_entity_1.Dayly();
                dayly_1.daysStreak = 1;
                dayly_1.lastEntry = date;
                boost_1 = new Boost_entity_1.Boost();
                boost_1.boosts_moveboss = 1;
                boost_1.boosts_powerwisps = 1;
                boost_1.boosts_remove = 1;
                boost_1.boosts_repaint = 1;
                boost_1.boosts_upgrade = 1;
                return [4 /*yield*/, boostRepository.save(boost_1)];
            case 3:
                _a.sent();
                return [4 /*yield*/, daylyRepository.save(dayly_1)];
            case 4:
                _a.sent();
                user.dayly = dayly_1;
                user.boost = boost_1;
                return [4 /*yield*/, usersRepository.save(user)];
            case 5:
                _a.sent();
                res.send((0, exports.mapToUserDto)(user, true));
                return [2 /*return*/];
            case 6:
                clientDate = (0, moment_1.default)(date, 'YYYY-MM-DD');
                serverDate = (0, moment_1.default)(user.dayly.lastEntry, 'YYYY-MM-DD');
                diff = clientDate.diff(serverDate);
                dayly = user.dayly;
                boost = user.boost;
                dayly.lastEntry = date;
                if (!boost) {
                    return [2 /*return*/];
                }
                if (diff / 24 / 60 / 60 / 1000 === 1) {
                    dayly.daysStreak += 1;
                    boost.boosts_moveboss += constants_1.DAYLY_REWARDS[dayly.daysStreak % 10].boosts_moveboss;
                    boost.boosts_powerwisps += constants_1.DAYLY_REWARDS[dayly.daysStreak % 10].boosts_powerwisps;
                    boost.boosts_remove += constants_1.DAYLY_REWARDS[dayly.daysStreak % 10].boosts_remove;
                    boost.boosts_repaint += constants_1.DAYLY_REWARDS[dayly.daysStreak % 10].boosts_repaint;
                    boost.boosts_upgrade += constants_1.DAYLY_REWARDS[dayly.daysStreak % 10].boosts_upgrade;
                }
                else {
                    dayly.daysStreak = 1;
                    boost.boosts_moveboss += constants_1.DAYLY_REWARDS[0].boosts_moveboss;
                    boost.boosts_powerwisps += constants_1.DAYLY_REWARDS[0].boosts_powerwisps;
                    boost.boosts_remove += constants_1.DAYLY_REWARDS[0].boosts_remove;
                    boost.boosts_repaint += constants_1.DAYLY_REWARDS[0].boosts_repaint;
                    boost.boosts_upgrade += constants_1.DAYLY_REWARDS[0].boosts_upgrade;
                }
                return [4 /*yield*/, daylyRepository.save(dayly)];
            case 7:
                _a.sent();
                return [4 /*yield*/, boostRepository.save(boost)];
            case 8:
                _a.sent();
                res.send((0, exports.mapToUserDto)(user));
                return [3 /*break*/, 10];
            case 9:
                e_1 = _a.sent();
                console.log(e_1);
                res.status(400).send(e_1.message);
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.checkBonus = checkBonus;
var mapToUserDto = function (user, isNew) {
    if (isNew === void 0) { isNew = false; }
    var newUser = user;
    if (isNew) {
        newUser.todayBoost = {
            id: 0,
            boosts_moveboss: constants_1.DAYLY_REWARDS[0].boosts_moveboss,
            boosts_powerwisps: constants_1.DAYLY_REWARDS[0].boosts_powerwisps,
            boosts_remove: constants_1.DAYLY_REWARDS[0].boosts_remove,
            boosts_repaint: constants_1.DAYLY_REWARDS[0].boosts_repaint,
            boosts_upgrade: constants_1.DAYLY_REWARDS[0].boosts_upgrade,
        };
        return newUser;
    }
    newUser.todayBoost = {
        id: 0,
        boosts_moveboss: constants_1.DAYLY_REWARDS[user.dayly.daysStreak % 10].boosts_moveboss,
        boosts_powerwisps: constants_1.DAYLY_REWARDS[user.dayly.daysStreak % 10].boosts_powerwisps,
        boosts_remove: constants_1.DAYLY_REWARDS[user.dayly.daysStreak % 10].boosts_remove,
        boosts_repaint: constants_1.DAYLY_REWARDS[user.dayly.daysStreak % 10].boosts_repaint,
        boosts_upgrade: constants_1.DAYLY_REWARDS[user.dayly.daysStreak % 10].boosts_upgrade,
    };
    return newUser;
};
exports.mapToUserDto = mapToUserDto;
