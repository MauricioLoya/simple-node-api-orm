import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class User {

  constructor(username: string, password: string) {
    this.password = password;
    this.username = username;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    default: true
  })
  status: boolean;

  @OneToMany(type => Photo, photo => photo.user)
  photos: Photo[];
}
