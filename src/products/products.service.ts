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


  async create(createProductDto: CreateProductsDto):Promise<Products> {
    const { catagory, title, price, info, sizes, image } = createProductDto
    const Product = this.productRepository.create({
      catagory, title, price, info, sizes, image
    })

    await this.productRepository.save(Product)
    return Product
  }

  findAll(): Promise<Products[]> {
    return this.productRepository.find();
  }



  async findByCatagoryFilter(req: any) {
    let priceFilter: Filter = req.filter
    Logger.log(req)
    const result = await
      this.productRepository.createQueryBuilder()
        .where('catagory = :catagory', { catagory: req.catagory })
        .orderBy({ "price": `${priceFilter}` })
        .getRawMany()
    return result;
  }

  async findByCatagory(req: any): Promise<Products[]> {
    const result = await
      this.productRepository.createQueryBuilder()
        .where('catagory = :catagory', { catagory: req.catagory })
        .getRawMany()
    return result;
  }

  async youMayLike(req): Promise<Products[]> {
    const result = await
      this.productRepository.createQueryBuilder()
        .where('catagory = :catagory', { catagory: req.catagory })
        .orderBy({ "price": 'DESC' })
        .limit(3)
        .getRawMany()

    return result
  }

  async findOneById(product_id: any) {
    Logger.log(product_id)
    const found = await this.productRepository.findOne({ where: { product_id } })
    return found
  }



  async update(product_id: number, req: any) {

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
