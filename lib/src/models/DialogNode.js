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
var DialogNode = (function () {
    function DialogNode() {
    }
    DialogNode_1 = DialogNode;
    DialogNode.prototype.addId = function () {
        this.id = uuid_1.v4();
    };
    var DialogNode_1;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], DialogNode.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            length: '200',
            nullable: false,
        }),
        __metadata("design:type", String)
    ], DialogNode.prototype, "label", void 0);
    __decorate([
        typeorm_1.Column({
            length: '500',
            nullable: true,
        }),
        __metadata("design:type", String)
    ], DialogNode.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], DialogNode.prototype, "timeout", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return DialogNode_1; }, {
            nullable: true,
        }),
        __metadata("design:type", DialogNode)
    ], DialogNode.prototype, "next", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Dialog_1.Dialog; }, function (dialog) { return dialog.nodes; }, {
            nullable: false,
        }),
        __metadata("design:type", Dialog_1.Dialog)
    ], DialogNode.prototype, "dailog", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return DialogResponse_1.DialogResponse; }, function (response) { return response.parent; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], DialogNode.prototype, "responses", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DialogNode.prototype, "addId", null);
    DialogNode = DialogNode_1 = __decorate([
        typeorm_1.Entity({ name: 'dialog_node' })
    ], DialogNode);
    return DialogNode;
}());
exports.DialogNode = DialogNode;
