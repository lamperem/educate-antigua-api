import { Exclude } from 'class-transformer';

export class AuthUserDto {

    user_id: number;
    
    username: string;
   
    password: string;

    password_hash: string;

    avatar: string;

    role: number;
    
    @Exclude()
    created_by: number;

    @Exclude()
    creation_date: string;

    @Exclude()
    modified_by: number;

    @Exclude()
    modification_date: string;

    @Exclude()
    status: number;
}