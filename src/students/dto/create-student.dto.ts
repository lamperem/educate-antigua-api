export class CreateStudentDto {
    student_id: number;
    code: string;
    type: number;
    person_id: number;
    manager_person_id: number;
    user_id: number;
    created_by: number;
    creation_date: Date;
    modified_by: number;
    modification_date: Date;
    status: number;
}
