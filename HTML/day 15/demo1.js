function* evengen(arr){
    for(var elem in arr){
        if(arr[elem]%2==0){
         yield arr[elem]
    }
}
}


arr1 = [0,1,2,3,4,5,6,7,8,9]
const generator = evengen(arr1);
console.log(generator.next().value);
