// Constructor function for creating Person objects
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
    // Method to display the full name of the person
    this.fullName = function() {
      return this.firstName + ' ' + this.lastName;
    };
  }
  
  // Creating a new Person object
  var person1 = new Person('John', 'Doe', 30);
  
  // Accessing properties and methods of the object
  console.log(person1.firstName); // Outputs: John
  console.log(person1.age); // Outputs: 30
  console.log(person1.fullName()); // Outputs: John Doe
  