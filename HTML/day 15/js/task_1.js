function* fabonicci1(num){
    let [a,b] = [0,1]
    for(var i=0;i<num;i++){
        yield a;
        [a,b]=[b,a+b]
    }
}
function* fabonicci2(num){
    let [a,b] = [0,1]
    while(a<=num){
        yield a;
        [a,b]=[b,a+b]
    }
}

console.log('-----------------------task 1------------------------')
const fib1 = fabonicci1(5)
const  fib2 = fabonicci2(15);

for(let elem of fib1){
    console.log(elem)
}
console.log('-------second fn----------------')
for(let elem of fib2){
    console.log(elem)
}








console.log('-----------------------task 2------------------------')



obj = {
    username : 'marwan',
    age : 25,
    skills : ['football','basketball','tennis'],

    [Symbol.replace]:(str)=>{
       return str.slice(0,15)
    },


        [Symbol.iterator]:function*(){
           let  index =0
           let k = Object.keys(this)
           let val = Object.values(this)
           for(;index<k.length;index++){
            if(index<k.length){
            yield {
                        value:val[index],
                        key:k[index],
                        done:false,
            }
        }
            else{
                yield {
                    value:undefined,
                    key:undefined,
                    done:true,
                }
    
            }
        }
    
}

}

str1 = 'xjbzvnnvkizndpnpizndbndzn'
console.log(str1.replace(obj))


console.log('------------------task 3--------------------------')
   for(var {value:x,key:y,done:z} of obj){
     console.log(`${y}:${x}`)
    }




