import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsDto } from './create-Product.dto';

export class UpdateProductsDto extends PartialType(CreateProductsDto) { }
