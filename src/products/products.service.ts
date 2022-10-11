import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { request } from 'express';
import { CreateProductsDto } from './dto/create-Product.dto';
import { UpdateProductsDto } from './dto/update-Product.dto';
import { Products } from './entities/Product.entity';
import { Filter } from 'src/orders/entities/filter.enum';
import { ProductRepository } from './Products.repo';

@Injectable()
export class ProductsService {
  @InjectRepository(Products)
  private productRepository: ProductRepository;


  async create(createProductDto: CreateProductsDto) {
    const { catagory, title, price, info, sizes, image } = createProductDto
    const Product = this.productRepository.create({
      catagory, title, price, info, sizes, image
    })

    await this.productRepository.save(Product)
    return Product
  }

  findAll() {
    return this.productRepository.find();
  }



  async findByCatagoryFilter(req: any) {
    let priceFilter: Filter = req.filter
    const result = await
      this.productRepository.createQueryBuilder()
        .where('catagory = :catagory', { catagory: req.catagory })
        .orderBy({ "price": `${priceFilter}` })
        .getRawMany()
    return result;
  }

  async findByCatagory(catagory: any) {
    Logger.log(catagory.catagory)
    const result = await
      this.productRepository.createQueryBuilder()
        .where('catagory = :catagory', { catagory: catagory.catagory })
        .getRawMany()
    return result;
  }


  async findOneById(product_id: any) {
    Logger.log(product_id.product_id)
    const realProductId: any = product_id.product_id
    const found = await this.productRepository.findOne({ where: { product_id: realProductId } })
    return found
  }



  async update(product_id: number, req: any) {
    Logger.log(product_id)
    Logger.log(req)
      
    
    const { catagory, title, price, info, sizes, image } = req
    const Product =
    this.productRepository.create({
      catagory, title, price, info, sizes, image
    })

    this.productRepository.delete(product_id)
    await this.productRepository.save(Product)
    return Product
  }

  remove(product_id: number) {
    return this.productRepository.delete(product_id)
  }
}
