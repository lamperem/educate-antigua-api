import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { CONSTANTS } from './configuration/constants';

// modules
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PersonsModule } from './persons/persons.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: CONSTANTS.SECRET,
      signOptions: { expiresIn: CONSTANTS.EXPIRE },
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    PersonsModule,
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
