// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Contractor{
    constructor(name, role){
        this._name = name;
        this._role = role;
    }
    get name(){
        return this._name;
    }
    get role(){
        return this._role;
    }
    sayHello(){
        console.log(`Hello, I am a ${this._role} team at #100Devs!`);
    }
}

class Developer extends Contractor{
    constructor(name, role, tech){
        super(name, role);
        this._tech = tech;
    }
    get tech(){
        return this._tech;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am on the ${this.role} team at #100Devs and I use ${this._tech}`)
    }
}

let bob = new Contractor('Bob', 'President');
let simba = new Developer('Simba', 'Front-end', 'React');
let machi = new Developer('Machi', 'Back-end', 'Node');

let developers = [simba, machi];

for(person of developers){
    person.sayHello();
}