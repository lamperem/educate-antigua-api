import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { StudentEntity } from '../entities';
import { ReadPersonDto } from 'src/persons/dto';

@Injectable()
export class StudentRepository {
    constructor(
        @InjectRepository(StudentEntity)
        private personsRepository: Repository<StudentEntity>,
    ) { }

    async create(data: Partial<StudentEntity>): Promise<ReadPersonDto> {

        const newRecord = this.personsRepository.create(data);
        const response = await this.personsRepository.save(newRecord);

        return plainToInstance(ReadPersonDto, response);
    }

    async findAll(): Promise<ReadPersonDto[]> {
        const response = await this.personsRepository.find();

        return plainToInstance(ReadPersonDto, response);
    }

    async findOne(student_id: number): Promise<ReadPersonDto | null> {
        const response = await this.personsRepository.findOneBy({ student_id });

        return plainToInstance(ReadPersonDto, response);
    }

    async update(student_id: number, data: Partial<StudentEntity>): Promise<ReadPersonDto> {
        await this.personsRepository.update(student_id, data);

        const response = await this.personsRepository.findOneBy({ student_id });

        return plainToInstance(ReadPersonDto, response);
    }

    async remove(student_id: number): Promise<void> {
        await this.personsRepository.delete(student_id);
    }

}
