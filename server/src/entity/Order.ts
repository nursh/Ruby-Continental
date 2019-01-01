import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderItem } from './OrderItem';

@Entity()
export class Order {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  total: number;

  @OneToMany(type => OrderItem, item => item.order)
  items: OrderItem[];

}
