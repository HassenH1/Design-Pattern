// Composite pattern is a partitioning design pattern and describes a group of objects that is treated the same way as a single instance of the same type of object. The intent of a composite is to “compose” objects into tree structures to represent part-whole hierarchies. It allows you to have a tree structure and ask each node in the tree structure to perform a task.

class Employee {
  constructor(name, dept, salary) {
    this.name = name;
    this.dept = dept;
    this.salary = salary;
    this.list = [];
  }

  add(employee) {
    return this.list.push(employee);
  }

  remove(employee) {
    return this.list.filter((elem) => elem === employee);
  }

  getList() {
    return this.list.map((elem) => elem);
  }
}

let CEO = new Employee("John", "CEO", 30000);
let headSales = new Employee("Robert", "head sales", 20000);
let headMarketing = new Employee("Michel", "head marketing", 20000);
let clerk1 = new Employee("Lauran", "marketing", 10000);
let clerk2 = new Employee("Bob", "marketing", 10000);
let salesExecutive1 = new Employee("Richard", "Sales", 10000);
let salesExecutive2 = new Employee("Rob", "Sales", 10000);

CEO.add(headSales);
CEO.add(headMarketing);

headSales.add(salesExecutive1);
headSales.add(salesExecutive2);

headMarketing.add(clerk1);
headMarketing.add(clerk2);

console.log(CEO);

for (let i of CEO.getList()) {
  for (let j of i.getList()) {
    console.log(j);
  }
}
