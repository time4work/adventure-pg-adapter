var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
define("models/DialogCondition", ["require", "exports", "typeorm", "uuid", "models/Dialog", "models/DialogResponse"], function (require, exports, typeorm_1, uuid_1, Dialog_1, DialogResponse_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConditionComparisonEnum;
    (function (ConditionComparisonEnum) {
        ConditionComparisonEnum["LESS_THEN"] = "lt";
        ConditionComparisonEnum["GREATER_THEN"] = "gt";
        ConditionComparisonEnum["EQUAL"] = "eq";
    })(ConditionComparisonEnum = exports.ConditionComparisonEnum || (exports.ConditionComparisonEnum = {}));
    var DialogCondition = /** @class */ (function () {
        function DialogCondition() {
        }
        // config end
        // TODO
        // characteristic?: CharacteristicsEnum // Enum
        // questRef?: uuidRef; // Quest
        // itemRef?: uuidRef; // Item
        // perkRef?: uuidRef; // Perk
        // achievementRef: uuidRef; // Achievement    
        DialogCondition.prototype.addId = function () {
            this.id = uuid_1.v4();
        };
        __decorate([
            typeorm_1.PrimaryGeneratedColumn('uuid'),
            __metadata("design:type", Number)
        ], DialogCondition.prototype, "id", void 0);
        __decorate([
            typeorm_1.ManyToOne(function (type) { return Dialog_1.Dialog; }, function (dialog) { return dialog.conditions; }, {
                nullable: true,
            }),
            __metadata("design:type", Dialog_1.Dialog)
        ], DialogCondition.prototype, "dialog", void 0);
        __decorate([
            typeorm_1.ManyToOne(function (type) { return DialogResponse_1.DialogResponse; }, function (response) { return response.conditions; }, {
                nullable: true,
            }),
            __metadata("design:type", DialogResponse_1.DialogResponse)
        ], DialogCondition.prototype, "response", void 0);
        __decorate([
            typeorm_1.Column({
                type: 'int',
                nullable: true,
            }),
            __metadata("design:type", Number)
        ], DialogCondition.prototype, "amount", void 0);
        __decorate([
            typeorm_1.Column({
                type: 'bool',
                nullable: true,
            }),
            __metadata("design:type", Number)
        ], DialogCondition.prototype, "exist", void 0);
        __decorate([
            typeorm_1.Column({
                type: 'enum',
                enum: ConditionComparisonEnum,
                default: ConditionComparisonEnum.EQUAL,
            }),
            __metadata("design:type", String)
        ], DialogCondition.prototype, "comparison", void 0);
        __decorate([
            typeorm_1.BeforeInsert(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], DialogCondition.prototype, "addId", null);
        DialogCondition = __decorate([
            typeorm_1.Entity({ name: 'dialog_condition' })
        ], DialogCondition);
        return DialogCondition;
    }());
    exports.DialogCondition = DialogCondition;
});
define("models/DialogResponse", ["require", "exports", "typeorm", "uuid", "models/DialogNode", "models/DialogCondition", "models/Dialog"], function (require, exports, typeorm_2, uuid_2, DialogNode_1, DialogCondition_1, Dialog_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DialogResponse = /** @class */ (function () {
        function DialogResponse() {
        }
        DialogResponse.prototype.addId = function () {
            this.id = uuid_2.v4();
        };
        __decorate([
            typeorm_2.PrimaryGeneratedColumn('uuid'),
            __metadata("design:type", Number)
        ], DialogResponse.prototype, "id", void 0);
        __decorate([
            typeorm_2.Column({
                length: '200',
                nullable: false,
            }),
            __metadata("design:type", String)
        ], DialogResponse.prototype, "label", void 0);
        __decorate([
            typeorm_2.Column({
                length: '500',
                nullable: true,
            }),
            __metadata("design:type", String)
        ], DialogResponse.prototype, "description", void 0);
        __decorate([
            typeorm_2.ManyToOne(function (type) { return Dialog_2.Dialog; }, function (dialog) { return dialog.responses; }, {
                nullable: false,
            }),
            __metadata("design:type", Dialog_2.Dialog)
        ], DialogResponse.prototype, "dialog", void 0);
        __decorate([
            typeorm_2.ManyToOne(function (type) { return DialogNode_1.DialogNode; }, function (dialogNode) { return dialogNode.responses; }, {
                nullable: false,
            }),
            __metadata("design:type", DialogNode_1.DialogNode)
        ], DialogResponse.prototype, "parent", void 0);
        __decorate([
            typeorm_2.ManyToOne(function (type) { return DialogNode_1.DialogNode; }, {
                nullable: false,
            }),
            __metadata("design:type", DialogNode_1.DialogNode)
        ], DialogResponse.prototype, "next", void 0);
        __decorate([
            typeorm_2.OneToMany(function (type) { return DialogCondition_1.DialogCondition; }, function (condition) { return condition.response; }, {
                cascade: true,
            }),
            __metadata("design:type", Array)
        ], DialogResponse.prototype, "conditions", void 0);
        __decorate([
            typeorm_2.BeforeInsert(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], DialogResponse.prototype, "addId", null);
        DialogResponse = __decorate([
            typeorm_2.Entity({ name: 'dialog_response' })
        ], DialogResponse);
        return DialogResponse;
    }());
    exports.DialogResponse = DialogResponse;
});
define("models/DialogNode", ["require", "exports", "typeorm", "uuid", "models/Dialog", "models/DialogResponse"], function (require, exports, typeorm_3, uuid_3, Dialog_3, DialogResponse_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DialogNode = /** @class */ (function () {
        function DialogNode() {
        }
        DialogNode_2 = DialogNode;
        DialogNode.prototype.addId = function () {
            this.id = uuid_3.v4();
        };
        var DialogNode_2;
        __decorate([
            typeorm_3.PrimaryGeneratedColumn('uuid'),
            __metadata("design:type", Number)
        ], DialogNode.prototype, "id", void 0);
        __decorate([
            typeorm_3.Column({
                length: '200',
                nullable: false,
            }),
            __metadata("design:type", String)
        ], DialogNode.prototype, "label", void 0);
        __decorate([
            typeorm_3.Column({
                length: '500',
                nullable: true,
            }),
            __metadata("design:type", String)
        ], DialogNode.prototype, "description", void 0);
        __decorate([
            typeorm_3.Column({
                type: 'int',
                nullable: true,
            }),
            __metadata("design:type", Number)
        ], DialogNode.prototype, "timeout", void 0);
        __decorate([
            typeorm_3.OneToOne(function (type) { return DialogNode_2; }, {
                nullable: true,
            }),
            __metadata("design:type", DialogNode)
        ], DialogNode.prototype, "next", void 0);
        __decorate([
            typeorm_3.ManyToOne(function (type) { return Dialog_3.Dialog; }, function (dialog) { return dialog.nodes; }, {
                nullable: false,
            }),
            __metadata("design:type", Dialog_3.Dialog)
        ], DialogNode.prototype, "dailog", void 0);
        __decorate([
            typeorm_3.OneToMany(function (type) { return DialogResponse_2.DialogResponse; }, function (response) { return response.parent; }, {
                cascade: true,
            }),
            __metadata("design:type", Array)
        ], DialogNode.prototype, "responses", void 0);
        __decorate([
            typeorm_3.BeforeInsert(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], DialogNode.prototype, "addId", null);
        DialogNode = DialogNode_2 = __decorate([
            typeorm_3.Entity({ name: 'dialog_node' })
        ], DialogNode);
        return DialogNode;
    }());
    exports.DialogNode = DialogNode;
});
define("models/Dialog", ["require", "exports", "typeorm", "uuid", "models/Character", "models/DialogNode", "models/DialogCondition", "models/DialogResponse"], function (require, exports, typeorm_4, uuid_4, Character_1, DialogNode_3, DialogCondition_2, DialogResponse_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dialog = /** @class */ (function () {
        function Dialog() {
        }
        Dialog.prototype.addId = function () {
            this.id = uuid_4.v4();
        };
        __decorate([
            typeorm_4.PrimaryGeneratedColumn('uuid'),
            __metadata("design:type", Number)
        ], Dialog.prototype, "id", void 0);
        __decorate([
            typeorm_4.Column({
                length: '200',
                nullable: false,
            }),
            __metadata("design:type", String)
        ], Dialog.prototype, "label", void 0);
        __decorate([
            typeorm_4.Column({
                length: '500',
                nullable: true,
            }),
            __metadata("design:type", String)
        ], Dialog.prototype, "description", void 0);
        __decorate([
            typeorm_4.ManyToOne(function (type) { return Character_1.Character; }, function (character) { return character.dialogs; }, {
                nullable: false,
            }),
            __metadata("design:type", Character_1.Character)
        ], Dialog.prototype, "character", void 0);
        __decorate([
            typeorm_4.OneToOne(function (type) { return DialogNode_3.DialogNode; }, {
                nullable: false,
            }),
            __metadata("design:type", DialogNode_3.DialogNode)
        ], Dialog.prototype, "start", void 0);
        __decorate([
            typeorm_4.OneToMany(function (type) { return DialogNode_3.DialogNode; }, function (dialogNode) { return dialogNode.dailog; }, {
                cascade: true,
            }),
            __metadata("design:type", Array)
        ], Dialog.prototype, "nodes", void 0);
        __decorate([
            typeorm_4.OneToMany(function (type) { return DialogCondition_2.DialogCondition; }, function (condition) { return condition.dialog; }, {
                cascade: true,
            }),
            __metadata("design:type", Array)
        ], Dialog.prototype, "conditions", void 0);
        __decorate([
            typeorm_4.OneToMany(function (type) { return DialogResponse_3.DialogResponse; }, function (response) { return response.dialog; }, {
                cascade: true,
            }),
            __metadata("design:type", Array)
        ], Dialog.prototype, "responses", void 0);
        __decorate([
            typeorm_4.BeforeInsert(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], Dialog.prototype, "addId", null);
        Dialog = __decorate([
            typeorm_4.Entity({ name: 'dialog' })
        ], Dialog);
        return Dialog;
    }());
    exports.Dialog = Dialog;
});
define("models/Character", ["require", "exports", "typeorm", "uuid", "models/Dialog"], function (require, exports, typeorm_5, uuid_5, Dialog_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Character = /** @class */ (function () {
        function Character() {
        }
        Character.prototype.addId = function () {
            this.id = uuid_5.v4();
        };
        __decorate([
            typeorm_5.PrimaryGeneratedColumn('uuid'),
            __metadata("design:type", Number)
        ], Character.prototype, "id", void 0);
        __decorate([
            typeorm_5.Column({
                length: '200',
                nullable: false,
            }),
            __metadata("design:type", String)
        ], Character.prototype, "name", void 0);
        __decorate([
            typeorm_5.Column({
                length: '500',
                nullable: true,
            }),
            __metadata("design:type", String)
        ], Character.prototype, "description", void 0);
        __decorate([
            typeorm_5.OneToMany(function (type) { return Dialog_4.Dialog; }, function (dialog) { return dialog.character; }, {
                cascade: true,
            }),
            __metadata("design:type", Array)
        ], Character.prototype, "dialogs", void 0);
        __decorate([
            typeorm_5.BeforeInsert(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], Character.prototype, "addId", null);
        Character = __decorate([
            typeorm_5.Entity({ name: 'character' })
        ], Character);
        return Character;
    }());
    exports.Character = Character;
});
define("adventure-pg-adapter", ["require", "exports", "typeorm", "models/Character", "reflect-metadata"], function (require, exports, typeorm_6, Character_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DEFAULT_CONFIG = {
        reconnect: false,
        retryConnectionTime: 3000,
    };
    exports.MODELS = {
        character: new Character_2.Character(),
    };
    var PGAdapter = /** @class */ (function () {
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
                            return [4 /*yield*/, getConnection(this._config)];
                        case 1:
                            _a._connection = _b.sent();
                            console.log('[PG] Connected');
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _b.sent();
                            // TODO: reconnect
                            if (error_1 instanceof Error) {
                                console.error('[PG] Error', error_1.message);
                            }
                            else {
                                console.error('[PG] Error', error_1);
                            }
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        Object.defineProperty(PGAdapter.prototype, "modules", {
            get: function () {
                return exports.MODELS;
            },
            enumerable: true,
            configurable: true
        });
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
                return [2 /*return*/, new Promise(function (resolve) {
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
                        return [4 /*yield*/, typeorm_6.createConnection(config.ConnectionOptions)];
                    case 1:
                        connection = _a.sent();
                        next(connection);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error('[PG] Connection error', error_2);
                        setTimeout(function () {
                            getConnectionMethod(config, next);
                        }, config.retryConnectionTime);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
});
//# sourceMappingURL=index.js.map