import { PartialType } from '@nestjs/mapped-types';
import { CreateDailyForecastDto } from './create-daily_forecast.dto';

export class UpdateDailyForecastDto extends PartialType(CreateDailyForecastDto) {}
