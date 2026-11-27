// 1. Create an array called users.
// 2. Write a function createUser(name, email) that adds a user to the array.
// 3. Write a function getUsers() that returns all users.
// 4. Write a function getUserByEmail(email) that finds a user by email.
// 5. Write a function deleteUser(email) that deletes a user using their email.
// 6. Use arrow functions for at least two of your functions.
// 7. Use a default parameter for a user's role

const users = [];

function createUser(name, email) {
    const user = {
        name,
        email,
        role: "user"
    };
    users.push(user);

    return user;
}

const getUsers = () => {
    return users;
}

function findUserByEmail(email) {
    return users.find(user => user.email === email)  ?? "No user found."
}

const deleteUser = (email) => {
    const index = users.findIndex(user => user.email === email);
    if(index === -1) return false;

    users.splice(index, 1)
    return true;
    
}

createUser("Rahul", "rahul@example.com");
createUser("Amit", "amit@example.com");
createUser("Ravi", "ravi@example.com");
createUser("Sam", "sam@example.com", "admin");

console.log("All users:", getUsers());
console.log("Find Rahul:", findUserByEmail("rahul@example.com"));
console.log("Find Piyal:", findUserByEmail("piyal@example.com"));
console.log("Delete Amit:", deleteUser("amit@example.com"));
console.log("Users after deletion:", getUsers());