import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Photo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    length: 100,
    nullable: false
  })
  filename: string;

  @Column({
    default: 0
  })
  views: number;

  @Column({
    default: 0
  })
  isPublished: boolean;

  @ManyToOne(type => User, user => user.photos, {
    cascade: true
  })
  user: User;
}
