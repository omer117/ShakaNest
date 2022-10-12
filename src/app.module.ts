import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './Products/Products.module';
import { OrdersModule } from './orders/orders.module';
import { DailyForecastModule } from './daily_forecast/daily_forecast.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeachesModule } from './beaches/beaches.module';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/jwt/jwt.strategy';

@Module({
  imports: [
    ProductsModule,
    OrdersModule,
    DailyForecastModule,
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      host: 'ec2-54-173-237-110.compute-1.amazonaws.com',
      port: 5432,
      username: "mswwvgtkcedutn",
      password: "a6d82f881d3080c17fcecf6b3df347a5e85fb41c0c5f287e22da58c0ea671876",
      database: "d3ioitbidtfoue",
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false,
      }

    }),
    BeachesModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
