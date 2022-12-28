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
      url: 'postgres://shakabaka_user:mYJUqMNWB0vvWyFwPLFwhkudsn96fE6N@dpg-cdbrlcpgp3jvds00f7l0-a.singapore-postgres.render.com/shakabaka',
      type: 'postgres',
      host: 'dpg-cdbrlcpgp3jvds00f7l0-a',
      port: 5432,
      username: "shakabaka_user",
      password: "mYJUqMNWB0vvWyFwPLFwhkudsn96fE6N",
      database: "shakabaka",
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
