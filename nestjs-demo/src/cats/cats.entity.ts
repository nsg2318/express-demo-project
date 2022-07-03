import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat extends BaseEntity {
  @PrimaryGeneratedColumn()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  imgUrl: string;

}