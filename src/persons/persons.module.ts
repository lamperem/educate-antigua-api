import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { PersonRepository } from './repository/person.repository';
import entities from './entities';

@Module({
    imports: [TypeOrmModule.forFeature(entities)],
    controllers: [],
    providers: [
        PersonsService,
        PersonRepository
    ],
    exports: [PersonsService],
})
export class PersonsModule {}
