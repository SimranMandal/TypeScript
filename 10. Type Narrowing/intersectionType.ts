type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    role: string;
};

type EmployeeWithManager = Employee & Manager;

const manager: EmployeeWithManager = {
    id: 111,
    name: "Alex Alex",
    department: "Technial",
    role: "Team Lead"
};

console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);
