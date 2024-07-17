export class CreatePersonDto {
    person_id: number;
    dni: string;
    dni_type: number;
    password: string;
    name: string;
    surname: string;
    dob: string;
    gender: number;
    marital_status: number;
    is_foreign: boolean;
    is_minor: boolean;
    address_country_iso: number;
    address_local_state: number;
    address_local_city: number;
    address_local_zone: number;
    contact_email: string;
    contact_phone: string;
    created_by: number;
    creation_date: Date;
    modified_by: number;
    modification_date: Date;
    status: number;
}
