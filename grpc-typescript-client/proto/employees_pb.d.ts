// package: employees
// file: employees.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Employee extends jspb.Message { 
    getId(): number;
    setId(value: number): Employee;

    getDepartmentid(): number;
    setDepartmentid(value: number): Employee;

    getSurname(): string;
    setSurname(value: string): Employee;

    getName(): string;
    setName(value: string): Employee;

    getGender(): string;
    setGender(value: string): Employee;

    getAge(): number;
    setAge(value: number): Employee;

    getStatus(): Employeestatus;
    setStatus(value: Employeestatus): Employee;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Employee.AsObject;
    static toObject(includeInstance: boolean, msg: Employee): Employee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Employee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Employee;
    static deserializeBinaryFromReader(message: Employee, reader: jspb.BinaryReader): Employee;
}

export namespace Employee {
    export type AsObject = {
        id: number,
        departmentid: number,
        surname: string,
        name: string,
        gender: string,
        age: number,
        status: Employeestatus,
    }
}

export class EmployeeRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): EmployeeRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmployeeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EmployeeRequest): EmployeeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmployeeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmployeeRequest;
    static deserializeBinaryFromReader(message: EmployeeRequest, reader: jspb.BinaryReader): EmployeeRequest;
}

export namespace EmployeeRequest {
    export type AsObject = {
        id: number,
    }
}

export enum Employeestatus {
    UNKNOWN = 0,
    OFFLINE = 1,
    BUSY = 2,
    AVAILABLE = 3,
}
