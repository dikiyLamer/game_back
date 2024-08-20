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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var dayly_entity_1 = require("./dayly.entity");
var Boost_entity_1 = require("./Boost.entity");
var User = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _first_name_decorators;
    var _first_name_initializers = [];
    var _first_name_extraInitializers = [];
    var _last_name_decorators;
    var _last_name_initializers = [];
    var _last_name_extraInitializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _username_extraInitializers = [];
    var _language_code_decorators;
    var _language_code_initializers = [];
    var _language_code_extraInitializers = [];
    var _allows_write_to_pm_decorators;
    var _allows_write_to_pm_initializers = [];
    var _allows_write_to_pm_extraInitializers = [];
    var _record_decorators;
    var _record_initializers = [];
    var _record_extraInitializers = [];
    var _dayly_decorators;
    var _dayly_initializers = [];
    var _dayly_extraInitializers = [];
    var _boost_decorators;
    var _boost_initializers = [];
    var _boost_extraInitializers = [];
    var User = _classThis = /** @class */ (function () {
        function User_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.first_name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _first_name_initializers, void 0));
            this.last_name = (__runInitializers(this, _first_name_extraInitializers), __runInitializers(this, _last_name_initializers, void 0));
            this.username = (__runInitializers(this, _last_name_extraInitializers), __runInitializers(this, _username_initializers, void 0));
            this.language_code = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _language_code_initializers, void 0));
            this.allows_write_to_pm = (__runInitializers(this, _language_code_extraInitializers), __runInitializers(this, _allows_write_to_pm_initializers, void 0));
            this.record = (__runInitializers(this, _allows_write_to_pm_extraInitializers), __runInitializers(this, _record_initializers, void 0));
            this.dayly = (__runInitializers(this, _record_extraInitializers), __runInitializers(this, _dayly_initializers, void 0));
            this.boost = (__runInitializers(this, _dayly_extraInitializers), __runInitializers(this, _boost_initializers, void 0));
            __runInitializers(this, _boost_extraInitializers);
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryColumn)()];
        _first_name_decorators = [(0, typeorm_1.Column)()];
        _last_name_decorators = [(0, typeorm_1.Column)()];
        _username_decorators = [(0, typeorm_1.Column)()];
        _language_code_decorators = [(0, typeorm_1.Column)()];
        _allows_write_to_pm_decorators = [(0, typeorm_1.Column)()];
        _record_decorators = [(0, typeorm_1.Column)({ nullable: false, default: 0 })];
        _dayly_decorators = [(0, typeorm_1.OneToOne)(function () { return dayly_entity_1.Dayly; }), (0, typeorm_1.JoinColumn)()];
        _boost_decorators = [(0, typeorm_1.OneToOne)(function () { return Boost_entity_1.Boost; }), (0, typeorm_1.JoinColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _first_name_decorators, { kind: "field", name: "first_name", static: false, private: false, access: { has: function (obj) { return "first_name" in obj; }, get: function (obj) { return obj.first_name; }, set: function (obj, value) { obj.first_name = value; } }, metadata: _metadata }, _first_name_initializers, _first_name_extraInitializers);
        __esDecorate(null, null, _last_name_decorators, { kind: "field", name: "last_name", static: false, private: false, access: { has: function (obj) { return "last_name" in obj; }, get: function (obj) { return obj.last_name; }, set: function (obj, value) { obj.last_name = value; } }, metadata: _metadata }, _last_name_initializers, _last_name_extraInitializers);
        __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
        __esDecorate(null, null, _language_code_decorators, { kind: "field", name: "language_code", static: false, private: false, access: { has: function (obj) { return "language_code" in obj; }, get: function (obj) { return obj.language_code; }, set: function (obj, value) { obj.language_code = value; } }, metadata: _metadata }, _language_code_initializers, _language_code_extraInitializers);
        __esDecorate(null, null, _allows_write_to_pm_decorators, { kind: "field", name: "allows_write_to_pm", static: false, private: false, access: { has: function (obj) { return "allows_write_to_pm" in obj; }, get: function (obj) { return obj.allows_write_to_pm; }, set: function (obj, value) { obj.allows_write_to_pm = value; } }, metadata: _metadata }, _allows_write_to_pm_initializers, _allows_write_to_pm_extraInitializers);
        __esDecorate(null, null, _record_decorators, { kind: "field", name: "record", static: false, private: false, access: { has: function (obj) { return "record" in obj; }, get: function (obj) { return obj.record; }, set: function (obj, value) { obj.record = value; } }, metadata: _metadata }, _record_initializers, _record_extraInitializers);
        __esDecorate(null, null, _dayly_decorators, { kind: "field", name: "dayly", static: false, private: false, access: { has: function (obj) { return "dayly" in obj; }, get: function (obj) { return obj.dayly; }, set: function (obj, value) { obj.dayly = value; } }, metadata: _metadata }, _dayly_initializers, _dayly_extraInitializers);
        __esDecorate(null, null, _boost_decorators, { kind: "field", name: "boost", static: false, private: false, access: { has: function (obj) { return "boost" in obj; }, get: function (obj) { return obj.boost; }, set: function (obj, value) { obj.boost = value; } }, metadata: _metadata }, _boost_initializers, _boost_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
