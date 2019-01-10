import { Entity, PrimaryColumn, OneToOne, BeforeInsert, Column } from 'typeorm';
import { v4 as uuid } from "uuid";


import { Order } from './Order';

@Entity()
export class Payment {

  @PrimaryColumn()
  id: string;

  @Column()
  charge: string;

  @OneToOne(type => Order, order => order.payment, { onDelete: 'CASCADE'})
  order: Order;

  @BeforeInsert()
  createId() {
    this.id = uuid();
  }

}