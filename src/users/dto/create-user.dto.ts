import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

    user_id: number;
    
    @IsNotEmpty()
    @IsEmail()
    username: string;
   
    @IsNotEmpty()
    password: string;

    password_hash: string;

    avatar: string;

    role: number;

    created_by: number;

    creation_date: Date;

    modified_by: number;

    modification_date: Date;

    status: number;
    
}
