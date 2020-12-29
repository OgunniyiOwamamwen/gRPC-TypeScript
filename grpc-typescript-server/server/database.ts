import { Employee, Employeestatus } from "../proto/employees_pb";

export function employeeToClass({ id, departmentid, surname, name, gender, age, status }: Employee.AsObject) {
    const employee = new Employee();
    employee.setId(id);
    employee.setDepartmentid(departmentid);
    employee.setSurname(surname);
    employee.setName(name);
    employee.setGender(gender);
    employee.setAge(age);
    employee.setStatus(status);
    return employee;
}

export const employees: Employee[] = [
    { id: 1, departmentid: 3, surname: "Ogunniyi", name: "Owamamwen", gender: "Male", age: 29, status: Employeestatus.OFFLINE },
    { id: 2, departmentid: 2, surname: "Luca", name: "Paolo", gender: "Male", age: 32, status: Employeestatus.BUSY },
    { id: 3, departmentid: 1, surname: "Stefano", name: "Matteo", gender: "Male", age: 26, status: Employeestatus.AVAILABLE }
].map(employeeToClass);