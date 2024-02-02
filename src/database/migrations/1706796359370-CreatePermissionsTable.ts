import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePermissionsTable1706796359370 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "permissions",
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
            name: "permission_roles",
            columns: [
                {
                    name: "permission_id",
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
        await queryRunner.dropTable("permissions");
        await queryRunner.dropTable("permission_roles");
    }

}
