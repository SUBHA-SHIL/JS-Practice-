const user = {
    name: "Rahul",
    role: "admin",
    isLoggedIn: true,
    isBlocked: false,
    isEmailVerified: true
};

function accessControl(user) {
    if(!user)
        return "User not found"

    if(!user.isLoggedIn){
        return "Please Login first"
    }
    if(user.isBlocked)
        return "Account blocked"
    if(!user.isEmailVerified)
        return "Verify your email first"
    if(user.role === 'admin')
        return "Welcome Admin"
    if(user.role === "user")
        return "Welcome User"

    const allowedRoles = ["admin", "user"];

    if(!allowedRoles.includes(user.role))
        return "Invalid role"

}
console.log(accessControl(user))
