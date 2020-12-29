import { Employee } from "../proto/employees_pb";
import { client, noop } from "./utils";

export default function createNewEmployees(employees: Employee[]) {
    const stream = client.createEmployee(noop);
    for (const employee of employees) {
        stream.write(employee);
    }
    stream.end();
}