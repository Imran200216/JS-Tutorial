/// objects
let userObj = {
  name: "Imran",
  age: 22,
  skills: ["JS", "Flutter", "React", "Next Js"],
};

/// class
class User {
  /// # is used for private
  #name;

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  display = function () {
    console.log("My name is " + this.#name);
    console.log("My age is " + this.age);
  };

  /// getter method => It is mainly used to access the private variables outside the class
  get name() {
    return "Name: " + this.#name;
  }

  /// setter method => It is mainly used to make changes of the private variables outside of the class
  set name(name) {
    return name == "Imran" ? (this.#name = "Hi Imran") : this.#name;
  }
}

let Imran = new User("Imran", 22);
console.log(typeof Imran);
Imran.display();
