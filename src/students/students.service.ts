import { Injectable } from '@nestjs/common';
import { StudentRepository } from './repository/student.repository';
import { CreateCustomStudentDto, CreateStudentDto, UpdateCustomStudentDto, UpdateStudentDto } from './dto';
import { UsersService } from '../users/users.service';
import { CreateUserDto, UpdateUserDto } from '../users/dto';
import { PersonsService } from '../persons/persons.service';
import { CreatePersonDto, UpdatePersonDto } from '../persons/dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';


@Injectable()
export class StudentsService {

    constructor(
        @InjectEntityManager()
        private readonly entityManager: EntityManager,
        private readonly studentRepository: StudentRepository,
        private readonly usersService: UsersService,
        private readonly personsService: PersonsService,
    ) {}

    async create(data: CreateCustomStudentDto) {

        // PASO 1: Create user
        const userInstance = new CreateUserDto();
        userInstance.username = data.contact_email;
        userInstance.password = 'user$2024';
        userInstance.password_hash = 'AAABLAAKAAAAAAACCAAADgAAAA==';

        const newUser = await this.usersService.create(userInstance);

        // PASO 2: Create person
        const personInstance = new CreatePersonDto();
        personInstance.dni = data.dni;
        personInstance.dni_type = data.dni_type;
        personInstance.name = data.name;
        personInstance.surname = data.surname;
        personInstance.dob = data.dob;
        personInstance.gender = data.gender;
        personInstance.marital_status = data.marital_status;
        personInstance.is_foreign = data.address_country_iso !== 160100 ? true : false;
        personInstance.is_minor = data.is_minor;
        personInstance.address_country_iso = data.address_country_iso;
        personInstance.address_local_state = data.address_local_state;
        personInstance.address_local_city = data.address_local_city;
        personInstance.address_local_zone = data.address_local_zone;
        personInstance.contact_email = data.contact_email;
        personInstance.contact_phone = data.contact_phone;

        const newPerson = await this.personsService.create(personInstance);

        // PASO 3: Create student
        const studentInstance = new CreateStudentDto();
        studentInstance.code = 'ABC';
        studentInstance.type = data.type;
        studentInstance.person_id = newPerson.person_id;
        studentInstance.manager_person_id = newPerson.person_id; 
        studentInstance.user_id = newUser.user_id;

        const newStudent = await this.studentRepository.create(studentInstance);

        return newStudent;
    }

    async findAll() {
        return await this.studentRepository.findAll();
    }

    async findOne(student_id: number) {
        return await this.studentRepository.findOne(student_id);
    }

    async update(student_id: number, data: UpdateCustomStudentDto) {

        // PASO 1: Update person
        const personInstance = new UpdatePersonDto();
        personInstance.dni = data.dni;
        personInstance.dni_type = data.dni_type;
        personInstance.name = data.name;
        personInstance.surname = data.surname;
        personInstance.dob = data.dob;
        personInstance.gender = data.gender;
        personInstance.marital_status = data.marital_status;
        personInstance.is_foreign = data.address_country_iso !== 160100 ? true : false;
        personInstance.is_minor = data.is_minor;
        personInstance.address_country_iso = data.address_country_iso;
        personInstance.address_local_state = data.address_local_state;
        personInstance.address_local_city = data.address_local_city;
        personInstance.address_local_zone = data.address_local_zone;
        personInstance.contact_email = data.contact_email;
        personInstance.contact_phone = data.contact_phone;

        const updatePerson = await this.personsService.update(data.person_id, personInstance);

        // PASO 3: update student
        const studentInstance = new UpdateStudentDto();
        studentInstance.code = 'ABC';
        studentInstance.type = data.type;
        studentInstance.status = data.status;

        const updateStudent = await this.studentRepository.update(student_id, studentInstance);

        return updateStudent;
    }

    async remove(student_id: number) {
        return await this.studentRepository.remove(student_id);
    }

    async studentInfo(student_id: number) {
        const query = `
            SELECT
                *
            FROM
                students
                INNER JOIN persons p on p.person_id = students.person_id
            WHERE
                student_id = ${student_id}
        `;
        const response = await this.entityManager.query(query);

        return response;
    }
}
