import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @Column()
  createTime: string;
}