import { Injectable } from '@nestjs/common';
import { CreateBeachDto } from './dto/create-beach.dto';
import { UpdateBeachDto } from './dto/update-beach.dto';

@Injectable()
export class BeachesService {
  create(createBeachDto: CreateBeachDto) {
    return 'This action adds a new beach';
  }

  findAll() {
    return `This action returns all beaches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} beach`;
  }

  update(id: number, updateBeachDto: UpdateBeachDto) {
    return `This action updates a #${id} beach`;
  }

  remove(id: number) {
    return `This action removes a #${id} beach`;
  }
}
