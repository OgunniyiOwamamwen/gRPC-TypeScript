// package: employees
// file: employees.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as employees_pb from "./employees_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IEmployeesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getEmployee: IEmployeesService_IGetEmployee;
    createEmployee: IEmployeesService_ICreateEmployee;
    getEmployees: IEmployeesService_IGetEmployees;
}

interface IEmployeesService_IGetEmployee extends grpc.MethodDefinition<employees_pb.EmployeeRequest, employees_pb.Employee> {
    path: "/employees.Employees/GetEmployee";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<employees_pb.EmployeeRequest>;
    requestDeserialize: grpc.deserialize<employees_pb.EmployeeRequest>;
    responseSerialize: grpc.serialize<employees_pb.Employee>;
    responseDeserialize: grpc.deserialize<employees_pb.Employee>;
}
interface IEmployeesService_ICreateEmployee extends grpc.MethodDefinition<employees_pb.Employee, google_protobuf_empty_pb.Empty> {
    path: "/employees.Employees/CreateEmployee";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<employees_pb.Employee>;
    requestDeserialize: grpc.deserialize<employees_pb.Employee>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IEmployeesService_IGetEmployees extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, employees_pb.Employee> {
    path: "/employees.Employees/GetEmployees";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<employees_pb.Employee>;
    responseDeserialize: grpc.deserialize<employees_pb.Employee>;
}

export const EmployeesService: IEmployeesService;

export interface IEmployeesServer {
    getEmployee: grpc.handleUnaryCall<employees_pb.EmployeeRequest, employees_pb.Employee>;
    createEmployee: grpc.handleClientStreamingCall<employees_pb.Employee, google_protobuf_empty_pb.Empty>;
    getEmployees: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, employees_pb.Employee>;
}

export interface IEmployeesClient {
    getEmployee(request: employees_pb.EmployeeRequest, callback: (error: grpc.ServiceError | null, response: employees_pb.Employee) => void): grpc.ClientUnaryCall;
    getEmployee(request: employees_pb.EmployeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: employees_pb.Employee) => void): grpc.ClientUnaryCall;
    getEmployee(request: employees_pb.EmployeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: employees_pb.Employee) => void): grpc.ClientUnaryCall;
    createEmployee(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<employees_pb.Employee>;
    createEmployee(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<employees_pb.Employee>;
    createEmployee(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<employees_pb.Employee>;
    createEmployee(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<employees_pb.Employee>;
    getEmployees(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<employees_pb.Employee>;
    getEmployees(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<employees_pb.Employee>;
}

export class EmployeesClient extends grpc.Client implements IEmployeesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getEmployee(request: employees_pb.EmployeeRequest, callback: (error: grpc.ServiceError | null, response: employees_pb.Employee) => void): grpc.ClientUnaryCall;
    public getEmployee(request: employees_pb.EmployeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: employees_pb.Employee) => void): grpc.ClientUnaryCall;
    public getEmployee(request: employees_pb.EmployeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: employees_pb.Employee) => void): grpc.ClientUnaryCall;
    public createEmployee(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<employees_pb.Employee>;
    public createEmployee(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<employees_pb.Employee>;
    public createEmployee(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<employees_pb.Employee>;
    public createEmployee(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<employees_pb.Employee>;
    public getEmployees(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<employees_pb.Employee>;
    public getEmployees(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<employees_pb.Employee>;
}
