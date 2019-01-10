import {
  Entity,
  PrimaryColumn,
  Column,
  OneToMany,
  BeforeInsert,
  OneToOne,
  JoinColumn
} from "typeorm";
import { v4 as uuid } from "uuid";

import { OrderItem } from "./OrderItem";
import { Payment } from './Payment';

@Entity("Order")
export class Order {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  total: number = 0;

  @OneToMany(type => OrderItem, item => item.order, { eager: true })
  items: OrderItem[];

  @OneToOne(type => Payment, payment => payment.order, { eager: true })
  payment: Payment;

  @BeforeInsert()
  createId() {
    this.id = uuid();
  }
}
