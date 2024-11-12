import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Post } from './Post';
import { OneToMany } from "typeorm";

//TODO Crie a entidade de User
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    firstName!: string;

    @Column({ length: 100 })
    lastName!: string;

    @Column({ length: 100 })
    email!: string;

    @OneToMany(() => Post, (post) => post.user)
    posts!: Post[];
}
