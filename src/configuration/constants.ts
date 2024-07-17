import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();
const PREFIX = configService.get('DB_PREFIX');

export const CONSTANTS = {
    SECRET: configService.get('JWT_SECRET'),
    EXPIRE: configService.get('JWT_EXPIRE'),
};

export const TABLE_NAME = {
    COURSE_DETAILS: `course_details`,
    LOGS: `logs`,
    PERSONS: `persons`,
    SYSTEM_LOGS: `system_logs`,
    TYPOLOGIES: `typologies`,
    USERS: `users`,
    STUDENTS: `students`,
    TEACHERS: `teachers`,
    COURSES: `courses`,
    INSCRIPTIONS: `inscriptions`,
    ATTENDANCES: `attendances`,
    TRANSACTIONS: `transactions`,
}
