import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { orders } from './entities/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([orders])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule { }
