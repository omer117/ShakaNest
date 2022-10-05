import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { DailyForecastModule } from './daily_forecast/daily_forecast.module';

@Module({
  imports: [UsersModule, ProductsModule, OrdersModule, DailyForecastModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
