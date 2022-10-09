import { EntityRepository, Repository } from "typeorm";
import { DailyForecast } from "./entities/daily_forecast.entity";

@EntityRepository(DailyForecast)
export class dailyForecastRepository extends Repository<DailyForecast>{}