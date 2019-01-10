import { Entity, PrimaryColumn, OneToOne, BeforeInsert, Column, JoinColumn } from 'typeorm';
import { v4 as uuid } from "uuid";


import { Order } from './Order';

@Entity()
export class Payment {

  @PrimaryColumn("uuid")
  id: string;

  @Column()
  charge: string;

  @OneToOne(type => Order, order => order.payment, { onDelete: 'CASCADE' })
  @JoinColumn()
  order: Order;

  @BeforeInsert()
  createId() {
    this.id = uuid();
  }

}