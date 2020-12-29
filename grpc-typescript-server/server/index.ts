import { Server, ServerCredentials } from "grpc";
import { EmployeesService } from "../proto/employees_grpc_pb";
import { EmployeesServer } from "./services";

const server = new Server();
server.addService(EmployeesService, new EmployeesServer());

const port = 3000;
const uri = `localhost:${port}`;
console.log(`Listening on ${uri}`);
server.bind(uri, ServerCredentials.createInsecure());

server.start();