import { Module } from '@nestjs/common';
import { MysqlDialect } from 'kysely';
import { createPool } from 'mysql2';
import { KyselyModule } from 'nestjs-kysely';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    EmployeeModule,
    KyselyModule.forRoot({
      dialect: new MysqlDialect({
        pool: createPool({
          host: 'localhost',
          port: 3306,
          user: 'user',
          password: 'password',
          database: 'EmployeeDB',
        }),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
