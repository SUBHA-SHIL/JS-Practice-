const users = [
    { userName: "Rahul", age: 25, isActive: true},
    { userName: "Amit", age: 17, isActive: false},
    { userName: "Ravi", age: 35, isActive: true},
    { userName: "Jhony", age: 32, isActive: true},
    { userName: "Sam", age: 22, isActive: false}
]

console.log("1. Every user's name.")
for(i = 0; i < users.length; i++) {
    console.log(users[i].userName)
}

console.log("2. Users above 18 years.")
for(const user of users) {
    if(user.age >= 18) {
        console.log(user.userName);
    }
}

console.log("3. Active users: ")
for(const user of users) {
    if(user.isActive) {
        console.log(user.userName)
    }
}

console.log("4. Filtering users above 18 years")
const adults = users.filter(user => user.age >= 18)
console.log(adults)

console.log("5. Use map() to create a new array of names only.")
const useNames = users.map(user => user.userName)
console.log(useNames)

console.log("Break statement");
// for ( let i = 1; i <= 10; i++ ) {
//     if(i == 5) {
//         break;
//     };
//     console.log(i)
// }
