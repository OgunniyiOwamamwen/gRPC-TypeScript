import { Employee, Employeestatus } from "../proto/employees_pb";
import getEmployee from "./get-user";
import createEmployees from "./create-users";
import allEmployees from "./all-users";

async function run() {
    const employee = await getEmployee(1);
    console.log(employee.toString());

    const objname = new Employee();
    objname.setId(4);
    objname.setDepartmentid(3);
    objname.setSurname("Daniela");
    objname.setName("William");
    objname.setGender("Female");
    objname.setAge(31);
    objname.setStatus(Employeestatus.UNKNOWN);
    createEmployees([objname]);
    console.log(`\nCreated employee ${objname.toString()}`);

    // All employee lists
    const employees = await allEmployees();
    console.log(`\nListing all ${employees.length} employees`);
    for (const employee of employees) {
        console.log(employee.toString());
    }
}

run();