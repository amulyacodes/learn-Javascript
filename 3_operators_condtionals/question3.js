// 3. Using Switch Statement Check number is divisible by 5 and 15


const num = 33;

switch(true){
    case (num % 5 ==0) && (num % 15 ==0):
        console.log("number divisible by 5 and 15");
        break;
    default:
        console.log("not divsible");
        break;
} 