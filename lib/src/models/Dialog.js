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
var Character_1 = require("./Character");
var DialogNode_1 = require("./DialogNode");
var DialogCondition_1 = require("./DialogCondition");
var DialogResponse_1 = require("./DialogResponse");
var Dialog = (function () {
    function Dialog() {
    }
    Dialog.prototype.addId = function () {
        this.id = uuid_1.v4();
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Dialog.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            length: '200',
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Dialog.prototype, "label", void 0);
    __decorate([
        typeorm_1.Column({
            length: '500',
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Dialog.prototype, "description", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Character_1.Character; }, function (character) { return character.dialogs; }, {
            nullable: false,
        }),
        __metadata("design:type", Character_1.Character)
    ], Dialog.prototype, "character", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return DialogNode_1.DialogNode; }, {
            nullable: false,
        }),
        __metadata("design:type", DialogNode_1.DialogNode)
    ], Dialog.prototype, "start", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return DialogNode_1.DialogNode; }, function (dialogNode) { return dialogNode.dailog; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], Dialog.prototype, "nodes", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return DialogCondition_1.DialogCondition; }, function (condition) { return condition.dialog; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], Dialog.prototype, "conditions", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return DialogResponse_1.DialogResponse; }, function (response) { return response.dialog; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], Dialog.prototype, "responses", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Dialog.prototype, "addId", null);
    Dialog = __decorate([
        typeorm_1.Entity({ name: 'dialog' })
    ], Dialog);
    return Dialog;
}());
exports.Dialog = Dialog;
