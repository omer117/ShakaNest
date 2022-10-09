import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { orders } from './entities/orders.entity';
import { orderRepository } from './order.repo';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(orders)
    private orderRepository: orderRepository
  ) { }

  async create(createOrderDto: CreateOrderDto) {
    const { items_purchased, purchase_date, user_id } = createOrderDto
    const order = this.orderRepository.create({
      items_purchased,
      purchase_date,
      user_id,
    })

    await this.orderRepository.save(order)
    return order;
  }



  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

}
