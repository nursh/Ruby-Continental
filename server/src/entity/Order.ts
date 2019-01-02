import {
  Entity,
  PrimaryColumn,
  Column,
  OneToMany,
  BeforeInsert
} from "typeorm";
import { v4 as uuid } from "uuid";

import { OrderItem } from "./OrderItem";

@Entity("Order")
export class Order {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  total: number = 0;

  @OneToMany(type => OrderItem, item => item.order, { eager: true })
  items: OrderItem[];

  @BeforeInsert()
  createId() {
    this.id = uuid();
  }
}
