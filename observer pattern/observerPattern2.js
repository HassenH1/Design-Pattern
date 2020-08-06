class Subject {
  constructor() {
    this.observers = [];
    this.state;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }

  attach(observer) {
    this.observers.push(observer);
  }

  notifyAllObservers() {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].update();
    }
  }
}

class BinaryObserver {
  constructor(subject) {
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log(`Binary string ${this.subject.getState().toString(2)}`); //converts state into binary
  }
}

class OctalObserver {
  constructor(subject) {
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log(`Octal string ${this.subject.getState().toString(8)}`); //converts state into octal
  }
}

class HexaObserver {
  constructor(subject) {
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log(`Hexa string ${this.subject.getState().toString(16)}`); //converts state into hex
  }
}

const subject = new Subject();
const hexa = new HexaObserver(subject);
const octal = new OctalObserver(subject);
const binary = new BinaryObserver(subject);

console.log("first state changing: 15");
subject.setState(15);
console.log("second state changing: 10");
subject.setState(10);
