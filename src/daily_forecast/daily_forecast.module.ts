import { Module } from '@nestjs/common';
import { DailyForecastService } from './daily_forecast.service';
import { DailyForecastController } from './daily_forecast.controller';

@Module({
  controllers: [DailyForecastController],
  providers: [DailyForecastService]
})
export class DailyForecastModule {}
