# 🚗 Vehicle Inspection Project - Walkthrough

This walkthrough provides step-by-step instructions for implementing the Vehicle Inspection challenge.

---

## 🔧 Step 1: Project Setup

### Create a new TypeScript project using Vite

1. Open your terminal and navigate to where you want to create the project
2. Run the following command:
   ```bash
   npm create vite@latest .
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Initialize a Git repository

1. Initialize Git:
   ```bash
   git init
   ```
2. Add all files:
   ```bash
   git add .
   ```
3. Make your first commit:
   ```bash
   git commit -m "Initial commit: Vite + TypeScript setup"
   ```
4. (Optional) Create a repository on GitHub and push:
   ```bash
   git remote add origin https://github.com/yourusername/project-vehicle-inspection.git
   git branch -M main
   git push -u origin main
   ```

---

## 🚘 Step 2: Create a Car Class

Open `src/main.ts` and add the following `Car` class:

```typescript
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
```

### Explanation:

- **Properties**: Four typed properties (`numberOfTires`, `numberOfDoors`, `seatBelt`, `airbag`)
- **Constructor**: Accepts parameters with default values (4 tires, 4 doors, seatbelt and airbag enabled by default)
- **toString()**: Returns a human-readable string describing the car
- **equals()**: Compares all properties of two cars to determine equality

### Testing the Car class:

Add this code after the class definition to test it:

```typescript
// Test the Car class
const car1 = new Car();
console.log(car1.toString());

const car2 = new Car(4, 5, true, true);
console.log(car2.toString());

const car3 = new Car(4, 5, true, true);
console.log("car2 equals car3:", car2.equals(car3));
console.log("car1 equals car2:", car1.equals(car2));
```

---

## 🛠️ Step 3: Create a CarInspectionService Class

Add the following `CarInspectionService` class below the `Car` class in `src/main.ts`:

```typescript
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
```

### Explanation:

- **hasFourTires()**: Checks if the car has exactly 4 tires
- **hasSeatBelt()**: Checks if the car has a seatbelt
- **hasAirbag()**: Checks if the car has an airbag
- **hasThreeOrFiveDoors()**: Checks if the car has either 3 or 5 doors
- **checkCar()**: Comprehensive check that returns `true` only if all the above checks pass

All methods are `static`, meaning they can be called directly on the class without creating an instance.

### Comprehensive Testing of CarInspectionService:

The project includes 13 comprehensive test cases covering all possible scenarios:

#### **Passing Tests (2 tests)**

1. **Test 1**: Perfect car with 5 doors - All requirements met
2. **Test 2**: Perfect car with 3 doors - All requirements met

#### **Failing Tests (11 tests)**

**Tire Failures:** 3. **Test 3**: Only 3 tires (missing 1 tire) 4. **Test 4**: Too many tires (5 tires instead of 4) 5. **Test 13**: No tires at all (0 tires)

**Door Failures:** 6. **Test 5**: Only 2 doors (needs 3 or 5) 7. **Test 6**: 4 doors (needs 3 or 5) 8. **Test 7**: Too many doors (6 doors)

**Safety Feature Failures:** 9. **Test 8**: Missing seatbelt 10. **Test 9**: Missing airbag 11. **Test 10**: Missing both seatbelt and airbag

**Multiple Failures:** 12. **Test 11**: Wrong tires (3) AND wrong doors (4) 13. **Test 12**: Everything wrong (2 tires, 2 doors, no safety features)

#### **Test Output Format:**

Each test displays:

- Car description with all properties
- Inspection result (true/false)
- Expected result and reason for failure

#### **Inspection Criteria Summary:**

A car **PASSES** inspection if and only if:

- ✓ Has exactly 4 tires
- ✓ Has a seatbelt
- ✓ Has an airbag
- ✓ Has either 3 OR 5 doors

All four conditions must be true for the car to pass.

---

## ✅ Verification

After implementing both classes, run your development server:

```bash
npm run dev
```

Open the browser console (F12) to see the test output. You should see:

- Car descriptions from the `toString()` method
- Comparison results from the `equals()` method
- Inspection results showing which cars pass or fail

---

## 🎯 Key Concepts Demonstrated

1. **TypeScript Classes**: Defining classes with typed properties
2. **Constructors**: Using default parameters for flexible initialization
3. **Instance Methods**: `toString()` and `equals()` operate on specific car instances
4. **Static Methods**: `CarInspectionService` methods don't require instantiation
5. **Type Safety**: TypeScript ensures correct types are used throughout
6. **Boolean Logic**: Combining multiple conditions in `checkCar()`

---

## 🚀 Next Steps

- Add more car properties (color, brand, model, etc.)
- Create additional inspection criteria
- Build a UI for creating and inspecting cars
- Add unit tests using a testing framework like Vitest
- Export classes to separate files for better organization
