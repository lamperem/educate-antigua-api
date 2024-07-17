import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { PersonEntity } from '../entities';
import { ReadPersonDto } from '../dto';

@Injectable()
export class PersonRepository {
    constructor(
        @InjectRepository(PersonEntity)
        private personsRepository: Repository<PersonEntity>,
    ) { }

    async create(data: Partial<PersonEntity>): Promise<ReadPersonDto> {

        const newRecord = this.personsRepository.create(data);
        const response = await this.personsRepository.save(newRecord);

        return plainToInstance(ReadPersonDto, response);
    }

    async findAll(): Promise<ReadPersonDto[]> {
        const response = await this.personsRepository.find();

        return plainToInstance(ReadPersonDto, response);
    }

    async findOne(person_id: number): Promise<ReadPersonDto | null> {
        const response = await this.personsRepository.findOneBy({ person_id });

        return plainToInstance(ReadPersonDto, response);
    }

    async update(person_id: number, data: Partial<PersonEntity>): Promise<ReadPersonDto> {
        await this.personsRepository.update(person_id, data);

        const response = await this.personsRepository.findOneBy({ person_id });

        return plainToInstance(ReadPersonDto, response);
    }

    async remove(person_id: number): Promise<void> {
        await this.personsRepository.delete(person_id);
    }

}
