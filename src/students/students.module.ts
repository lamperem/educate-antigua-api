import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { StudentRepository } from './repository/student.repository';
import entities from './entities';

// external modules
import { UsersModule } from '../users/users.module';
import { PersonsModule } from '../persons/persons.module';

@Module({
    imports: [
        TypeOrmModule.forFeature(entities),
        UsersModule,
        PersonsModule
    ],
    controllers: [StudentsController],
    providers: [StudentsService, StudentRepository]
})
export class StudentsModule {}
