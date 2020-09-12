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
  },
  getCurrVal: () => {
    return this.currentValue;
  },
};

function Command(func, value) {
  this.execute = func;
  this.value = value;
}

function addCommand(value) {
  Command.call(
    this,
    function (value) {
      return value + this.value;
    },
    value
  );
}

let cal = new Calc();
