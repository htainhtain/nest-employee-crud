import { IsNotEmpty, IsNumber } from 'class-validator';

export class employeeDto {
  @IsNotEmpty()
  FirstName: string;

  LastName: string;

  @IsNotEmpty()
  Department: string;

  @IsNumber()
  Salary: number;
}
