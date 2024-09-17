var obj ={
    usrnm:"sdfdgqq",
    age:26,
    address:'kobry-elkoba'
}


var obj_handler={

    get:function(target,propName){
        if(propName=='usrnm'){
            if(typeof(target[propName])=='string'&&target[propName].length==7){
                return target[propName]
            }else{
                 throw 'error username is not string or greater than 7char..'
            }
        }else if(propName=='age'){
            if(typeof(target[propName])=='number'&&target[propName]>25&&target[propName]<60){
                return target[propName]
            }else{
                 throw 'error age is not numerical or not in range[25--60]..'
            }
        }else if(propName=='address'){
            if(typeof(target[propName])=='string'){
                return target[propName]
            }else{
                 throw 'error address is not string..'
            }
        }else{
            throw 'error non-existing property'
        }
    },
    set:function(target,propName,value){
        if(propName=='usrnm'){
            if(typeof(value)=='string'&&value.length==7){
                 target[propName] = value
            }else{
                 throw 'error username is not string or greater than 7char..'
            }
        }else if(propName=='age'){
            if(typeof(value=='number')&&value>25&&value<60){
                 target[propName] = value
            }else{
                 throw 'error age is not numerical or not in range[25--60]..'
            }
        }else if(propName=='address'){
            if(typeof(value)=='string'){
                 target[propName] = value
            }else{
                 throw 'error address is not string..'
            }
        }else{
            throw 'error non-existing property'
        }
    }
}


var proxy1 = new Proxy(obj,obj_handler)