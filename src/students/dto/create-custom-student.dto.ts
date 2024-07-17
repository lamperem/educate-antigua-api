export class CreateCustomStudentDto {
    dni: string;
    dni_type: number;
    name: string;
    surname: string;
    dob: string;
    gender: number;
    marital_status: number;
    is_minor: boolean;
    address_country_iso: number;
    address_local_state: number;
    address_local_city: number;
    address_local_zone: number;
    contact_email: string;
    contact_phone: string;
    type: number;
}
