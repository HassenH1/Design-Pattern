// What is the Observer design pattern?
// The Observer pattern is a design pattern that offers a subscription model in which objects (known as 'observers') can subscribe to an event (known as a 'subject') and get notified when the event occurs (or when the subject sends a signal). This pattern is the cornerstone of event driven programming.

function Subject() {
  this.observer = []; //array of observer functions
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observer.push(fn);
  },

  unsubscribe: function (fnToRemove) {
    this.observer = this.observer.filter((fn) => {
      if (fn != fnToRemove) {
        return fn;
      }
    });
  },

  fire: function () {
    this.observer.forEach((fn) => {
      // fn.call(); //calls or invokes the functions
      fn();
    });
  },
};

const subject = new Subject();

function Observer1() {
  console.log("Observer 1 firing");
}

function Observer2() {
  console.log("Observer 2 firing");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.unsubscribe(Observer1);
subject.fire();
