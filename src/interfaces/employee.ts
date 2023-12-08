import { Generated } from 'kysely';

export interface Employees {
  EmployeeID: Generated<number>;
  FirstName: string;
  LastName: string;
  Department: string;
  Salary: number;
}

export interface Database {
  employee: Employees;
}
