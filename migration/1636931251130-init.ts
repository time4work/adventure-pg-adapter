import {MigrationInterface, QueryRunner} from "typeorm";

export class init1636931251130 implements MigrationInterface {
    name = 'init1636931251130'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."dialog_condition_comparison_enum" AS ENUM('lt', 'gt', 'eq')`);
        await queryRunner.query(`CREATE TABLE "dialog_condition" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" integer, "exist" boolean, "comparison" "public"."dialog_condition_comparison_enum" NOT NULL DEFAULT 'eq', "dialogId" uuid, "responseId" uuid, CONSTRAINT "PK_e479cee71f2701de677b703ca69" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dialog_response" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "label" character varying(200) NOT NULL, "description" character varying(500), "dialogId" uuid NOT NULL, "parentId" uuid NOT NULL, "nextId" uuid NOT NULL, CONSTRAINT "PK_782c98eb77f9db4f7e409821b1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dialog_node" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "label" character varying(200) NOT NULL, "description" character varying(500), "timeout" integer, "dailogId" uuid NOT NULL, CONSTRAINT "PK_2bdf095c4863469e3c5482e7098" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dialog" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "label" character varying(200) NOT NULL, "description" character varying(500), "characterId" uuid NOT NULL, CONSTRAINT "PK_09744e0ee61b1ddf028d8eb8497" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "character" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(200) NOT NULL, "description" character varying(500), CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dialog_condition" ADD CONSTRAINT "FK_c2dac18f710edaef24d4d4ec21e" FOREIGN KEY ("dialogId") REFERENCES "dialog"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dialog_condition" ADD CONSTRAINT "FK_1c36ba0180e2ac2933171a4f60f" FOREIGN KEY ("responseId") REFERENCES "dialog_response"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dialog_response" ADD CONSTRAINT "FK_5aa9bd469b8d619961678b0e716" FOREIGN KEY ("dialogId") REFERENCES "dialog"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dialog_response" ADD CONSTRAINT "FK_53d0a03ea9dbf6a61697e80ffe8" FOREIGN KEY ("parentId") REFERENCES "dialog_node"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dialog_response" ADD CONSTRAINT "FK_71c4a7f5bcd6efa04d7fb9377dc" FOREIGN KEY ("nextId") REFERENCES "dialog_node"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dialog_node" ADD CONSTRAINT "FK_f2929b8244f2a4d03dfe0625166" FOREIGN KEY ("dailogId") REFERENCES "dialog"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dialog" ADD CONSTRAINT "FK_082d028f1ecf7fcb464925a6a42" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dialog" DROP CONSTRAINT "FK_082d028f1ecf7fcb464925a6a42"`);
        await queryRunner.query(`ALTER TABLE "dialog_node" DROP CONSTRAINT "FK_f2929b8244f2a4d03dfe0625166"`);
        await queryRunner.query(`ALTER TABLE "dialog_response" DROP CONSTRAINT "FK_71c4a7f5bcd6efa04d7fb9377dc"`);
        await queryRunner.query(`ALTER TABLE "dialog_response" DROP CONSTRAINT "FK_53d0a03ea9dbf6a61697e80ffe8"`);
        await queryRunner.query(`ALTER TABLE "dialog_response" DROP CONSTRAINT "FK_5aa9bd469b8d619961678b0e716"`);
        await queryRunner.query(`ALTER TABLE "dialog_condition" DROP CONSTRAINT "FK_1c36ba0180e2ac2933171a4f60f"`);
        await queryRunner.query(`ALTER TABLE "dialog_condition" DROP CONSTRAINT "FK_c2dac18f710edaef24d4d4ec21e"`);
        await queryRunner.query(`DROP TABLE "character"`);
        await queryRunner.query(`DROP TABLE "dialog"`);
        await queryRunner.query(`DROP TABLE "dialog_node"`);
        await queryRunner.query(`DROP TABLE "dialog_response"`);
        await queryRunner.query(`DROP TABLE "dialog_condition"`);
        await queryRunner.query(`DROP TYPE "public"."dialog_condition_comparison_enum"`);
    }

}
