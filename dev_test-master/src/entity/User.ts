import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Post } from './Post';
import { OneToMany } from "typeorm";

//TODO Crie a entidade de User
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number | undefined;

  @Column({ type: "varchar", length: 100 })
  firstName: string | undefined;

  @Column({ type: "varchar", length: 100 })
  lastName: string | undefined;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string | undefined;

  @OneToMany(() => Post, (post: { user: any; }) => post.user)
  posts: Post[] | undefined;
}
