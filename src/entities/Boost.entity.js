"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __propKey = (this && this.__propKey) || function (x) {
    return typeof x === "symbol" ? x : "".concat(x);
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boost = void 0;
var typeorm_1 = require("typeorm");
var boost_enum_1 = require("../enums/boost.enum");
var Boost = function () {
    var _a, _b, _c, _d, _e;
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _member_decorators;
    var _member_initializers = [];
    var _member_extraInitializers = [];
    var _member_decorators_1;
    var _member_initializers_1 = [];
    var _member_extraInitializers_1 = [];
    var _member_decorators_2;
    var _member_initializers_2 = [];
    var _member_extraInitializers_2 = [];
    var _member_decorators_3;
    var _member_initializers_3 = [];
    var _member_extraInitializers_3 = [];
    var _member_decorators_4;
    var _member_initializers_4 = [];
    var _member_extraInitializers_4 = [];
    var Boost = _classThis = /** @class */ (function () {
        function Boost_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this[_a] = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _member_initializers, void 0));
            this[_b] = (__runInitializers(this, _member_extraInitializers), __runInitializers(this, _member_initializers_1, void 0));
            this[_c] = (__runInitializers(this, _member_extraInitializers_1), __runInitializers(this, _member_initializers_2, void 0));
            this[_d] = (__runInitializers(this, _member_extraInitializers_2), __runInitializers(this, _member_initializers_3, void 0));
            this[_e] = (__runInitializers(this, _member_extraInitializers_3), __runInitializers(this, _member_initializers_4, void 0));
            __runInitializers(this, _member_extraInitializers_4);
        }
        return Boost_1;
    }());
    _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
    _member_decorators = [(0, typeorm_1.Column)()];
    _a = __propKey(boost_enum_1.BoostsNames.boosts_moveboss);
    _member_decorators_1 = [(0, typeorm_1.Column)()];
    _b = __propKey(boost_enum_1.BoostsNames.boosts_powerwisps);
    _member_decorators_2 = [(0, typeorm_1.Column)()];
    _c = __propKey(boost_enum_1.BoostsNames.boosts_remove);
    _member_decorators_3 = [(0, typeorm_1.Column)()];
    _d = __propKey(boost_enum_1.BoostsNames.boosts_repaint);
    _member_decorators_4 = [(0, typeorm_1.Column)()];
    _e = __propKey(boost_enum_1.BoostsNames.boosts_upgrade);
    __setFunctionName(_classThis, "Boost");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _member_decorators, { kind: "field", name: _a, static: false, private: false, access: { has: function (obj) { return _a in obj; }, get: function (obj) { return obj[_a]; }, set: function (obj, value) { obj[_a] = value; } }, metadata: _metadata }, _member_initializers, _member_extraInitializers);
        __esDecorate(null, null, _member_decorators_1, { kind: "field", name: _b, static: false, private: false, access: { has: function (obj) { return _b in obj; }, get: function (obj) { return obj[_b]; }, set: function (obj, value) { obj[_b] = value; } }, metadata: _metadata }, _member_initializers_1, _member_extraInitializers_1);
        __esDecorate(null, null, _member_decorators_2, { kind: "field", name: _c, static: false, private: false, access: { has: function (obj) { return _c in obj; }, get: function (obj) { return obj[_c]; }, set: function (obj, value) { obj[_c] = value; } }, metadata: _metadata }, _member_initializers_2, _member_extraInitializers_2);
        __esDecorate(null, null, _member_decorators_3, { kind: "field", name: _d, static: false, private: false, access: { has: function (obj) { return _d in obj; }, get: function (obj) { return obj[_d]; }, set: function (obj, value) { obj[_d] = value; } }, metadata: _metadata }, _member_initializers_3, _member_extraInitializers_3);
        __esDecorate(null, null, _member_decorators_4, { kind: "field", name: _e, static: false, private: false, access: { has: function (obj) { return _e in obj; }, get: function (obj) { return obj[_e]; }, set: function (obj, value) { obj[_e] = value; } }, metadata: _metadata }, _member_initializers_4, _member_extraInitializers_4);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Boost = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Boost = _classThis;
}();
exports.Boost = Boost;
