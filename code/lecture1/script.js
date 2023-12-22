// let a = 2;
// let b = "hello i am robin";
// let c = true;
// let d = null;
// let e;
// let f = BigInt(560);
// //console.log(a, b, c, d, e, f);
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));
// console.log(typeof(f));

// let a = 9;
// let b = 3;
// console.log(a + b);
// console.log(a - b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// console.log(10 < 30);
// console.log(10 > 30);
// console.log(10 <= 30);
// console.log(10 >= 30);
// console.log(10 == 30);
// console.log(10 != 30);

// console.log(10 < 20 && 20 < 30);
// console.log(10 > 20 && 40 < 100);

// console.log(10 < 20  ||  20 < 30);
// console.log(10 > 20 ||  40 < 100);

// let a = 10;
// console.log(!a);

// let age = 70;
// if(age < 18){
//     console.log("You are not eligable for voting");
// }
// else if(age > 60){
//     console.log("not eligable for voting");
// }
// else{
//     console.log("eligable for voting");
// }

let whether = "cloudy";
switch (whether) {
    case "rainy":
        console.log("You need a raincoat");
        break;
        case "cloudy":
            console.log("it might be cold, you need a jacket");
            break;
            case "sunny":
                console.log("Go freely");
                break;
    default:
        console.log("no need of rain coat");
        break;
}

let x = (5<3) ? "yes" : "no";
console.log(x);

let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }
do{
    console.log(i);
    i++;
}
while(i <= 5);