"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Dialog_1 = require("./Dialog");
var DialogResponse_1 = require("./DialogResponse");
var ConditionComparisonEnum;
(function (ConditionComparisonEnum) {
    ConditionComparisonEnum["LESS_THEN"] = "lt";
    ConditionComparisonEnum["GREATER_THEN"] = "gt";
    ConditionComparisonEnum["EQUAL"] = "eq";
})(ConditionComparisonEnum = exports.ConditionComparisonEnum || (exports.ConditionComparisonEnum = {}));
var DialogCondition = (function () {
    function DialogCondition() {
    }
    DialogCondition.prototype.addId = function () {
        this.id = uuid_1.v4();
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
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
