import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { sendUnaryData, ServerReadableStream, ServerUnaryCall, ServerWritableStream, ServiceError } from "grpc";
import { IEmployeesServer } from "../proto/employees_grpc_pb";
import { Employee, EmployeeRequest } from "../proto/employees_pb";
import { employees } from "./database";


export class EmployeesServer implements IEmployeesServer {
    getEmployee(call: ServerUnaryCall<EmployeeRequest>, callback: sendUnaryData<Employee>) {
        const employeeId = call.request.getId();
        const employee = employees.find((e) => e.getId() === employeeId);

        if (!employee) {
            const error: ServiceError = {
                name: "Employee Missing",
                message: `Employee with ID ${employeeId} doesn't exist.`,
            };
            callback(error, null);
            return;
        }

        console.log(`getEmployee: returning ${employee.getSurname()} ${employee.getId()}.`);
        callback(null, employee);
    }

    //getEmployees
    getEmployees(call: ServerWritableStream<Empty>) {
        console.log(`getEmployees: stream all employess.`);
        for (const employee of employees) call.write(employee);
        call.end();
    }

    //createEmployee
    createEmployee(call: ServerReadableStream<Empty>, callback: sendUnaryData<Empty>) {
        console.log(`createEmployees: creating new employees from stream.`);

        let EmployeeCount = 0;

        call.on("data", (e) => {
            EmployeeCount++;
            employees.push(e);
        });

        call.on("end", () => {
            console.log(`Created ${EmployeeCount}  new Employee(s).`);
            callback(null, new Empty());
        })
    }
}