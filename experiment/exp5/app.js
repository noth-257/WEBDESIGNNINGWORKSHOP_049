/* let person ={
    name:"John",
    age:30,
    class:"btech",
};
console.log(person.name);
console.log(person.class);
console.log(person.age);
typeof
 console.log(typeof(person));

// array data type
let numbers=[1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

console.log(typeof(numbers));

let mixedarray=[1, "Hello" ,true,[1,2,3],{name: "alice",age:25}];
console.log(mixedarray[0]);
console.log(mixedarray[1]);
console.log(mixedarray[2]);
console.log(mixedarray[3]);
console.log(mixedarray[4]);

//normal function
function multiply(a, b) {
    return a * b;
}

// To see the result, you must call it:
console.log(multiply(5, 10)); 

//arrow function
const sayHi = () => console.log("hi!");

//arrow fun for multipliation
const mul =(a,b)=>(a*b);
console.log(mul);

// arrow fun whith single parameter --- does not required parathensis


//map on array 
let newarray =[1,2,3,4,5];
let squaredarray = newarray.map((num) => num*5);
console.log(squaredarray);


let evenNumbers = [1, 2, 3, 4, 5];
let filteredEvenNumbers = evenNumbers.filter(num => num % 2 === 0);
console.log(filteredEvenNumbers); 
// Output: [2, 4]

// 1. Subtraction Reduce
let sum = [1, 2, 3, 4, 5];
let total = sum.reduce((accumulator, currentvalue) => accumulator - currentvalue);
console.log(total); // Output: -13


let sums = [1, 2, 3, 4, 5];
let totals = sums.reduce((accumulator, currentvalue) => accumulator + currentvalue);
console.log(totals); // Output: 15


let students = [
    { name: "Alice", marks: 85 },
    { name: "BOB", marks: 92 },
    { name: "charlie", marks: 78 }
];
// Just use one .map() call
let marks = students.map(student => student.marks); 
console.log(marks); // Output: [85, 92, 78]

// 4. Filtering Students
let topstudents = students.filter(student => student.marks > 80);
console.log(topstudents); 
// Output: [{ name: "Alice", marks: 85 }, { name: "BOB", marks: 92 }] */

//mixed Object0
let mixedobject={
    name:"Alice",
    age:25,
    hobbies:["Reading","Travelling","Coding"],
    address:{
        street:"123 main St",
        city: "New York",
        country:"USA"
    },
    greet: function(){
        console.log("Hello!");
        //arrow function in object
        let arrowGreet=()=>{
            console.log("Hi!");
        }
    }
};
console.log(mixedobject.name);          //Alice
console.log(mixedobject.age);           //25
console.log(mixedobject.hobbies);       //["Reading","travelling","Coding"]
console.log(mixedobject.hobbies[0]);    //Reading
console.log(mixedobject.hobbies[1]);    //Travelling
console.log(mixedobject.hobbies[2]);    //Coding
console.log(mixedobject.address);       //{street:"123 main st", city:"New York",country:"USA"}
console.log(mixedobject.address.city);  //New York
// mixedobject.address.greet();            //Hello!

//Object inside array

let people=[
    {name:"Alice",age:25},
    {name:"Bob",age:30},
    {name:"Charlie",age:35}
]

console.log(people[0])
console.log(people[1].name)             //Bob
console.log(people[2].age)              //35


let company={
    name:"Tech Corp",
    employees: ["Alice","bob","Charlie"]
};
console.log(company.name);
console.log(company.employees);
console.log(company.employees[0]);
console.log(company.employees[1]);
console.log(company.employees[2]);






