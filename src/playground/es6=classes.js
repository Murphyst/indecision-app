class Person {
    constructor(name = 'Unknown', surname, birthYear = 0){
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
       
    }
    calculateAge(){
        let year = new Date().getFullYear();
        let age = year - this.birthYear;
        this.age = age;
    }

    getDescription(){

        return `${this.name} ${this.surname} is ${this.age} years old.`
    }
};

class Parents extends Person{
    constructor(name = 'Unknown', surname, birthYear = 0, son, daughter){
        super(name, surname, birthYear)
        this.son = son;
        this.daughter = daughter;
    }
}

const me = new Person('Murphy', 'Callivalende', 1989);
me.calculateAge();
console.log(me.getDescription());

const you = new Person('Christina', 'Delavera', 1999);
you.calculateAge();
console.log(you.getDescription());

const dad = new Parents('Albus', 'Dumbledore', 1910, 2, 1);
dad.calculateAge();
console.log(dad.getDescription());

const mom = new Parents('Zeynep Nur', 'Celiktas', 1993,2, 2);
mom.calculateAge();
console.log(mom.getDescription());


