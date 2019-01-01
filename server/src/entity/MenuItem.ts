import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';

@Entity()
export class MenuItem {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ type: 'enum', enum: Category })
  category: Category;

}