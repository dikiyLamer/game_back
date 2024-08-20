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
exports.Dayly = void 0;
var typeorm_1 = require("typeorm");
var Dayly = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _daysStreak_decorators;
    var _daysStreak_initializers = [];
    var _daysStreak_extraInitializers = [];
    var _lastEntry_decorators;
    var _lastEntry_initializers = [];
    var _lastEntry_extraInitializers = [];
    var Dayly = _classThis = /** @class */ (function () {
        function Dayly_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.daysStreak = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _daysStreak_initializers, void 0));
            this.lastEntry = (__runInitializers(this, _daysStreak_extraInitializers), __runInitializers(this, _lastEntry_initializers, void 0));
            __runInitializers(this, _lastEntry_extraInitializers);
        }
        return Dayly_1;
    }());
    __setFunctionName(_classThis, "Dayly");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _daysStreak_decorators = [(0, typeorm_1.Column)()];
        _lastEntry_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _daysStreak_decorators, { kind: "field", name: "daysStreak", static: false, private: false, access: { has: function (obj) { return "daysStreak" in obj; }, get: function (obj) { return obj.daysStreak; }, set: function (obj, value) { obj.daysStreak = value; } }, metadata: _metadata }, _daysStreak_initializers, _daysStreak_extraInitializers);
        __esDecorate(null, null, _lastEntry_decorators, { kind: "field", name: "lastEntry", static: false, private: false, access: { has: function (obj) { return "lastEntry" in obj; }, get: function (obj) { return obj.lastEntry; }, set: function (obj, value) { obj.lastEntry = value; } }, metadata: _metadata }, _lastEntry_initializers, _lastEntry_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Dayly = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Dayly = _classThis;
}();
exports.Dayly = Dayly;
