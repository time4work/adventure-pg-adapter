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
var Character = (function () {
    function Character() {
    }
    Character.prototype.addId = function () {
        this.id = uuid_1.v4();
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Character.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            length: '200',
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Character.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({
            length: '500',
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Character.prototype, "description", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Dialog_1.Dialog; }, function (dialog) { return dialog.character; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], Character.prototype, "dialogs", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Character.prototype, "addId", null);
    Character = __decorate([
        typeorm_1.Entity({ name: 'character' })
    ], Character);
    return Character;
}());
exports.Character = Character;
