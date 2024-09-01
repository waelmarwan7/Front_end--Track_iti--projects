var canvas = document.getElementById('mycanvas')
var context = canvas.getContext('2d')
var point_x =200;


// ray..
var ray = context.createLinearGradient(550,500,750,300)
ray.addColorStop(0,'red')
ray.addColorStop(0.95,'orange')
ray.addColorStop(1,'yellow')


var bkGround = new Image();
bkGround.src = '../pic/Screenshot 2024-08-27 165104.png';
bkGround.onload = function(){
context.drawImage(bkGround,0,0,1500,900);   
}


var fighter = new Image();
fighter.src = '../pic/Screenshot 2024-08-29 092223.png';
fighter.onload = function(){
context.drawImage(fighter,0,0,200,200);   
}


var moon = new Image();
moon.src = '../pic/Screenshot 2024-08-29 091250.png';
moon.onload = function(){
context.drawImage(moon,1350,750,150,150);   
}




context.beginPath()
context.strokeStyle =ray
context.lineWidth = 20
context.moveTo(200,200)
var line=setInterval(function(){
    if(point_x>1370){
        context.clearRect(1350, 750, canvas.width, canvas.height);
        moon.src = '../pic/moon.png';
        clearInterval(line);
        alert('moon destroyed..XD')
        
    }else{
    context.lineTo(point_x,(3/5*point_x))
    context.stroke()
    point_x+=10
    }
},20)



