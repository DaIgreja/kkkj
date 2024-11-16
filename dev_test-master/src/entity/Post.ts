import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { User } from './User';
import { ManyToOne } from "typeorm";

//TODO Crie a entidade de Post

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number | undefined;

  @Column({ type: "varchar", length: 100 })
  title: string | undefined;

  @Column({ type: "varchar", length: 100 })
  description: string | undefined;

  @ManyToOne(() => User, (user) => user.posts, { onDelete: "CASCADE" })
  user: User | undefined;
}
