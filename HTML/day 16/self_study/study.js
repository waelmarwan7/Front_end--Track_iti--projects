var obj ={
    usrnm:"sdfdgqq",
    age:26,
    address:'kobry-elkoba'
}


var obj_handler={

    apply: function (target, argumentsList) {
        console.log(`Calculate sum: ${argumentsList}`);
    
        return target(argumentsList[0], argumentsList[1]) * 10;
      },

    get:function(target,propName){
        if(propName=='usrnm'){
            if(typeof(target[propName])=='string'&&target[propName].length==7){
                return target[propName]
            }else{
                 throw 'error username is not string or greater than 7char..'
            }
        }
    },
    set:function(target,propName,value){
        if(propName=='usrnm'){
            if(typeof(value)=='string'&&value.length==7){
                 target[propName] = value
            }else{
                 throw 'error username is not string or greater than 7char..'
            }
        }
    }
}


var proxy1 = new Proxy(obj,obj_handler)