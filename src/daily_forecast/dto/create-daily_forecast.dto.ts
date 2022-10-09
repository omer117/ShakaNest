import {IsNotEmpty} from 'class-validator'

export class CreateDailyForecastDto {
    @IsNotEmpty()
    wave_height: string
    
    @IsNotEmpty()
    wind_direction: number
    
    @IsNotEmpty()
    wind_speed: string
    
    @IsNotEmpty()
    water_temperature: number
    
    @IsNotEmpty()
    last_updated: Date
    
    @IsNotEmpty()
    beach_id: number
    
    @IsNotEmpty()
    beach_name: string
}
