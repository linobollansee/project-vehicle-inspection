// Import the CSS stylesheet for styling | Importiere das CSS-Stylesheet für die Gestaltung
import "./style.css";
// Import the TypeScript logo image | Importiere das TypeScript-Logo-Bild
import typescriptLogo from "./typescript.svg";
// Import the Vite logo image | Importiere das Vite-Logo-Bild
import viteLogo from "/vite.svg";
// Import the setupCounter function from counter module | Importiere die setupCounter-Funktion aus dem Counter-Modul
import { setupCounter } from "./counter.ts";

// Select the app div and set its HTML content | Wähle das App-Div aus und setze seinen HTML-Inhalt
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

// Initialize the counter functionality on the button element | Initialisiere die Counter-Funktionalität auf dem Button-Element
setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

// Step 2: Car class definition | Schritt 2: Auto-Klassendefinition
class Car {
  // Number of tires property | Eigenschaft für die Anzahl der Reifen
  numberOfTires: number;
  // Number of doors property | Eigenschaft für die Anzahl der Türen
  numberOfDoors: number;
  // Seatbelt availability property | Eigenschaft für die Sicherheitsgurt-Verfügbarkeit
  seatBelt: boolean;
  // Airbag availability property | Eigenschaft für die Airbag-Verfügbarkeit
  airbag: boolean;

  // Constructor to initialize a Car object with default values | Konstruktor zur Initialisierung eines Auto-Objekts mit Standardwerten
  constructor(
    // Parameter for number of tires, default is 4 | Parameter für die Anzahl der Reifen, Standard ist 4
    numberOfTires: number = 4,
    // Parameter for number of doors, default is 4 | Parameter für die Anzahl der Türen, Standard ist 4
    numberOfDoors: number = 4,
    // Parameter for seatbelt, default is true | Parameter für Sicherheitsgurt, Standard ist true
    seatBelt: boolean = true,
    // Parameter for airbag, default is true | Parameter für Airbag, Standard ist true
    airbag: boolean = true
  ) {
    // Assign number of tires to the instance property | Weise die Anzahl der Reifen der Instanz-Eigenschaft zu
    this.numberOfTires = numberOfTires;
    // Assign number of doors to the instance property | Weise die Anzahl der Türen der Instanz-Eigenschaft zu
    this.numberOfDoors = numberOfDoors;
    // Assign seatbelt value to the instance property | Weise den Sicherheitsgurt-Wert der Instanz-Eigenschaft zu
    this.seatBelt = seatBelt;
    // Assign airbag value to the instance property | Weise den Airbag-Wert der Instanz-Eigenschaft zu
    this.airbag = airbag;
  }

  // Method to convert Car object to string representation | Methode zur Umwandlung des Auto-Objekts in eine String-Darstellung
  toString(): string {
    // Return formatted string with car details | Gib einen formatierten String mit Auto-Details zurück
    return `Car with ${this.numberOfTires} tires, ${this.numberOfDoors} doors, seatbelt: ${this.seatBelt}, airbag: ${this.airbag}`;
  }

  // Method to check if two cars are equal | Methode zur Überprüfung, ob zwei Autos gleich sind
  equals(otherCar: Car): boolean {
    // Compare all properties and return true if all match | Vergleiche alle Eigenschaften und gib true zurück, wenn alle übereinstimmen
    return (
      // Check if number of tires is equal | Prüfe, ob die Anzahl der Reifen gleich ist
      this.numberOfTires === otherCar.numberOfTires &&
      // Check if number of doors is equal | Prüfe, ob die Anzahl der Türen gleich ist
      this.numberOfDoors === otherCar.numberOfDoors &&
      // Check if seatbelt status is equal | Prüfe, ob der Sicherheitsgurt-Status gleich ist
      this.seatBelt === otherCar.seatBelt &&
      // Check if airbag status is equal | Prüfe, ob der Airbag-Status gleich ist
      this.airbag === otherCar.airbag
    );
  }
}

// Step 3: CarInspectionService class for vehicle inspection | Schritt 3: AutoInspektionsdienst-Klasse für die Fahrzeuginspektion
class CarInspectionService {
  // Static method to check if car has four tires | Statische Methode zur Überprüfung, ob das Auto vier Reifen hat
  static hasFourTires(car: Car): boolean {
    // Return true if number of tires equals 4 | Gib true zurück, wenn die Anzahl der Reifen gleich 4 ist
    return car.numberOfTires === 4;
  }

  // Static method to check if car has a seatbelt | Statische Methode zur Überprüfung, ob das Auto einen Sicherheitsgurt hat
  static hasSeatBelt(car: Car): boolean {
    // Return the seatbelt property value | Gib den Wert der Sicherheitsgurt-Eigenschaft zurück
    return car.seatBelt;
  }

  // Static method to check if car has an airbag | Statische Methode zur Überprüfung, ob das Auto einen Airbag hat
  static hasAirbag(car: Car): boolean {
    // Return the airbag property value | Gib den Wert der Airbag-Eigenschaft zurück
    return car.airbag;
  }

  // Static method to check if car has three or five doors | Statische Methode zur Überprüfung, ob das Auto drei oder fünf Türen hat
  static hasThreeOrFiveDoors(car: Car): boolean {
    // Return true if number of doors is 3 or 5 | Gib true zurück, wenn die Anzahl der Türen 3 oder 5 ist
    return car.numberOfDoors === 3 || car.numberOfDoors === 5;
  }

  // Static method to perform complete car inspection | Statische Methode zur Durchführung einer vollständigen Autoinspektion
  static checkCar(car: Car): boolean {
    // Return true if all inspection criteria are met | Gib true zurück, wenn alle Inspektionskriterien erfüllt sind
    return (
      // Check if car has four tires | Prüfe, ob das Auto vier Reifen hat
      this.hasFourTires(car) &&
      // Check if car has seatbelt | Prüfe, ob das Auto einen Sicherheitsgurt hat
      this.hasSeatBelt(car) &&
      // Check if car has airbag | Prüfe, ob das Auto einen Airbag hat
      this.hasAirbag(car) &&
      // Check if car has three or five doors | Prüfe, ob das Auto drei oder fünf Türen hat
      this.hasThreeOrFiveDoors(car)
    );
  }
}

// Test the implementation with first test car | Teste die Implementierung mit dem ersten Testauto
// Create a new Car instance with 4 tires, 5 doors, seatbelt and airbag | Erstelle eine neue Auto-Instanz mit 4 Reifen, 5 Türen, Sicherheitsgurt und Airbag
const testCar1 = new Car(4, 5, true, true);
// Log the string representation of test car 1 | Logge die String-Darstellung des Testautos 1
console.log("Test Car 1:", testCar1.toString());
// Log whether test car 1 passes inspection | Logge, ob Testauto 1 die Inspektion besteht
console.log("Passes inspection:", CarInspectionService.checkCar(testCar1));

// Create second test car for testing | Erstelle zweites Testauto für Tests
// Create a new Car instance with 4 tires, 3 doors, seatbelt and airbag | Erstelle eine neue Auto-Instanz mit 4 Reifen, 3 Türen, Sicherheitsgurt und Airbag
const testCar2 = new Car(4, 3, true, true);
// Log the string representation of test car 2 | Logge die String-Darstellung des Testautos 2
console.log("Test Car 2:", testCar2.toString());
// Log whether test car 2 passes inspection | Logge, ob Testauto 2 die Inspektion besteht
console.log("Passes inspection:", CarInspectionService.checkCar(testCar2));
