import {MigrationInterface, QueryRunner} from "typeorm";
import {versioning_function} from "./versioning_function.sql";
import { v4 as uuidv4 } from 'uuid';

// node_modules/typeorm-model-generator/bin/typeorm-model-generator --cf "param" -h $POSTGRES_HOSTNAME -d $POSTGRES_DATABASE -p $POSTGRES_PORT -u $POSTGRES_USER -x $POSTGRES_PASSWORD -e postgres --skipSchema true

export class AddHistoryTables1593597694882 implements MigrationInterface {
    name = 'AddHistoryTables1593597694882'

    private table_names = ["product_l3_src", "product_l3_dist", "product_l0_src", "product_l0_dist", "survey_l0_relation", "product_l0_instrument_file", 
    "compilation_l3_relation", "compilation", "survey", "survey_l3_relation"];

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(versioning_function);
      await this.table_names.forEach(
        async table_name =>
        {
          const uuidstring = String(uuidv4()).replace("-","")
          await queryRunner.query(`ALTER TABLE "${table_name}" ADD "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL)`);
          await queryRunner.query(`CREATE TABLE "${table_name}_history" (LIKE "${table_name}")`);
          const query_wrapper = `CREATE TRIGGER versioning_trigger
        BEFORE INSERT OR UPDATE OR DELETE ON "${table_name}"
        FOR EACH ROW EXECUTE PROCEDURE versioning('sysPeriod', "${table_name}_history", true)`;
      
          await queryRunner.query(query_wrapper);
          // await queryRunner.query(`CREATE VIEW "${table_name}_with_history" AS SELECT * FROM "${table_name}" UNION ALL SELECT * FROM "${table_name}_history";`);
        }
      );
      await queryRunner.query('COMMIT');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await this.table_names.forEach(async (table_name) => {
        // await queryRunner.query(`DROP VIEW IF EXISTS "${table_name}_with_history";`);
        await queryRunner.query(`DROP TRIGGER versioning_trigger ON "${table_name}";`);
        await queryRunner.query(`ALTER TABLE "${table_name}" DROP COLUMN "sysPeriod";`);
        await queryRunner.query(`DROP TABLE "${table_name}_history";`);
      });

      await queryRunner.query(`DROP FUNCTION "versioning";`);
    }

}
