import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { beachesRepository } from './beaches.repo';
import { Beaches } from './entities/beaches.entity';

@Injectable()
export class BeachesService {
  constructor(
    @InjectRepository(Beaches)
    private beachesRepository: beachesRepository
  ) { }

  async findAll() {
    return await this.beachesRepository.find();
  }
}
