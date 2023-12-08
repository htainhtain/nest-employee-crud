import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { employeeDto } from 'src/employee/model/employee.dto';
import { EmployeeService } from 'src/employee/service/employee/employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  listAllEmployees() {
    return this.employeeService.getAllUsers();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe())
  async getAEmployee(@Param('id', ParseIntPipe) id: number) {
    const emp = await this.employeeService.getAEmployee(id);
    if (!emp || Object.keys(emp).length === 0)
      throw new HttpException("employee doesn't exist", HttpStatus.BAD_REQUEST);
    return emp;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  newEmployee(@Body() newEmployee: employeeDto) {
    return this.employeeService.createNewEmployee(newEmployee);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Body() newEmployee: employeeDto,
  ) {
    return this.employeeService.updateEmployee(id, newEmployee);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  removeEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.removeEmployee(id);
  }
}
