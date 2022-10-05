import { Injectable } from '@nestjs/common';
import { CreateDailyForecastDto } from './dto/create-daily_forecast.dto';
import { UpdateDailyForecastDto } from './dto/update-daily_forecast.dto';

@Injectable()
export class DailyForecastService {
  create(createDailyForecastDto: CreateDailyForecastDto) {
    return 'This action adds a new dailyForecast';
  }

  findAll() {
    return `This action returns all dailyForecast`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyForecast`;
  }

  update(id: number, updateDailyForecastDto: UpdateDailyForecastDto) {
    return `This action updates a #${id} dailyForecast`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyForecast`;
  }
}
