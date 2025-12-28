


let userRole = "admin";
let  accesslevel;
let isLoggedIn = true;
let userMessage; 
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

if (userRole === "admin"){
    accesslevel = "Full access granted";
} else if ( userRole === "manager"){
    accesslevel = "limited access granted";

} else {
    accesslevel = "No access granted";


} 


if (isLoggedIn) {
    if (userRole === "admin"){
        userMessage = "Welcome admin";
    }else if ( userRole === "manager"){
        userMessage= "Welcome Manager";

    }else{
        userMessage ="Welcome User";

    }
}else {
    userMessage = "Please log in to access the system";
}

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("Access Level:", accesslevel);
console.log("User Message:",userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);
