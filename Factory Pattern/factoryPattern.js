// What is the Factory design pattern?
// The factory pattern is a creational design pattern that uses factory methods to create objects — rather than by calling a constructor.

function Developer(name) {
  this.name = name;
  this.type = "developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  };
}

function say() {
  console.log("Hello I am " + this.name + " and I am " + this.type);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Hassen", 1));
employees.push(employeeFactory.create("Hassen", 2));
employees.forEach((emp) => {
  say.call(emp);
});
