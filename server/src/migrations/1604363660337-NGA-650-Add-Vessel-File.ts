import {MigrationInterface, QueryRunner} from "typeorm";

export class NGA650AddVesselFile1604363660337 implements MigrationInterface {
    name = 'NGA650AddVesselFile1604363660337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // We drop & re-add the history views because they remember the fields that they include
        await queryRunner.query(`DROP VIEW "product_l2_src_with_history"`);

        await queryRunner.query(`ALTER TABLE "product_l2_src" ADD "vesselFileLocation" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "product_l2_src_history" ADD "vesselFileLocation" character varying NOT NULL DEFAULT ''`);

        await queryRunner.query(`CREATE VIEW "product_l2_src_with_history" AS SELECT * FROM "product_l2_src" UNION ALL SELECT * FROM "product_l2_src_history"`);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP VIEW "product_l2_src_with_history"`);
        await queryRunner.query(`ALTER TABLE "product_l2_src" DROP COLUMN "vesselFileLocation"`);
        await queryRunner.query(`ALTER TABLE "product_l2_src_history" DROP COLUMN "vesselFileLocation"`);
        await queryRunner.query(`CREATE VIEW "product_l2_src_with_history" AS SELECT * FROM "product_l2_src" UNION ALL SELECT * FROM "product_l2_src_history"`);
    }

}
