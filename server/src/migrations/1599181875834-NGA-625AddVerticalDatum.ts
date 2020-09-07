import {MigrationInterface, QueryRunner} from "typeorm";

export class NGA625AddVerticalDatum1599181875834 implements MigrationInterface {
    name = 'NGA625AddVerticalDatum1599181875834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // We drop & re-add the history views because they remember the fields that they include
        await queryRunner.query(`DROP VIEW "product_l0_src_with_history"`);
        await queryRunner.query(`DROP VIEW "product_l3_src_with_history"`);

        await queryRunner.query(`CREATE TYPE "product_l3_src_verticaldatum_enum" AS ENUM('Unknown', 'LAT', 'AHD', 'LMSL', 'WGS84', 'NAD83(HARN)', 'NAD83(CORSxx)', 'NAD83(NSRSxx)', 'NAD83(PACPxx)', 'NAD83(MARPxx)', 'ITRFxx', 'NAVD88', 'NGVD29', 'EGM2008', 'EGM1996', 'EGM1984', 'MLLW', 'MLW', 'MHW', 'MHHW', 'DTL', 'MTL', 'LWD')`);
        await queryRunner.query(`ALTER TABLE "product_l3_src" ADD "verticalDatum" "product_l3_src_verticaldatum_enum" NOT NULL DEFAULT 'Unknown'`);
        await queryRunner.query(`ALTER TABLE "product_l3_src_history" ADD "verticalDatum" "product_l3_src_verticaldatum_enum" NOT NULL DEFAULT 'Unknown'`);

        // Set default for GA grids
        await queryRunner.query(`UPDATE "product_l3_src" SET "verticalDatum"='LMSL'`);
        await queryRunner.query(`UPDATE "product_l3_src_history" SET "verticalDatum"='LMSL'`);

        await queryRunner.query(`CREATE TYPE "product_l0_src_verticaldatum_enum" AS ENUM('Unknown', 'LAT', 'AHD', 'LMSL', 'WGS84', 'NAD83(HARN)', 'NAD83(CORSxx)', 'NAD83(NSRSxx)', 'NAD83(PACPxx)', 'NAD83(MARPxx)', 'ITRFxx', 'NAVD88', 'NGVD29', 'EGM2008', 'EGM1996', 'EGM1984', 'MLLW', 'MLW', 'MHW', 'MHHW', 'DTL', 'MTL', 'LWD')`);
        await queryRunner.query(`ALTER TABLE "product_l0_src" ADD "verticalDatum" "product_l0_src_verticaldatum_enum" NOT NULL DEFAULT 'Unknown'`);
        await queryRunner.query(`ALTER TABLE "product_l0_src_history" ADD "verticalDatum" "product_l0_src_verticaldatum_enum" NOT NULL DEFAULT 'Unknown'`);

        await queryRunner.query(`CREATE VIEW "product_l3_src_with_history" AS SELECT * FROM "product_l3_src" UNION ALL SELECT * FROM "product_l3_src_history"`);
        await queryRunner.query(`CREATE VIEW "product_l0_src_with_history" AS SELECT * FROM "product_l3_src" UNION ALL SELECT * FROM "product_l3_src_history"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP VIEW "product_l3_src_with_history"`);
        await queryRunner.query(`DROP VIEW "product_l0_src_with_history"`);
        await queryRunner.query(`ALTER TABLE "product_l3_src_history" DROP COLUMN "verticalDatum"`);
        await queryRunner.query(`ALTER TABLE "product_l3_src" DROP COLUMN "verticalDatum"`);
        await queryRunner.query(`DROP TYPE "product_l3_src_verticaldatum_enum"`);

        await queryRunner.query(`ALTER TABLE "product_l0_src_history" DROP COLUMN "verticalDatum"`);
        await queryRunner.query(`ALTER TABLE "product_l0_src" DROP COLUMN "verticalDatum"`);
        await queryRunner.query(`DROP TYPE "product_l0_src_verticaldatum_enum"`);

        await queryRunner.query(`CREATE VIEW "product_l0_src_with_history" AS SELECT * FROM "product_l3_src" UNION ALL SELECT * FROM "product_l3_src_history"`);
        await queryRunner.query(`CREATE VIEW "product_l3_src_with_history" AS SELECT * FROM "product_l3_src" UNION ALL SELECT * FROM "product_l3_src_history"`);
    }

}
