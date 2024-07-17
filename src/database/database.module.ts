import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

config();

const configService = new ConfigService();

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            entities: [],
            autoLoadEntities: true,
            ssl: configService.getOrThrow('ENV') === 'PRD'? { rejectUnauthorized: false } : false,
            parseInt8: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class DatabaseModule {}
