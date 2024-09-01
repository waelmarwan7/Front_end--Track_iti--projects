var counter =0
var arrpictures = ['../pic/Screenshot (404).png','../pic/Screenshot (397).png','../pic/Screenshot (396).png','../pic/Screenshot (398).png']
var stopid =0


document.getElementById('1').onclick = function(){
    counter++;
    if(counter<arrpictures.length){
        document.getElementById('4').disabled = false   
         document.images[0].src = arrpictures[counter]
    }else{
        this.disabled = true
        counter--;
    }
}
document.getElementById('2').onclick = function(){
     stopid = setInterval(function(){
        document.images[0].src = arrpictures[counter]
        counter = (counter+1)%arrpictures.length;
        document.getElementById('4').disabled = false
        document.getElementById('1').disabled = false 
    },1000)

}
document.getElementById('3').onclick = function(){
        clearInterval(stopid);

}
document.getElementById('4').onclick = function(){
    counter--;
    if(!(counter<0)){
        document.getElementById('1').disabled = false 
        document.images[0].src = arrpictures[counter]
    }else{
        this.disabled = true
        counter++;
    }

}
