// map Method
const students = ['Rakib', 'sagor', 'soikut', 'shivo', 'rony', 'dipongkar'];
students.map(student => console.log(`Welcome ${student}`));

// for of loop

for (item of students) {
    console.log(`This is My students Array Items ${item}`)
}

// Find Method 
const players = ['sakib', 'Tamim', 'Mushfiq', 'Liton']
const playerName = 'Sakib'
const currentPlayer = players.find(player => player.toLowerCase() === playerName.toLowerCase())
console.log(currentPlayer);

// push method

const evenNumber = []
const addEvenNumberToArray = (number) => {
    // for loop
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            evenNumber.push(i)
        }
    }
}
addEvenNumberToArray(100)
console.log(evenNumber);

// fillter method
const mobiles = [
    { name: 'iphone', price: 120000 },
    { name: 'samsung', price: 12000 },
    { name: 'RealMe', price: 15000 },
    { name: 'Nokia', price: 25000 }
]

const lowPricePhone = mobiles.filter(mobile => mobile.price < 20000)
console.log(lowPricePhone)
// for in loop
for (i in mobiles) {
    console.log(mobiles[i])
}

// for loop 
for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// Slice Method 
const myNumbers = [20, 40, 60, 80, 55, 70];
const result = myNumbers.slice(0, 4);
console.log(result)

// reverse Method
const myReversNumbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const formalyNumbers = myReversNumbers.reverse()
console.log(formalyNumbers)

// forEach() Method
const myAllNumbers = [10, 40, 10, 30, 40, 60];
myAllNumbers.forEach(number => console.log(number))

// Conaction two array usign by spreed
const myStudents = ['rakib', 'nirob', 'akash'];
const addSomeStudent = [...myStudents, 'Sagor', 'Jahid'];
console.log(myStudents, addSomeStudent)

// mergening two object spread operator

const myPlayers = ['sakib', 'Tamim', 'Liton'];
const addSomePlayers = [...myPlayers, 'Shoriful', 'Taskin']
console.log(myPlayers, addSomePlayers);

// push() pop() shift() unShift()
const myArray = [1, 2, 4, 2]
myArray.push(10);
myArray.pop();
myArray.unshift(50);
myArray.shift();
