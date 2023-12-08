import { Injectable } from '@nestjs/common';
import { CreateEmployeeParams, UpdateEmployeeParams } from 'src/utils/types';
import { DB } from 'src/employee/@types';
import { InjectKysely } from 'nestjs-kysely';

@Injectable()
export class EmployeeService {
  constructor(@InjectKysely() private readonly db: DB) {}

  async createNewEmployee(newEmployee: CreateEmployeeParams) {
    const result = await this.db
      .insertInto('Employees')
      .values({
        FirstName: newEmployee.FirstName,
        LastName: newEmployee.LastName,
        Department: newEmployee.Department,
        Salary: newEmployee.Salary,
      })
      .executeTakeFirst();

    const em = await this.db
      .selectFrom('Employees')
      .where('EmployeeID', '=', result.insertId)
      .selectAll()
      .execute();

    return em;
  }

  getAllUsers() {
    return this.db.selectFrom('Employees').selectAll().execute();
  }

  getAEmployee(id: number) {
    let query = this.db.selectFrom('Employees');
    if (id) {
      query = query.where('EmployeeID', '=', id);
    }
    return query.selectAll().execute();
  }

  async updateEmployee(id: number, updateEmployee: UpdateEmployeeParams) {
    await this.db
      .updateTable('Employees')
      .set({
        FirstName: updateEmployee.FirstName,
        LastName: updateEmployee.LastName,
        Department: updateEmployee.Department,
        Salary: updateEmployee.Salary,
      })
      .where('EmployeeID', '=', id)
      .executeTakeFirst();

    const em = await this.db
      .selectFrom('Employees')
      .where('EmployeeID', '=', id)
      .selectAll()
      .execute();

    return em;
  }

  async removeEmployee(id: number) {
    await this.db
      .deleteFrom('Employees')
      .where('EmployeeID', '=', id)
      .executeTakeFirst();

    return { message: 'success' };
  }
}
