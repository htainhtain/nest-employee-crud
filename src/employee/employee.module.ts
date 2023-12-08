import { Module } from '@nestjs/common';
import { EmployeeController } from './controller/employee/employee.controller';
import { EmployeeService } from './service/employee/employee.service';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
