import { Exclude } from 'class-transformer';

export class ReadUserDto {

    user_id: number;
    
    username: string;
   
    @Exclude()
    password: string;

    @Exclude()
    password_hash: string;

    avatar: string;

    role: number;

    created_by: number;

    creation_date: Date;

    modified_by: number;

    modification_date: Date;

    status: number;

}