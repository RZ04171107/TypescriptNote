class Vehicle {
  // field
  //   color: string;

  //   constructor(color: string) {
  //     this.color = color;
  //   }

  // short cut:
  constructor(public color: string) {}

  drive(): void {
    console.log("chugga chugga");
  }

  protected honk(): void {
    console.log("beep");
  }
}

// Inheritance in ts
class Car extends Vehicle {
  // fields with inheritance
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // override methods
  drive(): void {
    console.log("vroom");
  }
}

// class method modifiers: public, private, protected
// puclic (by default): method can be called any where, any time
// private: method can only be called by other methods in this class
// protected: method can be called by other methods in this class, or by other methods in child classes

class Car1 extends Vehicle {
  private drive_m(): void {
    console.log("vroom: Car1");
  }
  startDrivingProcess(): void {
    this.drive_m();
    this.honk();
    console.log("driving started!");
  }
}

const car = new Car(4, "blue");
console.log(car.color);
