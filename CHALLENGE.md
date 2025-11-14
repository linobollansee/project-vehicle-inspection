🚗 Project: Vehicle Inspection
🔧 Step 1: Project Setup
Create a new TypeScript project using Vite.
Initialize a Git repository and optionally upload it to GitHub.
🚘 Step 2: Create a Car class
Create a class named Car with the following typed properties:

numberOfTires: number
numberOfDoors: number
seatBelt: boolean
airbag: boolean
Also:

Create a constructor that allows default values or full initialization.
Add a toString(): string method that returns a readable description of the car.
Add an equals(otherCar: Car): boolean method to compare two cars based on all properties.
🛠️ Step 3: Create a CarInspectionService class
Write the following static methods. Each method takes a Car instance as input and returns a boolean:

hasFourTires(car: Car): boolean
→ Returns true if the car has exactly 4 tires.

hasSeatBelt(car: Car): boolean
→ Returns true if the car has a seatbelt.

hasAirbag(car: Car): boolean
→ Returns true if the car has an airbag.

hasThreeOrFiveDoors(car: Car): boolean
→ Returns true if the car has either 3 or 5 doors.

checkCar(car: Car): boolean
→ Returns true only if all of the above checks pass.