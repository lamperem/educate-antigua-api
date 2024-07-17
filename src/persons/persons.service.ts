import { Injectable } from '@nestjs/common';
import { CreatePersonDto, UpdatePersonDto } from './dto';
import { PersonRepository } from './repository/person.repository';

@Injectable()
export class PersonsService {

    constructor(private readonly PersonRepository: PersonRepository) {}
    async create(createPersonDto: CreatePersonDto) {
        return await this.PersonRepository.create(createPersonDto);
    }

    async findAll() {
        return await this.PersonRepository.findAll();
    }

    async findOne(id: number) {
        return await this.PersonRepository.findOne(id);
    }

    async update(id: number, updatePersonDto: UpdatePersonDto) {
        return await this.PersonRepository.update(id, updatePersonDto);
    }

    async remove(id: number) {
        return await this.PersonRepository.remove(id);
    }
}
