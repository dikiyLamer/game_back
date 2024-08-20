"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../entities/user.entity");
var token_entity_1 = require("../entities/token.entity");
var Boost_entity_1 = require("../entities/Boost.entity");
var dayly_entity_1 = require("../entities/dayly.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'dpg-cqn9hjdds78s739ab9m0-a.oregon-postgres.render.com',
    port: 5432,
    username: 'leonumeno',
    password: 'gnrt2cytioTSheYXwuOBipRUxaUgr5bb',
    database: 'leonumeno',
    entities: [user_entity_1.User, token_entity_1.Token, Boost_entity_1.Boost, dayly_entity_1.Dayly],
    synchronize: true,
    logging: false,
    ssl: true,
});
