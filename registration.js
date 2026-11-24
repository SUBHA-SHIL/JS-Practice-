const user = {
    name: "Rahul",
    age: 25,
    isLoggedIn: true,
    isPremium: true,
    isBlocked: false,
    emailVerified: true
};

if (user.isLoggedIn && user.isPremium && !user.isBlocked && user.emailVerified) {
    console.log("Premium Access granted")
}
else
    console.log("Access denied")