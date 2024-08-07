// Person class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }

  // Getter for age (optional for validation)
  get age() {
    return this._age;
  }
}

// Student class extending Person
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class extending Person
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage
