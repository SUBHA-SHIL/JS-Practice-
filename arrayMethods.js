const users = [
    { id: 1, name: "Rahul", age: 25, isActive: true, role: "admin" },
    { id: 2, name: "Amit", age: 17, isActive: false, role: "user" },
    { id: 3, name: "Ravi", age: 35, isActive: true, role: "user" },
    { id: 4, name: "Sam", age: 22, isActive: false, role: "user" },
    { id: 5, name: "John", age: 28, isActive: true, role: "admin" }
];

const allNames = users.map(user => user.name)
console.log("All names: ", allNames);

const allIds = users.map(user => user.id);
console.log("All user Ids: ", allIds);

const activeUsers = users.filter(user => user.isActive);
console.log("All active users: ", activeUsers);

const adults = users.filter(user => user.age >= 18);
console.log("All adults: ", adults);

const admins = users.filter(user => user.role === 'admin');
console.log("All admins: ", admins);

const activeUsersName = users
    .filter(user => user.isActive)
    .map(user => user.name);
console.log("Names of all active users: ", activeUsersName);