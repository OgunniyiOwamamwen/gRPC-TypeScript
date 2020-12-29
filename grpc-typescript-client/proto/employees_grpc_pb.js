// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var employees_pb = require('./employees_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_employees_Employee(arg) {
  if (!(arg instanceof employees_pb.Employee)) {
    throw new Error('Expected argument of type employees.Employee');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employees_Employee(buffer_arg) {
  return employees_pb.Employee.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employees_EmployeeRequest(arg) {
  if (!(arg instanceof employees_pb.EmployeeRequest)) {
    throw new Error('Expected argument of type employees.EmployeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employees_EmployeeRequest(buffer_arg) {
  return employees_pb.EmployeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var EmployeesService = exports.EmployeesService = {
  getEmployee: {
    path: '/employees.Employees/GetEmployee',
    requestStream: false,
    responseStream: false,
    requestType: employees_pb.EmployeeRequest,
    responseType: employees_pb.Employee,
    requestSerialize: serialize_employees_EmployeeRequest,
    requestDeserialize: deserialize_employees_EmployeeRequest,
    responseSerialize: serialize_employees_Employee,
    responseDeserialize: deserialize_employees_Employee,
  },
  createEmployee: {
    path: '/employees.Employees/CreateEmployee',
    requestStream: true,
    responseStream: false,
    requestType: employees_pb.Employee,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_employees_Employee,
    requestDeserialize: deserialize_employees_Employee,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getEmployees: {
    path: '/employees.Employees/GetEmployees',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: employees_pb.Employee,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_employees_Employee,
    responseDeserialize: deserialize_employees_Employee,
  },
};

exports.EmployeesClient = grpc.makeGenericClientConstructor(EmployeesService);
