import {MigrationInterface, QueryRunner} from "typeorm";
import {versioning_function} from "./versioning_function.sql";

export class AddHistoryTables1593597694882 implements MigrationInterface {
    name = 'AddHistoryTables1593597694882'

    //private table_names = ["product_l3_src", "product_l3_dist", "product_l0_src", "product_l0_dist", "survey_l0_relation", "product_l0_instrument_file", "compilation_l3_relation", "compilation", "survey", "survey_l3_relation"];
    private table_names = ["survey"];

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`CREATE TABLE "survey_history" ("uuid" character varying NOT NULL, "name" character varying NOT NULL, "year" character varying NOT NULL, "sys_period" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL), "id" integer NOT NULL, "historyId" SERIAL NOT NULL, CONSTRAINT "PK_1f57bc50c906d529b784ceffc16" PRIMARY KEY ("historyId"))`);
      await queryRunner.query(`ALTER TABLE "survey" ADD "sys_period" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL)`);
      await queryRunner.query(versioning_function);
      this.table_names.forEach(
        async table_name =>
        {
          const query_wrapper = `CREATE TRIGGER versioning_trigger
        BEFORE INSERT OR UPDATE OR DELETE ON ${table_name}
        FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', '${table_name}_history', true);`;
      
          await queryRunner.query(query_wrapper);
        }
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      this.table_names.forEach(
        async table_name =>
        {
          const query_wrapper = `DROP TRIGGER versioning_trigger ON ${table_name}`;
          await queryRunner.query(query_wrapper);
        }
      );
      await queryRunner.query(`ALTER TABLE "survey" DROP COLUMN "sys_period"`);
      await queryRunner.query(`DROP TABLE "survey_history"`);
      await queryRunner.query(`DROP FUNCTION "versioning"`);
    }

}
