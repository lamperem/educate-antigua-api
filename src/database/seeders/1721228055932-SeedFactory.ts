import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedFactory1721228055932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // users
        await queryRunner.query(`
            INSERT INTO users (username, password, password_hash)
            VALUES ('admin@educate.com','admin$2024', 'AAABLAAKAAAAAAACCAAADgAAAA==')
        `);

        // typologies
        await queryRunner.query(`
            INSERT INTO typologies
                (typology_id, description, parent_typology)
            VALUES
                (100, 'base', null),
                (160000, 'empty', 100),
                (160001, 'status', 100),
                (160002, 'active', 160001),
                (160003, 'inactive', 160001),
                (160004, 'blocked', 160001),
                (160005, 'deleted', 160001)
        `);        
    }

    public async down(queryRunner: QueryRunner): Promise<void> { }

}
