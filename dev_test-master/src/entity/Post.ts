import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { User } from './User';
import { ManyToOne } from "typeorm";

//TODO Crie a entidade de Post

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    title!: string;

    @Column({ length: 100 })
    description!: string;

    @ManyToOne(() => User, (user) => user.posts)
    user!: User;
}