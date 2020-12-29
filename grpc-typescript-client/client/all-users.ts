import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { Employee } from "../proto/employees_pb";
import { client } from "./utils";

export default function allEmployees() {
    return new Promise<Employee[]>((resolve, reject) => {
        const stream = client.getEmployees(new Empty());
        const employees: Employee[] = [];
        stream.on("data", (employee => employees.push(employee)));
        stream.on("ërror", reject);
        stream.on("end", () => resolve(employees));
    });
}