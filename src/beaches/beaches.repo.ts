import { EntityRepository, Repository } from "typeorm";
import { Beaches } from "./entities/beaches.entity";

@EntityRepository(Beaches)
export class beachesRepository extends Repository<Beaches>{ }