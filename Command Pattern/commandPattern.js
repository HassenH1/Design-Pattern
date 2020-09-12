//encapsulate an action within an object which goes against OOP

function Calc() {
  this.currentValue = 0;
}

Calc.prototype = {
  // add: (value) => {
  //   this.currentValue += value;
  // },
  // sub: (value) => {
  //   this.currentValue -= value;
  // }, //rather then doing this you can just do
  execute: (command) => {
    this.currentValue = command.execute(this.currentValue);
    console.log(this.currentValue, "<------this is?");
  },
  getCurrVal: () => {
    console.log(this.currentValue);
    return this.currentValue;
  },
};

function Command(func, value) {
  this.execute = func;
  this.value = value;
}

function AddCommand(value) {
  Command.call(
    this,
    (value) => {
      console.log(value, "<-----val in addCommand");
      return value + this.value;
    },
    value
  );
}

let cal = new Calc();
cal.execute(new AddCommand(19));
cal.getCurrVal();
