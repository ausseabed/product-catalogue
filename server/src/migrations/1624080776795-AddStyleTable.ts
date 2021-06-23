import {MigrationInterface, QueryRunner} from "typeorm";

export class AddStyleTable1624080776795 implements MigrationInterface {
    name = 'AddStyleTable1624080776795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // We drop & re-add the history views because they remember the fields that they include
        await queryRunner.query(`DROP VIEW "product_l3_src_with_history"`);

        await queryRunner.query(`CREATE TABLE "style" ("id" character varying NOT NULL, "name" character varying NOT NULL, "geoserverStyleName" character varying NOT NULL, "description" character varying NOT NULL, "deletedDate" TIMESTAMP, CONSTRAINT "PK_12a3ba7fe23b5386181ac6b0ac0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_l3_src_available_styles_style" ("productL3SrcId" integer NOT NULL, "styleId" character varying NOT NULL, CONSTRAINT "PK_879b80f7b4e0ea2e8b69e65e09d" PRIMARY KEY ("productL3SrcId", "styleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3c00642e473165e7eaec4c418e" ON "product_l3_src_available_styles_style" ("productL3SrcId") `);
        await queryRunner.query(`CREATE INDEX "IDX_918a0c1d7b073b8bf1456319a9" ON "product_l3_src_available_styles_style" ("styleId") `);
        await queryRunner.query(`ALTER TABLE "product_l3_src" ADD "defaultStyleId" character varying`);
        await queryRunner.query(`ALTER TABLE "product_l3_src_history" ADD "defaultStyleId" character varying`);
        await queryRunner.query(`ALTER TABLE "product_l3_src" ADD CONSTRAINT "FK_c930bf8d43a4ce8aec40ac5e37e" FOREIGN KEY ("defaultStyleId") REFERENCES "style"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_l3_src_available_styles_style" ADD CONSTRAINT "FK_3c00642e473165e7eaec4c418ef" FOREIGN KEY ("productL3SrcId") REFERENCES "product_l3_src"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_l3_src_available_styles_style" ADD CONSTRAINT "FK_918a0c1d7b073b8bf1456319a97" FOREIGN KEY ("styleId") REFERENCES "style"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);

        await queryRunner.query(`INSERT INTO "style" ("id", "name", "geoserverStyleName", "description", "deletedDate") values ('BATHYMETRY', 'Bathymetry', 'Bathymetry', 'Default bathymetry style', null)`);
        await queryRunner.query(`INSERT INTO "style" ("id", "name", "geoserverStyleName", "description", "deletedDate") values ('BATHYMETRY_SHALLOW', 'BathymetryShallow', 'BathymetryShallow', 'Default shallow bathymetry', null)`);
        await queryRunner.query(`INSERT INTO "style" ("id", "name", "geoserverStyleName", "description", "deletedDate") values ('MH370_PHASE2', 'MH370 Phase 2', 'MH370Phase2', ' ', null)`);
        await queryRunner.query(`INSERT INTO "style" ("id", "name", "geoserverStyleName", "description", "deletedDate") values ('MH370_PHASE2_INVERSE', 'MH370 Phase 2 Inverse', 'MH370Phase2Inverse', ' ', null)`);

        await queryRunner.query(`UPDATE "product_l3_src" SET "defaultStyleId" = 'BATHYMETRY'`);
        await queryRunner.query(`INSERT INTO "product_l3_src_available_styles_style" SELECT id, 'BATHYMETRY' FROM "product_l3_src"`);
        await queryRunner.query(`INSERT INTO "product_l3_src_available_styles_style" SELECT id, 'BATHYMETRY_SHALLOW' FROM "product_l3_src"`);

        await queryRunner.query(`CREATE VIEW "product_l3_src_with_history" AS SELECT * FROM "product_l3_src" UNION ALL SELECT * FROM "product_l3_src_history"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP VIEW "product_l3_src_with_history"`);

        await queryRunner.query(`ALTER TABLE "product_l3_src_available_styles_style" DROP CONSTRAINT "FK_918a0c1d7b073b8bf1456319a97"`);
        await queryRunner.query(`ALTER TABLE "product_l3_src_available_styles_style" DROP CONSTRAINT "FK_3c00642e473165e7eaec4c418ef"`);
        await queryRunner.query(`ALTER TABLE "product_l3_src" DROP CONSTRAINT "FK_c930bf8d43a4ce8aec40ac5e37e"`);
        await queryRunner.query(`ALTER TABLE "product_l3_src" DROP COLUMN "defaultStyleId"`);
        await queryRunner.query(`ALTER TABLE "product_l3_src_history" DROP COLUMN "defaultStyleId"`);
        await queryRunner.query(`DROP INDEX "IDX_918a0c1d7b073b8bf1456319a9"`);
        await queryRunner.query(`DROP INDEX "IDX_3c00642e473165e7eaec4c418e"`);
        await queryRunner.query(`DROP TABLE "product_l3_src_available_styles_style"`);
        await queryRunner.query(`DROP TABLE "style"`);

        await queryRunner.query(`CREATE VIEW "product_l3_src_with_history" AS SELECT * FROM "product_l3_src" UNION ALL SELECT * FROM "product_l3_src_history"`);
    }

}
