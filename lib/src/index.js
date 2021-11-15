"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Character_1 = require("./models/Character");
var DEFAULT_CONFIG = {
    reconnect: false,
    retryConnectionTime: 3000,
};
exports.Models = [
    Character_1.Character,
];
var PGAdapter = (function () {
    function PGAdapter(config) {
        if (PGAdapter.instance) {
            return PGAdapter.instance;
        }
        PGAdapter.instance = this;
        this._config = Object.assign(DEFAULT_CONFIG, config);
        this._connection = null;
    }
    PGAdapter.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4, getConnection(this._config)];
                    case 1:
                        _a._connection = _b.sent();
                        console.log('[PG] Connected');
                        return [3, 3];
                    case 2:
                        error_1 = _b.sent();
                        if (error_1 instanceof Error) {
                            console.error('[PG] Error', error_1.message);
                        }
                        else {
                            console.error('[PG] Error', error_1);
                        }
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    Object.defineProperty(PGAdapter.prototype, "connection", {
        get: function () {
            return this._connection;
        },
        enumerable: true,
        configurable: true
    });
    return PGAdapter;
}());
exports.PGAdapter = PGAdapter;
function getConnection(config) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, new Promise(function (resolve) {
                    getConnectionMethod(config, resolve);
                })];
        });
    });
}
function getConnectionMethod(config, next) {
    return __awaiter(this, void 0, void 0, function () {
        var connection, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, typeorm_1.createConnection(config.ConnectionOptions)];
                case 1:
                    connection = _a.sent();
                    next(connection);
                    return [3, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('[PG] Connection error', error_2);
                    setTimeout(function () {
                        getConnectionMethod(config, next);
                    }, config.retryConnectionTime);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
//# sourceMappingURL=index.js.map