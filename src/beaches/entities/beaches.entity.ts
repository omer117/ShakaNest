import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Beaches {

    @PrimaryGeneratedColumn()
    beach_id:number;

    @Column()
    beach_name:string;

    @Column() 
    lat: number;

    @Column()
    lon:number;
}
