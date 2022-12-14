
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DailyForecast {
@PrimaryGeneratedColumn()
forecast_id:number;

@Column()
wave_height:string;

@Column()
wind_direction:number;

@Column()
wind_speed:string;

@Column()
water_temperature:number;

@Column()
last_updated:Date;

@Column()
beach_id: number;

@Column()
beach_name:string;
}
