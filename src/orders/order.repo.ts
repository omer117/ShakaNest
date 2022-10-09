import { EntityRepository, Repository } from "typeorm";
import { orders } from "./entities/orders.entity";


@EntityRepository(orders)
export class orderRepository extends Repository<orders>{ }