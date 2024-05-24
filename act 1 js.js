let initpassword = "12345678";
let password = initpassword.length;

if(password===8) {
    console.log("welcome",password)
}
else if (password<=8) {
    console.log("password is to short",password)
}
else if (password>=8) {
    console.log("too long password",password)
    console.log("should be 8 character",password)
}
else{
    console.log("please provide a password")
}

let fruits = "Banana";
switch (fruits) {
    case "Banana":
        console.log("Banana is good")
        break;
    case "saging":
        console.log("saging is good")
        break;
    case "saba":
            console.log("saba is good")
            break;
    case "lakatan":
        console.log("lakatan is good")
        break;
}