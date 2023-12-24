// factorial("hello How are you!!!")
// function factorial(passedinfo) {
//    let a = 'Geekster';
//    console.log(a);
//    console.log(passedinfo)
// }

// let arr = [12, 20, true, "geekster", null, undefined,20.34, false];
// console.log(arr);
// console.log(typeof arr);
// console.log(arr[1]);
// console.log(arr[3]);

// arr[1] = "robin";
// console.log(arr);

//toString
// let arr = [12, 20, true, "geekster", null, undefined, 20.34, false];
// console.log(arr.toString());
// console.log(typeof arr.toString());

//join
// let str = "Geekster";
// let arr = str.split("");
// console.log(arr);

//push
//let arr = [1, 2, 3, 4, 5];
// arr.push(8);
// console.log(arr);
// 

// delete arr[3];
// console.log(arr);

//concat
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 0];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

//sort
// let arr = [1, 432, 124, 5, 90];
// arr.sort();
// console.log(arr);

//reverse
// let arr = [1, 2, 3, 4, 5, 6 ,7];
// console.log(arr.reverse());

//splice
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let ans = arr.slice(0,4);
// console.log(typeof ans);

let arr = [1, 2, 3, 4, 5 , 6 , 7];

console.log(arr.some((item) => {
return item%2 == 0;
}))

console.log(arr.every((item) => {
   return item%2 == 0;
}))
