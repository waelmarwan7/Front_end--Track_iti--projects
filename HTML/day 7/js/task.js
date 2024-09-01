var errcounter=false
//const rgex =  /(+|-|*|\/)/

// functions of calc...
function EnterNumber(val){

    document.getElementById('ans').value +=val
    errcounter=false

}


function EnterOperator(val){
    
    if(document.getElementById('ans').value==''|| errcounter==true){
        alert('Invalid...')
    }
    else{
        document.getElementById('ans').value +=val
        errcounter=true
    }
}


function EnterClear(){

    document.getElementById('ans').value =''

}

function EnterEqual(){
    result=0;
    result= eval(document.getElementById('ans').value)
    document.getElementById('ans').value+='='
  
   document.getElementById('ans').value += result;


}
