
var stopid =0
var counterpic = 0

stopid = setInterval(function(){
    document.images[counterpic].src = '../pic/Screenshot 2024-08-22 144847.png'
    if(counterpic==0){
        document.images[document.images.length-1].src = '../pic/Screenshot 2024-08-22 144814.png'
    }else{
    document.images[(counterpic-1)%document.images.length].src = '../pic/Screenshot 2024-08-22 144814.png'
    }
   counterpic = (counterpic+1)%document.images.length

},1000)




for(i=0;i<document.images.length;i++){

        document.images[i].onmouseover = function(){
        
            clearInterval(stopid);

        }

        document.images[i].onmouseleave = function(){
            stopid = setInterval(function(){
                document.images[counterpic].src = '../pic/Screenshot 2024-08-22 144847.png'
                if(counterpic==0){
                    document.images[document.images.length-1].src = '../pic/Screenshot 2024-08-22 144814.png'
                }else{
                document.images[(counterpic-1)%document.images.length].src = '../pic/Screenshot 2024-08-22 144814.png'
                }
            counterpic = (counterpic+1)%document.images.length
            
            },1000)
            

        }
}