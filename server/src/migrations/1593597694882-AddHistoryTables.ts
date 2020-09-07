import {MigrationInterface, QueryRunner} from "typeorm";
import {versioningFunction} from "./versioning_function.sql";
import { v4 as uuidv4 } from 'uuid';

// node_modules/typeorm-model-generator/bin/typeorm-model-generator --cf "param" -h $POSTGRES_HOSTNAME -d $POSTGRES_DATABASE -p $POSTGRES_PORT -u $POSTGRES_USER -x $POSTGRES_PASSWORD -e postgres --skipSchema true

export class AddHistoryTables1593597694882 implements MigrationInterface {
    name = 'AddHistoryTables1593597694882'

    private tableNames = ["product_l3_src", "product_l3_dist", "product_l0_src", "product_l0_dist", "survey_l0_relation", "product_l0_instrument_file", 
    "compilation_l3_relation", "compilation", "survey", "survey_l3_relation"];

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(versioningFunction);
      await this.tableNames.forEach(
        async tableName =>
        {
          const uuidstring = String(uuidv4()).replace("-","")
          await queryRunner.query(`ALTER TABLE "${tableName}" ADD "sysPeriod" tstzrange NOT NULL DEFAULT tstzrange(CURRENT_TIMESTAMP, NULL)`);
          await queryRunner.query(`CREATE TABLE "${tableName}_history" (LIKE "${tableName}")`);
          const queryWrapper = `CREATE TRIGGER versioning_trigger
        BEFORE INSERT OR UPDATE OR DELETE ON "${tableName}"
        FOR EACH ROW EXECUTE PROCEDURE versioning('sysPeriod', "${tableName}_history", true)`;
      
          await queryRunner.query(queryWrapper);
          // await queryRunner.query(`CREATE VIEW "${tableName}_with_history" AS SELECT * FROM "${tableName}" UNION ALL SELECT * FROM "${tableName}_history";`);
        }
      );
      await queryRunner.query('COMMIT');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await this.tableNames.forEach(async (tableName) => {
        // await queryRunner.query(`DROP VIEW IF EXISTS "${tableName}_with_history";`);
        await queryRunner.query(`DROP TRIGGER versioning_trigger ON "${tableName}";`);
        await queryRunner.query(`ALTER TABLE "${tableName}" DROP COLUMN "sysPeriod";`);
        await queryRunner.query(`DROP TABLE "${tableName}_history";`);
      });

      await queryRunner.query(`DROP FUNCTION "versioning";`);
    }

}
