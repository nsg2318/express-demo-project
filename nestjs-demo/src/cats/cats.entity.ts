import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: BigInteger; 
  
  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  imgUrl: string;

  @Column()
  createddate: string;
  
}