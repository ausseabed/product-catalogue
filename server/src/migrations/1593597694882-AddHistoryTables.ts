import {MigrationInterface, QueryRunner} from "typeorm";
import {versioning_function} from "./versioning_function.sql";
import { v4 as uuidv4 } from 'uuid';

// node_modules/typeorm-model-generator/bin/typeorm-model-generator --cf "param" -h $POSTGRES_HOSTNAME -d $POSTGRES_DATABASE -p $POSTGRES_PORT -u $POSTGRES_USER -x $POSTGRES_PASSWORD -e postgres --skipSchema true

export class AddHistoryTables1593597694882 implements MigrationInterface {
    name = 'AddHistoryTables1593597694882'

    private table_names = ["product_l3_src", "product_l3_dist", "product_l0_src", "product_l0_dist", "survey_l0_relation", "product_l0_instrument_file", "compilation_l3_relation", "compilation", "survey", "survey_l3_relation"];

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`CREATE TABLE "compilation_history" ("uuid" character varying NOT NULL, "name" character varying NOT NULL, "year" character varying NOT NULL, "sysPeriod" tstzrange NOT NULL, "id" integer NOT NULL, "historyId" SERIAL NOT NULL, CONSTRAINT "PK_ad58e5715390f76707318ac5c89" PRIMARY KEY ("historyId"))`);
      await queryRunner.query(`CREATE TABLE "compilation_l3_relation_history" ("uuid" character varying NOT NULL, "name" character varying NOT NULL, "year" character varying NOT NULL, "sysPeriod" tstzrange NOT NULL, "id" integer NOT NULL, "historyId" SERIAL NOT NULL, CONSTRAINT "PK_adb45ad74617263e531f2acd546" PRIMARY KEY ("historyId"))`);
      await queryRunner.query(`CREATE TABLE "survey_l0_relation_history" ("uuid" character varying NOT NULL, "name" character varying NOT NULL, "year" character varying NOT NULL, "sysPeriod" tstzrange NOT NULL, "id" integer NOT NULL, "historyId" SERIAL NOT NULL, CONSTRAINT "PK_e68a849dd405887d3a49f7276b3" PRIMARY KEY ("historyId"))`);
      await queryRunner.query(`CREATE TABLE "survey_l3_relation_history" ("uuid" character varying NOT NULL, "name" character varying NOT NULL, "year" character varying NOT NULL, "sysPeriod" tstzrange NOT NULL, "id" integer NOT NULL, "historyId" SERIAL NOT NULL, CONSTRAINT "PK_3bf5614f8581f277424225b50fd" PRIMARY KEY ("historyId"))`);
      await queryRunner.query(`CREATE TABLE "product_l0_dist_history" ("uuid" character varying NOT NULL, "name" character varying NOT NULL, "year" character varying NOT NULL, "sysPeriod" tstzrange NOT NULL, "id" integer NOT NULL, "historyId" SERIAL NOT NULL, CONSTRAINT "PK_e8fcfc5686ed9a213d4b68cdd89" PRIMARY KEY ("historyId"))`);
      await queryRunner.query(`CREATE TABLE "product_l0_instrument_file_history" ("uuid" character varying NOT NULL, "name" character varying NOT NULL, "year" character varying NOT NULL, "sysPeriod" tstzrange NOT NULL, "id" integer NOT NULL, "historyId" SERIAL NOT NULL, CONSTRAINT "PK_a9c83dcf58718841c5f7937ed72" PRIMARY KEY ("historyId"))`);
      await queryRunner.query(`CREATE TABLE "product_l0_src_history" ("uuid" character varying NOT NULL, "name" character varying NOT NULL, "year" character varying NOT NULL, "sysPeriod" tstzrange NOT NULL, "id" integer NOT NULL, "historyId" SERIAL NOT NULL, CONSTRAINT "PK_95a441298d127806c535536b0fe" PRIMARY KEY ("historyId"))`);
      await queryRunner.query(`CREATE TABLE "product_l3_dist_history" ("uuid" character varying NOT NULL, "name" character varying NOT NULL, "year" character varying NOT NULL, "sysPeriod" tstzrange NOT NULL, "id" integer NOT NULL, "historyId" SERIAL NOT NULL, CONSTRAINT "PK_688b6eac8de9cbda4a57ac85b63" PRIMARY KEY ("historyId"))`);
      await queryRunner.query(`CREATE TABLE "product_l3_src_history" ("uuid" character varying NOT NULL, "name" character varying NOT NULL, "year" character varying NOT NULL, "sysPeriod" tstzrange NOT NULL, "id" integer NOT NULL, "historyId" SERIAL NOT NULL, CONSTRAINT "PK_9a89c091b23ec70dce3639671dd" PRIMARY KEY ("historyId"))`);
      await queryRunner.query(`CREATE TABLE "survey_history" ("uuid" character varying NOT NULL, "name" character varying NOT NULL, "year" character varying NOT NULL, "sysPeriod" tstzrange NOT NULL, "id" integer NOT NULL, "historyId" SERIAL NOT NULL, CONSTRAINT "PK_1f57bc50c906d529b784ceffc16" PRIMARY KEY ("historyId"))`);
      await queryRunner.query(`ALTER TABLE "compilation" ADD "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)`);
      await queryRunner.query(`ALTER TABLE "product_l3_src" ADD "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)`);
      await queryRunner.query(`ALTER TABLE "compilation_l3_relation" ADD "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)`);
      await queryRunner.query(`ALTER TABLE "product_l0_src" ADD "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)`);
      await queryRunner.query(`ALTER TABLE "survey" ADD "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)`);
      await queryRunner.query(`ALTER TABLE "survey_l0_relation" ADD "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)`);
      await queryRunner.query(`ALTER TABLE "survey_l3_relation" ADD "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)`);
      await queryRunner.query(`ALTER TABLE "product_l0_instrument_file" ADD "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)`);
      await queryRunner.query(`ALTER TABLE "product_l0_dist" ADD "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)`);
      await queryRunner.query(`ALTER TABLE "product_l3_dist" ADD "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)`);
      await queryRunner.query(versioning_function);
      this.table_names.forEach(
        async table_name =>
        {
          const uuidstring = String(uuidv4()).replace("-","")
          // await queryRunner.query(`CREATE TABLE "${table_name}_history" (LIKE "${table_name}")`);
          // await queryRunner.query(`ALTER TABLE "${table_name}" ADD "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL)`);
          const query_wrapper = `CREATE TRIGGER versioning_trigger
        BEFORE INSERT OR UPDATE OR DELETE ON ${table_name}
        FOR EACH ROW EXECUTE PROCEDURE versioning('sysPeriod', '${table_name}_history', true)`;
      
          await queryRunner.query(query_wrapper);
          // await queryRunner.query(`CREATE VIEW ${table_name}_with_history AS SELECT * FROM ${table_name} UNION ALL SELECT * FROM ${table_name}_history`);
        }
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      this.table_names.forEach(
        async table_name =>
        {
          // await queryRunner.query(`DROP VIEW ${table_name}_with_history`);
          await queryRunner.query(`DROP TRIGGER versioning_trigger ON ${table_name}`);
          // await queryRunner.query(`ALTER TABLE "${table_name}" DROP COLUMN "sysPeriod"`);
          // await queryRunner.query(`DROP TABLE "${table_name}_history"`);
        }
      );

      await queryRunner.query(`ALTER TABLE "product_l3_dist" DROP COLUMN "sysPeriod"`);
      await queryRunner.query(`ALTER TABLE "product_l0_dist" DROP COLUMN "sysPeriod"`);
      await queryRunner.query(`ALTER TABLE "product_l0_instrument_file" DROP COLUMN "sysPeriod"`);
      await queryRunner.query(`ALTER TABLE "survey_l3_relation" DROP COLUMN "sysPeriod"`);
      await queryRunner.query(`ALTER TABLE "survey_l0_relation" DROP COLUMN "sysPeriod"`);
      await queryRunner.query(`ALTER TABLE "survey" DROP COLUMN "sysPeriod"`);
      await queryRunner.query(`ALTER TABLE "product_l0_src" DROP COLUMN "sysPeriod"`);
      await queryRunner.query(`ALTER TABLE "compilation_l3_relation" DROP COLUMN "sysPeriod"`);
      await queryRunner.query(`ALTER TABLE "product_l3_src" DROP COLUMN "sysPeriod"`);
      await queryRunner.query(`ALTER TABLE "compilation" DROP COLUMN "sysPeriod"`);
      await queryRunner.query(`DROP TABLE "survey_history"`);
      await queryRunner.query(`DROP TABLE "product_l3_src_history"`);
      await queryRunner.query(`DROP TABLE "product_l3_dist_history"`);
      await queryRunner.query(`DROP TABLE "product_l0_src_history"`);
      await queryRunner.query(`DROP TABLE "product_l0_instrument_file_history"`);
      await queryRunner.query(`DROP TABLE "product_l0_dist_history"`);
      await queryRunner.query(`DROP TABLE "survey_l3_relation_history"`);
      await queryRunner.query(`DROP TABLE "survey_l0_relation_history"`);
      await queryRunner.query(`DROP TABLE "compilation_l3_relation_history"`);
      await queryRunner.query(`DROP TABLE "compilation_history"`);

      await queryRunner.query(`DROP FUNCTION "versioning"`);
    }

}
