// let str = "Geekster";
// let arr = str.split("");
// console.log(arr);
// arr.join("");
// console.log(arr);

//let arr = [1, 2, 3, 4, 5];
// let ans = arr.shift()
// console.log(ans);
// console.log(arr);
// arr.unshift(100);
// console.log(arr);
// delete arr[3];
// console.log(arr);
// let arr2 = [6, 7, 8, 9, 0];
// let arr3 = arr.concat(arr2);
// console.log(arr3);
// let arr = [1, 432, 124, 5, 90];
// arr.sort()
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// arr.splice(2, 5, 20, 30, 40, 50);
// console.log(arr);

// let arr = [4, 56, 78, 653, 4, 3546, 2];
// console.log(arr.slice(0, 4));

// 

// let str1 = 'Robin singh';
// let str2 = "Robin Singh SDE";
// let str3 = `Robin Singh your Software Developer`;
// console.log(str1 + str2);
// console.log(str3);

// let str1 = "robin";
// let str2 = "sandeep";
// console.log(`${str1} is a friend of ${str2}`);

// let str1 = "robin singh \t SDE";
// let str2 = "Your \n Software Developer";
// console.log(str1);
// console.log(str2);

// let str1 = "hello robin";
// // str1[0] = "a";
// // console.log(str1);
// let str2 = "Hello robin";
// console.log(str1 == str2);

//let str1 = "hello I am Robin Singh";
// console.log(str1.length);
// console.log(str1.charAt(4));
// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());
// console.log(str1.replace("hello", "hey"));
// console.log(str1.concat("from Geekster"));
// console.log(str1.trim());
// console.log(str1.includes("Robin"));
// console.log(str1.search("Robin"));
// console.log(str1.slice(0, 2));
// console.log(str1.substring(0,2));
// console.log(str1.substr(0,5));
// console.log(str1.split());
// console.log(typeof String(str1));
// console.log(str1.startsWith("hello"));
// console.log(str1.endsWith("singh"));

// let student = {
//     name: "Robin Singh",
//     CN: "CU",
//     marks: 100,
//     age: 23,
//     isStudent: true,
//     198: "it is Present"
// }

// console.log(student.name);
// console.log(student.isStudent);
// console.log(typeof student);

// console.log(student.rollno);
// student.rollno = 20;
// console.log(student);
// student.age = 29;
// console.log(student);

// console.log(student["198"]);
// console.log(delete student["198"]);
// console.log(student);

// for(let prop in student){
//     console.log(prop);
// }

// let keys = Object.keys(student);
// console.log(keys);

// let keys = Object.getOwnPropertyNames(student);
// console.log(keys);
// let student = {
//     aaksh: "helloworld",
//     rn: 12,
//     cn: 'DTU',
//     address: {
//         city: "Mumbai",
//         State: "Maharstra"
//     }
// }

// console.log(student.address.city);

// let company = {
//     name: "Geekster",
//     address:{
//         street: "12 open end",
//         city: "Gurugram"
//     },
//     learning: {
//         noOfEmployes: 10,
//         boys: 7,
//         girls: 4,
//         hiring: 20,
//         placement: {
//             noOfEmployes: 5,
//             company: "amazon",
//             Remainingstudents : 40,
//             student: {
//                 name: "xyz",
//                 batchManager: "kjsd",
//                 EducatorName:"Bitto"
//             }
//         }
//     }
// }

// console.log(company.learning.placement.student.EducatorName);

let arr = [1, 2, 3, 4, 5, 6];
let obj = {
    name: "Robin Singh",
    Position: "SDE"
}

console.log(typeof arr);
console.log(typeof obj);