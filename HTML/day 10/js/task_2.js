var canvas = document.getElementById('mycanvas')
var context = canvas.getContext('2d')


// draw the sun..
var sun = context.createRadialGradient(550,500,30,750,400,300)
sun.addColorStop(0,'blue')
sun.addColorStop(1,'white')
context.fillStyle =sun
context.arc(750,400,200,0*Math.PI,2*Math.PI,true)
context.fill()
context.stroke()

// draw the sun..
context.beginPath()
var sun1 = context.createRadialGradient(600,300,100,680,400,250)
sun1.addColorStop(0,'blue')
sun1.addColorStop(1,'white')
context.fillStyle =sun1
context.arc(750,400,150,0*Math.PI,2*Math.PI,true)
context.fill()
context.stroke()

// TEXT...
context.beginPath()
 context.font = "200pt Verdana"
 context.fillStyle='white'
 context.fillText("M", 640, 490);


