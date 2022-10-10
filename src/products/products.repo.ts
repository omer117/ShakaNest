import { EntityRepository, Repository } from "typeorm";
import { Products } from "./entities/Product.entity";

@EntityRepository(Products)
export class ProductRepository extends Repository<Products>{

}