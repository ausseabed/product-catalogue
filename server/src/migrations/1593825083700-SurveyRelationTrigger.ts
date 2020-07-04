import {MigrationInterface, QueryRunner} from "typeorm";

export class SurveyRelationTrigger1593825083700 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      // Remove orphaned products and put in triggers to stop it happening again
      await queryRunner.query(`DELETE FROM product_l3_src WHERE id NOT IN (SELECT "productL3SrcId" FROM survey_l3_relation)`);
      const survey_l3_relation_trigger = `
CREATE OR REPLACE FUNCTION survey_l3_relation_delete_trigger()
RETURNS TRIGGER AS $$
BEGIN
      DELETE FROM product_l3_src where product_l3_src .id = OLD."productL3SrcId";
      RETURN OLD;
END;$$ LANGUAGE plpgsql;
`;
      await queryRunner.query(survey_l3_relation_trigger);
      await queryRunner.query(`CREATE TRIGGER delete_products AFTER DELETE ON survey_l3_relation FOR EACH ROW EXECUTE PROCEDURE survey_l3_relation_delete_trigger()`); 


      const compilation_l3_relation_trigger = `
CREATE OR REPLACE FUNCTION compilation_l3_relation_delete_trigger()
RETURNS TRIGGER AS $$
BEGIN
      DELETE FROM product_l3_src where product_l3_src .id = OLD."productL3SrcId";
      RETURN OLD;
END;$$ LANGUAGE plpgsql;
`;
      await queryRunner.query(compilation_l3_relation_trigger);
      await queryRunner.query(`CREATE TRIGGER delete_products AFTER DELETE ON compilation_l3_relation FOR EACH ROW EXECUTE PROCEDURE compilation_l3_relation_delete_trigger()`); 


      const survey_l0_relation_trigger = `
CREATE OR REPLACE FUNCTION survey_l0_relation_delete_trigger()
RETURNS TRIGGER AS $$
BEGIN
      DELETE FROM product_l3_src where product_l3_src .id = OLD."productL3SrcId";
      RETURN OLD;
END;$$ LANGUAGE plpgsql;
`;
      await queryRunner.query(survey_l0_relation_trigger);
      await queryRunner.query(`CREATE TRIGGER delete_products AFTER DELETE ON survey_l0_relation FOR EACH ROW EXECUTE PROCEDURE survey_l0_relation_delete_trigger()`); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TRIGGER delete_products ON survey_l0_relation`);
      await queryRunner.query(`DROP FUNCTION "survey_l0_relation_delete_trigger"`);
      await queryRunner.query(`DROP TRIGGER delete_products ON survey_l3_relation`);
      await queryRunner.query(`DROP FUNCTION "survey_l3_relation_delete_trigger"`);
      await queryRunner.query(`DROP TRIGGER delete_products ON compilation_l3_relation`);
      await queryRunner.query(`DROP FUNCTION "compilation_l3_relation_delete_trigger"`);
    }

}
