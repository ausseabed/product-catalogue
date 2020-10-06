import {MigrationInterface, QueryRunner} from "typeorm";

export class NGA626AddBAG1601951447697 implements MigrationInterface {
    name = 'NGA626AddBAG1601951447697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP VIEW "product_l3_dist_with_history"`);
        await queryRunner.query(`DROP VIEW "product_l3_src_with_history"`);

        await queryRunner.query(`ALTER TABLE "product_l3_src" ADD "productBagLocation" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "product_l3_dist" ADD "bathymetryBagLocation" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "product_l3_src_history" ADD "productBagLocation" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "product_l3_dist_history" ADD "bathymetryBagLocation" character varying NOT NULL DEFAULT ''`);

        await queryRunner.query(`CREATE VIEW "product_l3_src_with_history" AS SELECT * FROM "product_l3_src" UNION ALL SELECT * FROM "product_l3_src_history"`);
        await queryRunner.query(`CREATE VIEW "product_l3_dist_with_history" AS SELECT * FROM "product_l3_dist" UNION ALL SELECT * FROM "product_l3_dist_history"`);
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP VIEW "product_l3_dist_with_history"`);
        await queryRunner.query(`DROP VIEW "product_l3_src_with_history"`);

        await queryRunner.query(`ALTER TABLE "product_l3_dist" DROP COLUMN "bathymetryBagLocation"`);
        await queryRunner.query(`ALTER TABLE "product_l3_src" DROP COLUMN "productBagLocation"`);
        await queryRunner.query(`ALTER TABLE "product_l3_dist_history" DROP COLUMN "bathymetryBagLocation"`);
        await queryRunner.query(`ALTER TABLE "product_l3_src_history" DROP COLUMN "productBagLocation"`);

        await queryRunner.query(`CREATE VIEW "product_l3_src_with_history" AS SELECT * FROM "product_l3_src" UNION ALL SELECT * FROM "product_l3_src_history"`);
        await queryRunner.query(`CREATE VIEW "product_l3_dist_with_history" AS SELECT * FROM "product_l3_dist" UNION ALL SELECT * FROM "product_l3_dist_history"`);
    
    }

}
