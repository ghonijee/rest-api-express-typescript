import { MigrationInterface, QueryRunner, Table } from "typeorm";

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

        await queryRunner.createTable(new Table({
            name: "user_roles",
            columns: [
                {
                    name: "user_id",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "role_id",
                    type: "int",
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("roles");
        await queryRunner.dropTable("user_roles");
    }

}
