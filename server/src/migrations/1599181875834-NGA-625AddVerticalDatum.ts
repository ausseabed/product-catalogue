import {MigrationInterface, QueryRunner} from "typeorm";

export class NGA625AddVerticalDatum1599181875834 implements MigrationInterface {
    name = 'NGA625AddVerticalDatum1599181875834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "product_l0_src_verticaldatum_enum" AS ENUM('NAD83(HARN)', 'NAD83(CORSxx)', 'NAD83(NSRSxx)', 'NAD83(PACPxx)', 'NAD83(MARPxx)', 'ITRFxx', 'WGS84', 'NAVD88', 'NGVD29', 'EGM2008', 'EGM1996', 'EGM1984', 'LMSL', 'MLLW', 'MLW', 'MHW', 'MHHW', 'DTL', 'MTL', 'LWD', 'AHD', 'Unknown')`);
        await queryRunner.query(`ALTER TABLE "product_l0_src" ADD "verticalDatum" "product_l0_src_verticaldatum_enum" NOT NULL DEFAULT 'Unknown'`);
        await queryRunner.query(`ALTER TABLE "product_l0_src_history" ADD "verticalDatum" "product_l0_src_verticaldatum_enum" NOT NULL DEFAULT 'Unknown'`);

        await queryRunner.query(`CREATE TYPE "product_l3_src_verticaldatum_enum" AS ENUM('NAD83(HARN)', 'NAD83(CORSxx)', 'NAD83(NSRSxx)', 'NAD83(PACPxx)', 'NAD83(MARPxx)', 'ITRFxx', 'WGS84', 'NAVD88', 'NGVD29', 'EGM2008', 'EGM1996', 'EGM1984', 'LMSL', 'MLLW', 'MLW', 'MHW', 'MHHW', 'DTL', 'MTL', 'LWD', 'AHD', 'Unknown')`);
        await queryRunner.query(`ALTER TABLE "product_l3_src" ADD "verticalDatum" "product_l3_src_verticaldatum_enum" NOT NULL DEFAULT 'Unknown'`);
        await queryRunner.query(`ALTER TABLE "product_l3_src_history" ADD "verticalDatum" "product_l3_src_verticaldatum_enum" NOT NULL DEFAULT 'Unknown'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_l3_src_history" DROP COLUMN "verticalDatum"`);
        await queryRunner.query(`ALTER TABLE "product_l3_src" DROP COLUMN "verticalDatum"`);
        await queryRunner.query(`DROP TYPE "product_l3_src_verticaldatum_enum"`);

        await queryRunner.query(`ALTER TABLE "product_l0_src_history" DROP COLUMN "verticalDatum"`);
        await queryRunner.query(`ALTER TABLE "product_l0_src" DROP COLUMN "verticalDatum"`);
        await queryRunner.query(`DROP TYPE "product_l0_src_verticaldatum_enum"`);
    }

}
