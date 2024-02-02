import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permission } from "./permission.entity";


@Entity({ name: "roles" })
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany("permissions")
  @JoinTable({ name: "permission_roles", joinColumn: { name: "role_id" }, inverseJoinColumn: { name: "permission_id" } })
  permissions: Permission[];
}