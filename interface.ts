// INTERFACES
// Creates a new type, describing the property names and value types of an object

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(
    `Name: ${vehicle.name}, Year: ${vehicle.year}, Broken? ${vehicle.broken}`
  );
};

// above: the annotation can be very long
// Therefore we should use interface

interface Vehicle {
  name: string;
  year: Date;
  Broken: boolean;
  summary(): string; // function in interface
}

interface Reportable {
  summary(): string;
}

const oldCivic_m = {
  name: "civic",
  year: new Date(),
  Broken: true,
  summary(): string {
    return `
    Name: ${this.name}
    Year: ${this.year}
    Is broken? ${this.Broken}
    `;
  },
};

const drink = {
  color: "brown",
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} gram of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldCivic_m);
printSummary(drink);
