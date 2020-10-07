import {MigrationInterface, QueryRunner} from "typeorm";

export class NGA648L2Products1602030554669 implements MigrationInterface {
    name = 'NGA648L2Products1602030554669'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "product_l2_src_verticaldatum_enum" AS ENUM('Unknown', 'LAT', 'AHD', 'LMSL', 'WGS84', 'NAD83(HARN)', 'NAD83(CORSxx)', 'NAD83(NSRSxx)', 'NAD83(PACPxx)', 'NAD83(MARPxx)', 'ITRFxx', 'NAVD88', 'NGVD29', 'EGM2008', 'EGM1996', 'EGM1984', 'MLLW', 'MLW', 'MHW', 'MHHW', 'DTL', 'MTL', 'LWD')`);
        
        await queryRunner.query(`CREATE TABLE "product_l2_src" ("id" SERIAL NOT NULL, "uuid" character varying NOT NULL, "name" character varying NOT NULL, "srs" character varying NOT NULL, "verticalDatum" "product_l2_src_verticaldatum_enum" NOT NULL DEFAULT 'Unknown', "metadataPersistentId" character varying NOT NULL, "productGsfLocation" character varying NOT NULL, "productPosmvLocation" character varying NOT NULL, "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL), CONSTRAINT "PK_5a01269b2bea87ed4f7e7ca526f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "survey_l2_relation" ("id" SERIAL NOT NULL, "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL), "surveyId" integer NOT NULL, "productL2SrcId" integer NOT NULL, CONSTRAINT "PK_8dcad8ef70bfcc3b04b4b5cf5b1" PRIMARY KEY ("id"))`);

        await queryRunner.query(`ALTER TABLE "survey_l2_relation" ADD CONSTRAINT "FK_b69cbb255fbfccc4f36f8cd1e55" FOREIGN KEY ("surveyId") REFERENCES "survey"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "survey_l2_relation" ADD CONSTRAINT "FK_869e57e47e45f40a1d725f8c601" FOREIGN KEY ("productL2SrcId") REFERENCES "product_l2_src"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);

        await queryRunner.query(`CREATE TABLE "product_l2_src_history" (LIKE "product_l2_src")`);
        await queryRunner.query(`CREATE TRIGGER versioning_trigger
        BEFORE INSERT OR UPDATE OR DELETE ON "product_l2_src"
        FOR EACH ROW EXECUTE PROCEDURE versioning('sysPeriod', "product_l2_src_history", true)`);

        await queryRunner.query(`CREATE TABLE "survey_l2_relation_history" (LIKE "survey_l2_relation")`);
        await queryRunner.query(`CREATE TRIGGER versioning_trigger
        BEFORE INSERT OR UPDATE OR DELETE ON "survey_l2_relation"
        FOR EACH ROW EXECUTE PROCEDURE versioning('sysPeriod', "survey_l2_relation_history", true)`);

        await queryRunner.query(`CREATE VIEW "survey_l2_relation_with_history" AS SELECT * FROM "survey_l2_relation" UNION ALL SELECT * FROM "survey_l2_relation_history"`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("type", "schema", "name", "value") VALUES ($1, $2, $3, $4)`, ["VIEW","public","survey_l2_relation_with_history","SELECT * FROM \"survey_l2_relation\" UNION ALL SELECT * FROM \"survey_l2_relation_history\""]);
        await queryRunner.query(`CREATE VIEW "product_l2_src_with_history" AS SELECT * FROM "product_l2_src" UNION ALL SELECT * FROM "product_l2_src_history"`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("type", "schema", "name", "value") VALUES ($1, $2, $3, $4)`, ["VIEW","public","product_l2_src_with_history","SELECT * FROM \"product_l2_src\" UNION ALL SELECT * FROM \"product_l2_src_history\""]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TRIGGER versioning_trigger ON "survey_l2_relation";`);
        await queryRunner.query(`DROP TABLE "survey_l2_relation_history";`);
        await queryRunner.query(`DROP TRIGGER versioning_trigger ON "product_l2_src";`);
        await queryRunner.query(`DROP TABLE "product_l2_src_history";`);

        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = 'VIEW' AND "schema" = $1 AND "name" = $2`, ["public","product_l2_src_with_history"]);
        await queryRunner.query(`DROP VIEW "product_l2_src_with_history"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = 'VIEW' AND "schema" = $1 AND "name" = $2`, ["public","survey_l2_relation_with_history"]);
        await queryRunner.query(`DROP VIEW "survey_l2_relation_with_history"`);
        await queryRunner.query(`ALTER TABLE "survey_l2_relation" DROP CONSTRAINT "FK_869e57e47e45f40a1d725f8c601"`);
        await queryRunner.query(`ALTER TABLE "survey_l2_relation" DROP CONSTRAINT "FK_b69cbb255fbfccc4f36f8cd1e55"`);
        await queryRunner.query(`DROP TABLE "survey_l2_relation"`);
        await queryRunner.query(`DROP TABLE "product_l2_src"`);
        await queryRunner.query(`DROP TYPE "product_l2_src_verticaldatum_enum"`);
    }

}
