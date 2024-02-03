import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreateRolesTable1706795866672 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "roles",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255",
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: "description",
                    type: "varchar",
                    length: "255",
                    isNullable: true,
                },
            ]
        }));
        await queryRunner.query("ALTER TABLE `users` ADD COLUMN `role_id` INT DEFAULT NULL AFTER id");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("roles");
        await queryRunner.dropColumn("users", "role_id");
    }

}
