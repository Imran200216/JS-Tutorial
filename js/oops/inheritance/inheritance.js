/// Parent class or Base Class
// Parent class is also called as super class
class Animal {
  legs;
  tails;

  constructor(legs, tails) {
    this.legs = legs;
    this.tails = tails;
  }

  display() {
    console.log("Animal Constructor");
    console.log(this.legs);
    console.log(this.tails);
  }
}

/// Child Class or Sub Class
class Human extends Animal {
    nationality;

    constructor(legs, tails, nationality){
        console.log("Human Constructor");

        /// super class is used to call the parent class constructor 
        super(legs, tails);
        this.nationality = nationality;
    }
}

/// creating an object 
let anime = new Animal(2, false);
anime.display();

let imran = new Human(2, false, 'Indian');
console.log(imran);




