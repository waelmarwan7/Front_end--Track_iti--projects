
var arr1 =[1,2,3,4]
var arr2 =[5,6,8,9]

function swap(arrayA, arrayB) {

    if (arrayA.length !== arrayB.length) {
        return false;
    }

    for (let i = 0; i < arrayA.length; i++) {
        [arrayA[i], arrayB[i]] = [arrayB[i], arrayA[i]];
    }

    return true;
}
console.log('-----------------------------TASK 1--------------------------------------------------')
console.log(`before Array 1: ${arr1}`)
console.log(`before Array 2: ${arr2}`)
let result = swap(arr1, arr2);
if (result) {
    console.log("after................")
    console.log(`Array 1: ${arr1}`); 
    console.log(`Array 2: ${arr2}`);
}
else {
    console.log("The length of an array must be the same");
}






console.log('-----------------------------TASK 2--------------------------------------------------')
function max_min(...w){
    return   [ Math.min(...w), Math.max(...w)] 

}

let[min,max] =max_min(1,2,6,5,7);
console.log(`min:${min} And max:${max}`);






console.log('-----------------------------TASK 3--------------------------------------------------')
var fruits = ["apple", "strawberry", "banana", "orange",
    "mango"];
if(fruits.every((num) => typeof(num)==='string')){
    console.log('this array contains only strings..')
}


if(fruits.some((num) => num.startsWith('a'))){
    console.log(`this array contains string start with a`)
}

let str1 =fruits.filter((num) => num.startsWith('s')|| num.startsWith('b'))
str1.forEach(val => console.log(val))

let str2 = fruits.map((num) => {
    return "i like " + num
    });
str2.forEach(num => console.log(num))

















