import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

// Step 2: Car class
class Car {
  numberOfTires: number;
  numberOfDoors: number;
  seatBelt: boolean;
  airbag: boolean;

  constructor(
    numberOfTires: number = 4,
    numberOfDoors: number = 4,
    seatBelt: boolean = true,
    airbag: boolean = true
  ) {
    this.numberOfTires = numberOfTires;
    this.numberOfDoors = numberOfDoors;
    this.seatBelt = seatBelt;
    this.airbag = airbag;
  }

  toString(): string {
    return `Car with ${this.numberOfTires} tires, ${this.numberOfDoors} doors, seatbelt: ${this.seatBelt}, airbag: ${this.airbag}`;
  }

  equals(otherCar: Car): boolean {
    return (
      this.numberOfTires === otherCar.numberOfTires &&
      this.numberOfDoors === otherCar.numberOfDoors &&
      this.seatBelt === otherCar.seatBelt &&
      this.airbag === otherCar.airbag
    );
  }
}

// Step 3: CarInspectionService class
class CarInspectionService {
  static hasFourTires(car: Car): boolean {
    return car.numberOfTires === 4;
  }

  static hasSeatBelt(car: Car): boolean {
    return car.seatBelt;
  }

  static hasAirbag(car: Car): boolean {
    return car.airbag;
  }

  static hasThreeOrFiveDoors(car: Car): boolean {
    return car.numberOfDoors === 3 || car.numberOfDoors === 5;
  }

  static checkCar(car: Car): boolean {
    return (
      this.hasFourTires(car) &&
      this.hasSeatBelt(car) &&
      this.hasAirbag(car) &&
      this.hasThreeOrFiveDoors(car)
    );
  }
}

// Test the implementation
const testCar1 = new Car(4, 5, true, true);
console.log("Test Car 1:", testCar1.toString());
console.log("Passes inspection:", CarInspectionService.checkCar(testCar1));

const testCar2 = new Car(4, 3, true, true);
console.log("Test Car 2:", testCar2.toString());
console.log("Passes inspection:", CarInspectionService.checkCar(testCar2));
