import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { UserEntity } from '../users/entities/user.entity';

// Migration
import migrations from '../database/migrations';

// Seeders
import seeders from '../database/seeders';

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    ssl: configService.getOrThrow('ENV') === 'PRD'? { rejectUnauthorized: false } : false,
    parseInt8: true,
    synchronize: false,
    entities: [
        UserEntity,
    ],
    migrations: [ ...migrations, ...seeders ],
});

