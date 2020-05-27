import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProductChildren1590473412850 implements MigrationInterface {
  name = 'AddProductChildren1590473412850'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "compilation" ("id" SERIAL NOT NULL, "uuid" character varying NOT NULL, "name" character varying NOT NULL, "year" character varying NOT NULL, CONSTRAINT "PK_176e8f00e4794257f82cd8717d8" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "product_l3_src" ("id" SERIAL NOT NULL, "uuid" character varying NOT NULL, "name" character varying NOT NULL, "srs" character varying NOT NULL, "metadataPersistentId" character varying NOT NULL, "resolution" character varying NOT NULL, "productTifLocation" character varying NOT NULL, CONSTRAINT "PK_afd40fd3dabe738fdfa68a14e9f" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "compilation_l3_relation" ("id" SERIAL NOT NULL, "compilationId" integer NOT NULL, "productL3SrcId" integer NOT NULL, CONSTRAINT "PK_409f6912b9291106ab38f5535e2" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "product_l0_src" ("id" SERIAL NOT NULL, "uuid" character varying NOT NULL, "name" character varying NOT NULL, "srs" character varying NOT NULL, "metadataPersistentId" character varying NOT NULL, "l0InstrumentLocation" character varying NOT NULL, CONSTRAINT "PK_cbc50ea189c7b33800bf720a1a2" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "survey" ("id" SERIAL NOT NULL, "uuid" character varying NOT NULL, "name" character varying NOT NULL, "year" character varying NOT NULL, CONSTRAINT "PK_f0da32b9181e9c02ecf0be11ed3" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "survey_l0_relation" ("id" SERIAL NOT NULL, "surveyId" integer NOT NULL, "productL0SrcId" integer NOT NULL, CONSTRAINT "PK_c6cc1bdb929ad2cfe8930335fba" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "survey_l3_relation" ("id" SERIAL NOT NULL, "surveyId" integer NOT NULL, "productL3SrcId" integer NOT NULL, CONSTRAINT "PK_b32ef0af3b9d60c3629a22d94c3" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "product_l0_instrument_file" ("id" SERIAL NOT NULL, "l0InstrumentFile" character varying NOT NULL, "productL0DistId" integer NOT NULL, CONSTRAINT "PK_473f4b8289a277fbf360c17f2ce" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "product_l0_dist" ("id" SERIAL NOT NULL, "l0CoverageLocation" character varying NOT NULL, "sourceProductId" integer NOT NULL, CONSTRAINT "PK_09d98c2e674fded288645560544" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "product_l3_dist" ("id" SERIAL NOT NULL, "l3CoverageLocation" character varying NOT NULL, "bathymetryLocation" character varying NOT NULL, "hillshadeLocation" character varying NOT NULL, "sourceProductId" integer NOT NULL, CONSTRAINT "PK_97740d715e13b07156dc7ee8ba0" PRIMARY KEY ("id"))`);
    await queryRunner.query(`ALTER TABLE "compilation_l3_relation" ADD CONSTRAINT "FK_2afb4d3ff59ccfe3d0ef13898a3" FOREIGN KEY ("compilationId") REFERENCES "compilation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "compilation_l3_relation" ADD CONSTRAINT "FK_469e75e55de8818d05a72b19af3" FOREIGN KEY ("productL3SrcId") REFERENCES "product_l3_src"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "survey_l0_relation" ADD CONSTRAINT "FK_0f941766e0aa657ffa608475358" FOREIGN KEY ("surveyId") REFERENCES "survey"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "survey_l0_relation" ADD CONSTRAINT "FK_b9021ab6624ed35a8ad35ee2358" FOREIGN KEY ("productL0SrcId") REFERENCES "product_l0_src"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "survey_l3_relation" ADD CONSTRAINT "FK_a5c693cac30758bda68bdce5b52" FOREIGN KEY ("surveyId") REFERENCES "survey"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "survey_l3_relation" ADD CONSTRAINT "FK_a25c1f4a29325ebd7a1ed660ac7" FOREIGN KEY ("productL3SrcId") REFERENCES "product_l3_src"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "product_l0_instrument_file" ADD CONSTRAINT "FK_96507da4f012be03833099523cb" FOREIGN KEY ("productL0DistId") REFERENCES "product_l0_dist"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "product_l0_dist" ADD CONSTRAINT "FK_7b8e82464881c6bc5c716b40a5f" FOREIGN KEY ("sourceProductId") REFERENCES "product_l0_src"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "product_l3_dist" ADD CONSTRAINT "FK_e51f8ad3af47905f0b78847b7d9" FOREIGN KEY ("sourceProductId") REFERENCES "product_l3_src"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`INSERT INTO survey (uuid, name, year) SELECT "UUID", "gazeteerName", year FROM product_entry`);
    await queryRunner.query(`INSERT INTO product_l3_src (uuid, name, srs, "metadataPersistentId", resolution, "productTifLocation") SELECT "UUID", "gazeteerName", srs, "metadataPersistentId", resolution, (regexp_split_to_array("l3ProductTifLocation",', '))[4] FROM product_entry WHERE array_length(regexp_split_to_array("l3ProductTifLocation",', '), 1)>3`);
    await queryRunner.query(`INSERT INTO product_l3_src (uuid, name, srs, "metadataPersistentId", resolution, "productTifLocation") SELECT "UUID", "gazeteerName", srs, "metadataPersistentId", resolution, (regexp_split_to_array("l3ProductTifLocation",', '))[3] FROM product_entry WHERE array_length(regexp_split_to_array("l3ProductTifLocation",', '), 1)>2`);
    await queryRunner.query(`INSERT INTO product_l3_src (uuid, name, srs, "metadataPersistentId", resolution, "productTifLocation") SELECT "UUID", "gazeteerName", srs, "metadataPersistentId", resolution, (regexp_split_to_array("l3ProductTifLocation",', '))[2] FROM product_entry WHERE array_length(regexp_split_to_array("l3ProductTifLocation",', '), 1)>1`);
    await queryRunner.query(`INSERT INTO product_l3_src (uuid, name, srs, "metadataPersistentId", resolution, "productTifLocation") SELECT "UUID", "gazeteerName", srs, "metadataPersistentId", resolution, (regexp_split_to_array("l3ProductTifLocation",', '))[1] FROM product_entry WHERE array_length(regexp_split_to_array("l3ProductTifLocation",', '), 1)>0`);
    await queryRunner.query(`INSERT INTO survey_l3_relation ("surveyId", "productL3SrcId") SELECT survey.id, product_l3_src.id from survey INNER JOIN product_l3_src ON (survey.uuid = product_l3_src.uuid)`);
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "product_l3_dist" DROP CONSTRAINT "FK_e51f8ad3af47905f0b78847b7d9"`);
    await queryRunner.query(`ALTER TABLE "product_l0_dist" DROP CONSTRAINT "FK_7b8e82464881c6bc5c716b40a5f"`);
    await queryRunner.query(`ALTER TABLE "product_l0_instrument_file" DROP CONSTRAINT "FK_96507da4f012be03833099523cb"`);
    await queryRunner.query(`ALTER TABLE "survey_l3_relation" DROP CONSTRAINT "FK_a25c1f4a29325ebd7a1ed660ac7"`);
    await queryRunner.query(`ALTER TABLE "survey_l3_relation" DROP CONSTRAINT "FK_a5c693cac30758bda68bdce5b52"`);
    await queryRunner.query(`ALTER TABLE "survey_l0_relation" DROP CONSTRAINT "FK_b9021ab6624ed35a8ad35ee2358"`);
    await queryRunner.query(`ALTER TABLE "survey_l0_relation" DROP CONSTRAINT "FK_0f941766e0aa657ffa608475358"`);
    await queryRunner.query(`ALTER TABLE "compilation_l3_relation" DROP CONSTRAINT "FK_469e75e55de8818d05a72b19af3"`);
    await queryRunner.query(`ALTER TABLE "compilation_l3_relation" DROP CONSTRAINT "FK_2afb4d3ff59ccfe3d0ef13898a3"`);
    await queryRunner.query(`DROP TABLE "product_l3_dist"`);
    await queryRunner.query(`DROP TABLE "product_l0_dist"`);
    await queryRunner.query(`DROP TABLE "product_l0_instrument_file"`);
    await queryRunner.query(`DROP TABLE "survey_l3_relation"`);
    await queryRunner.query(`DROP TABLE "survey_l0_relation"`);
    await queryRunner.query(`DROP TABLE "survey"`);
    await queryRunner.query(`DROP TABLE "product_l0_src"`);
    await queryRunner.query(`DROP TABLE "compilation_l3_relation"`);
    await queryRunner.query(`DROP TABLE "product_l3_src"`);
    await queryRunner.query(`DROP TABLE "compilation"`);
  }

}
