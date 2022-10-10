import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDailyForecastDto } from './dto/create-daily_forecast.dto';
import { dailyForecastRepository } from './daily_forecast.repo'
import { DailyForecast } from './entities/daily_forecast.entity';

@Injectable()
export class DailyForecastService {
  constructor(
    @InjectRepository(DailyForecast)
    private dailyForecastRepository: dailyForecastRepository
  ) { }

  async create(createDailyForecastDto: CreateDailyForecastDto): Promise<DailyForecast> {
    const { wave_height, wind_direction, wind_speed, water_temperature, last_updated, beach_id, beach_name } = createDailyForecastDto
    const forecast = this.dailyForecastRepository.create({
      wave_height,
      wind_direction,
      wind_speed,
      water_temperature,
      last_updated,
      beach_id,
      beach_name,
    })
    await this.dailyForecastRepository.save(forecast)
    return forecast;
  }

  async getForecastByBeachId(beach_id: number) {
    const found = await this.dailyForecastRepository.findOne({ where: { beach_id } })
    if (!found) {
      throw new NotFoundException("no forecast for that Beach" + beach_id)
    }
    return found
  }

  async remove(id: number) {
    const result = await this.dailyForecastRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Task did not deleted successfully')
    }
  }

}