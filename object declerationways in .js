//object declarations ways
//1.object literal
const person = {name:"sai",age:25,proffession:"developer"};
//2.new object()
const person1 = new Object();
person1.name ="teja";
person1.age =25;
person1.proffession ="tester";
//3.Object.create() method:
const person2 = Object.create(null);
person2.name ="pavan";
person2.age=45;
person2.proffession="support"; 
//4.using a constructor function
function Person3(name,age,proffession){
    this.name = name;
    this.age = age ;
    this.proffession= proffession;
}
const Person3 = new Person3("kiran",55,"jobseeker");
//5.Es6 class syntax:
class Person4{
    constructor(name,age,proffession){
        this.name = name;
        this.age = age ;
        this.proffession= proffession;
    }
}
const Person4 = new Person4("sishva",34,"plitician");
//Object.assign():
const Person5 = Object.assign({},{name:"koushik", age:78, proffession:"developer2"});
//spread operator:
const personData ={name:"sowjee",age:30,proffession:"homemaker"};
const person5 ={...personData};