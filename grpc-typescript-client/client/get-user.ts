import { Employee, EmployeeRequest } from "../proto/employees_pb";
import { client } from "./utils";


export default function getEmployees(id: number) {
    return new Promise<Employee>((resolve, reject) => {
        const request = new EmployeeRequest();
        request.setId(id);

        client.getEmployee(request, (err, employee) => {
            if (err) reject(err);
            else resolve(employee);
        });
    });
}