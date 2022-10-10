import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductsDto } from './dto/create-Product.dto';
import { UpdateProductsDto } from './dto/update-Product.dto';
import { Products } from './entities/Product.entity';
import { ProductRepository } from './Products.repo';

@Injectable()
export class ProductsService {
  @InjectRepository(Products)
  private productRepository: ProductRepository;


  create(createProductDto: CreateProductsDto) {
    return 'This action adds a new Product';
  }

  findAll() {
    return this.productRepository.find();
  }

  async findByCatagory(catagory: any) {
    Logger.log(catagory.catagory)
    const result = await
          this.productRepository.createQueryBuilder()
          .where('catagory = :catagory', {catagory: catagory.catagory})
          .getRawMany()    
          return result;

  }

  findOneById(id: number) {
  }

  update(id: number, updateProductDto: UpdateProductsDto) {
    return `This action updates a #${id} Product`;
  }

  remove(id: number) {
    return `This action removes a #${id} Product`;
  }
}
