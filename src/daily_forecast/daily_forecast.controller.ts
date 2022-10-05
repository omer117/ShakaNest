import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailyForecastService } from './daily_forecast.service';
import { CreateDailyForecastDto } from './dto/create-daily_forecast.dto';
import { UpdateDailyForecastDto } from './dto/update-daily_forecast.dto';

@Controller('daily-forecast')
export class DailyForecastController {
  constructor(private readonly dailyForecastService: DailyForecastService) {}

  @Post()
  create(@Body() createDailyForecastDto: CreateDailyForecastDto) {
    return this.dailyForecastService.create(createDailyForecastDto);
  }

  @Get()
  findAll() {
    return this.dailyForecastService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyForecastService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailyForecastDto: UpdateDailyForecastDto) {
    return this.dailyForecastService.update(+id, updateDailyForecastDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyForecastService.remove(+id);
  }
}
