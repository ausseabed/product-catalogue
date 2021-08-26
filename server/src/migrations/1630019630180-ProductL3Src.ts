import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductL3Src1630019630180 implements MigrationInterface {
    name = 'ProductL3Src1630019630180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // We drop & re-add the history views because they remember the fields that they include
        await queryRunner.query(`DROP VIEW "product_l3_src_with_history"`);

        await queryRunner.query(`ALTER TABLE "product_l3_src" ADD "sortOrder" integer NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "product_l3_src_history" ADD "sortOrder" integer NOT NULL DEFAULT 0`);

        await queryRunner.query(`CREATE VIEW "product_l3_src_with_history" AS SELECT * FROM "product_l3_src" UNION ALL SELECT * FROM "product_l3_src_history"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP VIEW "product_l3_src_with_history"`);

        await queryRunner.query(`ALTER TABLE "product_l3_src" DROP COLUMN "sortOrder"`);
        await queryRunner.query(`ALTER TABLE "product_l3_src_history" DROP COLUMN "sortOrder"`);

        await queryRunner.query(`CREATE VIEW "product_l3_src_with_history" AS SELECT * FROM "product_l3_src" UNION ALL SELECT * FROM "product_l3_src_history"`);
    }

}
