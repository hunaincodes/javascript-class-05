// // // For Loops


// // // console.log("javascript");
// // // console.log("javascript");
// // // console.log("javascript");
// // // console.log("javascript");
// // // console.log("javascript");


// // for (let count = 1; count <=5; count++) {
// //     console.log("HTMl");
// // }

// // for (let count = 1; count <=40; count++){
// //     console.log("CSS");
// // }

// // for (let count = 1; count <= 100; count++) {
// //     console.log("Javascript");
// // }

// // console.log("loop has ended");

// // // Calculate sum of 1 to 5

// // // let sum = 0;
// // // for (let i = 1; i <= 5; i++) {
// // //     sum = sum + i;
// // // }

// // // console.log("sum = ", sum);

// // // Calculate sum 1 to 6

// // // let sum = 0;
// // // for (let i = 1; i <=6; i++) {
// // //     sum = sum + i;
// // // }

// // // console.log("sum = ", sum);

// // // Calculate 1 to 7

// // // let sum = 0;
// // // for (let i = 1; i <= 7; i++) {
// // //     sum = sum + i;
// // // }

// // // console.log("sum = ", sum);

// // let sum = 0;
// // let n = 10;
// // for (let i = 1; i <= n; i++) {
// //     sum = sum + i;
// // }

// // console.log("sum = ", sum);



// // for(let i = 1; i <= 5; i++) {
// //     console.log("i =", i);
// // }


// // // While Loops

// // // let i = 1;
// // // while (i <= 100) {
// // //     console.log("Muhammad Hunain");
// // //     i++;
// // // }

// // //  do-While Loops
// // let i = 20;
// // do {
// //     console.log("Javascript");
// //     i++;
// // } while (i <= 25);





// // Parctice Qs1
// // Print all Numbers

// // 0 to 100

// for (let count = 0; count<=100; count++) {
//     console.log("count= ", count);
// }

// // 50 tto 70

// for (let num = 50; num<= 70; num++) {
//     console.log("num =", num);
// }

// //  Print all even num 0 to 100

// for (let data = 0; data <= 100; data++) {
//     if(data%2 === 0) { 
//         console.log("data =", data);
//     }
// }


// // Print all odd num 0 to 100

// for (let odd = 0; odd <= 100; odd++) {
//     if(odd%3 === 0) {
//         console.log("odd =", odd);
//     }
// }


// var cities = ['Karachi', "lahore", "pindi", "multan"]
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[2]);
// console.log(cities[3]);

// console.log(cities.length);


// var cities = ['Karachi', "lahore", "pindi", "multan","abc"]

// for(var i = 0; i < cities.length; i++){
//     console.log(cities[i]);
// }

// var customers = ["Khalid", "Subhan", "Aliyan", "Hamza",]

// for (var i = 0; i < customers.length; i++) {
//     console.log(customers[i]);
// }

var cities = ['Karachi', "lahore", "pindi", "multan"]
var visitor = prompt("Enter your city ")
var found = false


for (var i = 0; i < cities.length; i++) {
    // console.log(cities[i]);    
    if (cities[i] == visitor) {
        found = true
        break;
    }
}

if(found){
    console.log("Welcome!");
} else {
    console.log("Try Again!");
}

