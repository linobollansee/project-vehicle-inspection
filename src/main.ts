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

// Comprehensive Test Suite | Umfassende Testsuite
// Testing all possible scenarios for inspection pass and fail | Teste alle möglichen Szenarien für bestanden und durchgefallen

console.log("\n=== PASSING CARS (Should all return true) ===");
console.log("=== BESTANDENE AUTOS (Sollten alle true zurückgeben) ===\n");

// PASS Test 1: Perfect car with 5 doors | BESTANDEN Test 1: Perfektes Auto mit 5 Türen
const passCar1 = new Car(4, 5, true, true);
console.log("✓ Test 1 - Perfect car with 5 doors:", passCar1.toString());
console.log(
  "  Passes inspection:",
  CarInspectionService.checkCar(passCar1),
  "(Expected: true)\n"
);

// PASS Test 2: Perfect car with 3 doors | BESTANDEN Test 2: Perfektes Auto mit 3 Türen
const passCar2 = new Car(4, 3, true, true);
console.log("✓ Test 2 - Perfect car with 3 doors:", passCar2.toString());
console.log(
  "  Passes inspection:",
  CarInspectionService.checkCar(passCar2),
  "(Expected: true)\n"
);

console.log("\n=== FAILING CARS (Should all return false) ===");
console.log("=== DURCHGEFALLENE AUTOS (Sollten alle false zurückgeben) ===\n");

// FAIL Test 1: Wrong number of tires (3 instead of 4) | DURCHGEFALLEN Test 1: Falsche Anzahl Reifen (3 statt 4)
const failCar1 = new Car(3, 5, true, true);
console.log("✗ Test 3 - Only 3 tires:", failCar1.toString());
console.log(
  "  Passes inspection:",
  CarInspectionService.checkCar(failCar1),
  "(Expected: false - missing 1 tire)\n"
);

// FAIL Test 2: Wrong number of tires (5 instead of 4) | DURCHGEFALLEN Test 2: Falsche Anzahl Reifen (5 statt 4)
const failCar2 = new Car(5, 3, true, true);
console.log("✗ Test 4 - Too many tires (5):", failCar2.toString());
console.log(
  "  Passes inspection:",
  CarInspectionService.checkCar(failCar2),
  "(Expected: false - too many tires)\n"
);

// FAIL Test 3: Wrong number of doors (2 doors) | DURCHGEFALLEN Test 3: Falsche Anzahl Türen (2 Türen)
const failCar3 = new Car(4, 2, true, true);
console.log("✗ Test 5 - Only 2 doors:", failCar3.toString());
console.log(
  "  Passes inspection:",
  CarInspectionService.checkCar(failCar3),
  "(Expected: false - needs 3 or 5 doors)\n"
);

// FAIL Test 4: Wrong number of doors (4 doors) | DURCHGEFALLEN Test 4: Falsche Anzahl Türen (4 Türen)
const failCar4 = new Car(4, 4, true, true);
console.log("✗ Test 6 - 4 doors (not 3 or 5):", failCar4.toString());
console.log(
  "  Passes inspection:",
  CarInspectionService.checkCar(failCar4),
  "(Expected: false - needs 3 or 5 doors)\n"
);

// FAIL Test 5: Wrong number of doors (6 doors) | DURCHGEFALLEN Test 5: Falsche Anzahl Türen (6 Türen)
const failCar5 = new Car(4, 6, true, true);
console.log("✗ Test 7 - Too many doors (6):", failCar5.toString());
console.log(
  "  Passes inspection:",
  CarInspectionService.checkCar(failCar5),
  "(Expected: false - needs 3 or 5 doors)\n"
);

// FAIL Test 6: No seatbelt | DURCHGEFALLEN Test 6: Kein Sicherheitsgurt
const failCar6 = new Car(4, 5, false, true);
console.log("✗ Test 8 - No seatbelt:", failCar6.toString());
console.log(
  "  Passes inspection:",
  CarInspectionService.checkCar(failCar6),
  "(Expected: false - missing seatbelt)\n"
);

// FAIL Test 7: No airbag | DURCHGEFALLEN Test 7: Kein Airbag
const failCar7 = new Car(4, 3, true, false);
console.log("✗ Test 9 - No airbag:", failCar7.toString());
console.log(
  "  Passes inspection:",
  CarInspectionService.checkCar(failCar7),
  "(Expected: false - missing airbag)\n"
);

// FAIL Test 8: No seatbelt and no airbag | DURCHGEFALLEN Test 8: Kein Sicherheitsgurt und kein Airbag
const failCar8 = new Car(4, 5, false, false);
console.log("✗ Test 10 - No seatbelt and no airbag:", failCar8.toString());
console.log(
  "  Passes inspection:",
  CarInspectionService.checkCar(failCar8),
  "(Expected: false - missing safety features)\n"
);

// FAIL Test 9: Wrong tires and wrong doors | DURCHGEFALLEN Test 9: Falsche Reifen und falsche Türen
const failCar9 = new Car(3, 4, true, true);
console.log(
  "✗ Test 11 - Wrong tires (3) and wrong doors (4):",
  failCar9.toString()
);
console.log(
  "  Passes inspection:",
  CarInspectionService.checkCar(failCar9),
  "(Expected: false - multiple failures)\n"
);

// FAIL Test 10: Multiple failures | DURCHGEFALLEN Test 10: Mehrere Fehler
const failCar10 = new Car(2, 2, false, false);
console.log(
  "✗ Test 12 - Everything wrong (2 tires, 2 doors, no safety):",
  failCar10.toString()
);
console.log(
  "  Passes inspection:",
  CarInspectionService.checkCar(failCar10),
  "(Expected: false - catastrophic failure)\n"
);

// FAIL Test 11: Zero tires | DURCHGEFALLEN Test 11: Null Reifen
const failCar11 = new Car(0, 3, true, true);
console.log("✗ Test 13 - No tires at all:", failCar11.toString());
console.log(
  "  Passes inspection:",
  CarInspectionService.checkCar(failCar11),
  "(Expected: false - cannot drive)\n"
);

// Summary | Zusammenfassung
console.log("\n=== TEST SUMMARY | TESTZUSAMMENFASSUNG ===");
console.log("Total tests: 13");
console.log("Expected to PASS: 2 (Tests 1-2)");
console.log("Expected to FAIL: 11 (Tests 3-13)");
console.log("\nInspection Requirements | Inspektionsanforderungen:");
console.log("✓ Must have exactly 4 tires | Muss genau 4 Reifen haben");
console.log("✓ Must have seatbelt | Muss Sicherheitsgurt haben");
console.log("✓ Must have airbag | Muss Airbag haben");
console.log("✓ Must have 3 OR 5 doors | Muss 3 ODER 5 Türen haben");
