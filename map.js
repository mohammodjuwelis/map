const numbers = [4,5,6,7,8,9,10];

/* const doubleNumbers = [];
for(number of numbers) {
    const doubleNumber = number*number;
    doubleNumbers.push(doubleNumber);
}
console.log(doubleNumbers) */


function doubleIt (num) {
    return num*2
}
const result = numbers.map(doubleIt);
console.log(result);



const double2 = num => num*num;
const result2 = numbers.map(double2);
console.log(result2);


const output1 = numbers.map(n => n*n*n);
console.log(output1);

const halves = numbers.map(n => n/2);
console.log(halves);


const friends = ['Tom', 'John', 'Micheal', 'Oliver'];
const lengths = friends.map(f => f.length);
console.log(lengths);

const firstCharacter = friends.map(friend => friend[0]);
console.log(firstCharacter);

const fruits = ['mango','banana', 'orange', 'apple'];

const fruitsName = fruits.map((name, index, arr) => {
    console.log(name, index, arr);
})



