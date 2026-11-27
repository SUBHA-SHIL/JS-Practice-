// 1. Callback Functions.
function greet(name, CallbackFunc) {
    console.log("Hello " + name)
    CallbackFunc();
}
function saySomething() {
    console.log("Welcome")
}
greet("Subha", saySomething)

// More
function getUser(callback) {

    const user = {
        name: "Rahul",
        age: 25
    };

    callback(user);
}

getUser(function(user) {
    console.log(user.name);
});