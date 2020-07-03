import {MigrationInterface, QueryRunner} from "typeorm";

export class AddHistoryViews1593737151606 implements MigrationInterface {
    name = 'AddHistoryViews1593737151606'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE VIEW "compilation_with_history" AS SELECT * FROM "compilation" UNION ALL SELECT * FROM "compilation_history"`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("type", "schema", "name", "value") VALUES ($1, $2, $3, $4)`, ["VIEW","public","compilation_with_history","SELECT * FROM \"compilation\" UNION ALL SELECT * FROM \"compilation_history\""]);
        await queryRunner.query(`CREATE VIEW "compilation_l3_relation_with_history" AS SELECT * FROM "compilation_l3_relation" UNION ALL SELECT * FROM "compilation_l3_relation_history"`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("type", "schema", "name", "value") VALUES ($1, $2, $3, $4)`, ["VIEW","public","compilation_l3_relation_with_history","SELECT * FROM \"compilation_l3_relation\" UNION ALL SELECT * FROM \"compilation_l3_relation_history\""]);
        await queryRunner.query(`CREATE VIEW "survey_l0_relation_with_history" AS SELECT * FROM "survey_l0_relation" UNION ALL SELECT * FROM "survey_l0_relation_history"`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("type", "schema", "name", "value") VALUES ($1, $2, $3, $4)`, ["VIEW","public","survey_l0_relation_with_history","SELECT * FROM \"survey_l0_relation\" UNION ALL SELECT * FROM \"survey_l0_relation_history\""]);
        await queryRunner.query(`CREATE VIEW "survey_l3_relation_with_history" AS SELECT * FROM "survey_l3_relation" UNION ALL SELECT * FROM "survey_l3_relation_history"`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("type", "schema", "name", "value") VALUES ($1, $2, $3, $4)`, ["VIEW","public","survey_l3_relation_with_history","SELECT * FROM \"survey_l3_relation\" UNION ALL SELECT * FROM \"survey_l3_relation_history\""]);
        await queryRunner.query(`CREATE VIEW "product_l0_dist_with_history" AS SELECT * FROM "product_l0_dist" UNION ALL SELECT * FROM "product_l0_dist_history"`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("type", "schema", "name", "value") VALUES ($1, $2, $3, $4)`, ["VIEW","public","product_l0_dist_with_history","SELECT * FROM \"product_l0_dist\" UNION ALL SELECT * FROM \"product_l0_dist_history\""]);
        await queryRunner.query(`CREATE VIEW "product_l0_instrument_file_with_history" AS SELECT * FROM "product_l0_instrument_file" UNION ALL SELECT * FROM "product_l0_instrument_file_history"`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("type", "schema", "name", "value") VALUES ($1, $2, $3, $4)`, ["VIEW","public","product_l0_instrument_file_with_history","SELECT * FROM \"product_l0_instrument_file\" UNION ALL SELECT * FROM \"product_l0_instrument_file_history\""]);
        await queryRunner.query(`CREATE VIEW "product_l0_src_with_history" AS SELECT * FROM "product_l0_src" UNION ALL SELECT * FROM "product_l0_src_history"`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("type", "schema", "name", "value") VALUES ($1, $2, $3, $4)`, ["VIEW","public","product_l0_src_with_history","SELECT * FROM \"product_l0_src\" UNION ALL SELECT * FROM \"product_l0_src_history\""]);
        await queryRunner.query(`CREATE VIEW "product_l3_dist_with_history" AS SELECT * FROM "product_l3_dist" UNION ALL SELECT * FROM "product_l3_dist_history"`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("type", "schema", "name", "value") VALUES ($1, $2, $3, $4)`, ["VIEW","public","product_l3_dist_with_history","SELECT * FROM \"product_l3_dist\" UNION ALL SELECT * FROM \"product_l3_dist_history\""]);
        await queryRunner.query(`CREATE VIEW "product_l3_src_with_history" AS SELECT * FROM "product_l3_src" UNION ALL SELECT * FROM "product_l3_src_history"`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("type", "schema", "name", "value") VALUES ($1, $2, $3, $4)`, ["VIEW","public","product_l3_src_with_history","SELECT * FROM \"product_l3_src\" UNION ALL SELECT * FROM \"product_l3_src_history\""]);
        await queryRunner.query(`CREATE VIEW "survey_with_history" AS SELECT * FROM "survey" UNION ALL SELECT * FROM "survey_history"`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("type", "schema", "name", "value") VALUES ($1, $2, $3, $4)`, ["VIEW","public","survey_with_history","SELECT * FROM \"survey\" UNION ALL SELECT * FROM \"survey_history\""]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = 'VIEW' AND "schema" = $1 AND "name" = $2`, ["public","survey_with_history"]);
        await queryRunner.query(`DROP VIEW "survey_with_history"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = 'VIEW' AND "schema" = $1 AND "name" = $2`, ["public","product_l3_src_with_history"]);
        await queryRunner.query(`DROP VIEW "product_l3_src_with_history"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = 'VIEW' AND "schema" = $1 AND "name" = $2`, ["public","product_l3_dist_with_history"]);
        await queryRunner.query(`DROP VIEW "product_l3_dist_with_history"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = 'VIEW' AND "schema" = $1 AND "name" = $2`, ["public","product_l0_src_with_history"]);
        await queryRunner.query(`DROP VIEW "product_l0_src_with_history"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = 'VIEW' AND "schema" = $1 AND "name" = $2`, ["public","product_l0_instrument_file_with_history"]);
        await queryRunner.query(`DROP VIEW "product_l0_instrument_file_with_history"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = 'VIEW' AND "schema" = $1 AND "name" = $2`, ["public","product_l0_dist_with_history"]);
        await queryRunner.query(`DROP VIEW "product_l0_dist_with_history"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = 'VIEW' AND "schema" = $1 AND "name" = $2`, ["public","survey_l3_relation_with_history"]);
        await queryRunner.query(`DROP VIEW "survey_l3_relation_with_history"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = 'VIEW' AND "schema" = $1 AND "name" = $2`, ["public","survey_l0_relation_with_history"]);
        await queryRunner.query(`DROP VIEW "survey_l0_relation_with_history"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = 'VIEW' AND "schema" = $1 AND "name" = $2`, ["public","compilation_l3_relation_with_history"]);
        await queryRunner.query(`DROP VIEW "compilation_l3_relation_with_history"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = 'VIEW' AND "schema" = $1 AND "name" = $2`, ["public","compilation_with_history"]);
        await queryRunner.query(`DROP VIEW "compilation_with_history"`);
    }

}
