import { Module } from '@nestjs/common';
import { BeachesService } from './beaches.service';
import { BeachesController } from './beaches.controller';

@Module({
  controllers: [BeachesController],
  providers: [BeachesService]
})
export class BeachesModule {}
