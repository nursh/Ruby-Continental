import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne, BeforeInsert } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Order } from './Order';

@Entity("OrderItem")
export class OrderItem {

  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(type => Order, order => order.items)
  order: Order;

  @BeforeInsert()
  createId() {
    this.id = uuid();
  }
}