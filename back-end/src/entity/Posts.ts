import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    public dateTime: string;
    
    @Column()
    public title: string;


    @Column({ type: "varchar" })
    public image: string;
}