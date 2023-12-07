class Animal{
    contructor(name,age,color,legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs
    }

    eat(food){
        console.log(`${this.name} is eating ${food}.`);
    }

    sleep(){
        console.log(`${this.name} is sleeping`);
    }


}


class Dog extends Animal{
    constructor(name, age, color, leg,breed){
        super(name, age, color, leg);
        this.breed = breed;

    }

    brark(){
        console.log(`${this.name} is barking`);
    }

    sleep() {
        console.log(`${this.name} is snoring while sleeping.`);
      }
}



class Cat extends Animal {
    constructor(name, age, color, legs, isIndoor) {
      super(name, age, color, legs);
      this.isIndoor = isIndoor;
    }
  
    meow() {
      console.log(`${this.name} is meowing.`);
    }
    

    sleep() {
        console.log(`${this.name} is purring while sleeping.`);
      }
    // Add any other cat-specific methods here
  }

const dog = new Dog('Buddy', 3, 'brown', 4, 'Golden Retriever');
dog.eat('bone'); // Output: Buddy is eating bone.
dog.sleep(); // Output: Buddy is sleeping.
dog.bark(); // Output: Buddy is barking.

const cat = new Cat('Whiskers', 5, 'gray', 4, true);
cat.eat('fish'); // Output: Whiskers is eating fish.
cat.sleep(); // Output: Whiskers is sleeping.
cat.meow(); // Output: Whiskers is meowing.