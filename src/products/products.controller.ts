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

  @Post('/getCatagoryFilteredByPrice')
  findByCatagoryFilter(@Body() req: any) {
    return this.productsService.findByCatagoryFilter(req);
  }

  @Post('/getCatagory')
  findByCatagory(@Body() catagory: string) {
    return this.productsService.findByCatagory(catagory);
  }

  @Post('/getById')
  findByCatagoryAndId(@Body()id : any) {
    return this.productsService.findOneById(id);
  }


  @Patch(':id')
  update(@Param('id') product_id: number, @Body() req: Object) {
    return this.productsService.update(product_id,req);
  }

  @Delete(':id')
  remove(@Param('id') product_id: number) {
    return this.productsService.remove(product_id);
  }
}
