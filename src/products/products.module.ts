import { Module } from '@nestjs/common';
import { ProductsService } from './Products.service';
import { ProductsController } from './Products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/Product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule { }
