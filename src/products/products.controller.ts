import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './Products.service';
import { CreateProductsDto } from './dto/create-Product.dto';
import { UpdateProductsDto } from './dto/update-Product.dto';

@Controller('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  create(@Body() createProductsDto: CreateProductsDto) {
    return this.productsService.create(createProductsDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Post('/getCatagory')
  findByCatagory(@Body() catagory: string) {
    return this.productsService.findByCatagory(catagory);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOneById(+id);
  }

  @Post('/getSingleProduct')
  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductsDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
