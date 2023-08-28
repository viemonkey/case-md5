import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: "varchar" })
    public username: string;

    @Column({ type: "varchar" })
    public password: string;
}

