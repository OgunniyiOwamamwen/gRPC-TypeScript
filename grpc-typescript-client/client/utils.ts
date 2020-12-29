import { EmployeesClient } from "../proto/employees_grpc_pb";
import { credentials } from "grpc";

const port = 3000;

export const client = new EmployeesClient(
    `localhost:${port}`,
    credentials.createInsecure()
);

export const noop = () => { };