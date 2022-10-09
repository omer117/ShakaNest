import { Module } from '@nestjs/common';
import { DailyForecastService } from './daily_forecast.service';
import { DailyForecastController } from './daily_forecast.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyForecast } from './entities/daily_forecast.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DailyForecast])],
  controllers: [DailyForecastController],
  providers: [DailyForecastService]
})
export class DailyForecastModule {}
