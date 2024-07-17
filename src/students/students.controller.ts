import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateCustomStudentDto, CreateStudentDto, UpdateCustomStudentDto, UpdateStudentDto } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Students')
@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Post()
    create(@Body() createStudentDto: CreateCustomStudentDto) {
        return this.studentsService.create(createStudentDto);
    }

    @Get()
    findAll() {
        return this.studentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.studentsService.findOne(+id);
    }

    @Get('info/:id')
    findOneById(@Param('id') id: string) {
        return this.studentsService.studentInfo(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateStudentDto: UpdateCustomStudentDto) {
        return this.studentsService.update(+id, updateStudentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.studentsService.remove(+id);
    }
}
