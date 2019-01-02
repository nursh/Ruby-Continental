import {
  Entity,
  Column,
  PrimaryColumn,
  BeforeInsert
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Category } from "./Category";

@Entity("MenuItem")
export class MenuItem {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column("enum", { enum: Category })
  category: Category;

  @BeforeInsert()
  createId() {
    this.id = uuid();
  }
}
