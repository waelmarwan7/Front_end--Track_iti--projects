
var canvas = document.getElementById('mycanvas')
var context = canvas.getContext('2d')

//draw the sky and the grace...
var court = context.createLinearGradient(0,0,0,400)
court.addColorStop(0,'aqua')
court.addColorStop(0.7,'white')
court.addColorStop(1,'green')
context.fillStyle =court
context.fillRect(0,0,1500,800)


// draw the sun..
var sun = context.createRadialGradient(0,0,0,0,0,100)
sun.addColorStop(0,'red')
sun.addColorStop(1,'yellow')
context.fillStyle =sun
context.arc(10,10,100,0*Math.PI,2*Math.PI,true)
context.fill()
context.stroke()


// draw goal..
context.beginPath()
context.strokeStyle ='black'
context.lineWidth = 10
context.moveTo(600,275)
context.lineTo(900,275)
context.lineTo(900,375)
context.moveTo(600,275)
context.lineTo(600,375)
context.stroke()
context.beginPath()
context.strokeStyle ='white'
context.lineWidth = 5
context.moveTo(0,375)
context.lineTo(1500,375)
context.stroke()

// draw court..
context.beginPath()
context.strokeStyle ='white'
context.fillStyle ='green'
context.lineWidth = 5
context.arc(750,475,150,0*Math.PI,1*Math.PI)
context.fill()
context.stroke()


context.beginPath()
context.strokeStyle ='white'
context.lineWidth = 5
context.moveTo(500,475)
context.lineTo(1000,475)
context.lineTo(1000,375)
context.moveTo(500,475)
context.lineTo(500,375)
context.stroke()



// draw the ball...
context.beginPath()
context.strokeStyle ='black'
context.fillStyle ='white'
context.lineWidth = 3
context.translate(25,75)
context.arc(700,650,60,0*Math.PI,2*Math.PI,true)
context.fill()
context.stroke()

context.beginPath()
context.strokeStyle ='black'
context.fillStyle ='black'
context.lineWidth = 1
context.arc(700,650,15,0*Math.PI,2*Math.PI,true)
context.fill()
context.stroke()

context.beginPath()
context.strokeStyle ='black'
context.fillStyle ='black'
context.lineWidth = 1
context.arc(750,670,15,0.5*Math.PI,1.7*Math.PI)
context.fill()
context.stroke()

context.beginPath()
context.strokeStyle ='black'
context.fillStyle ='black'
context.lineWidth = 1
context.arc(700,710,15,0*Math.PI,1*Math.PI,true)
context.fill()
context.stroke()

context.beginPath()
context.strokeStyle ='black'
context.fillStyle ='black'
context.lineWidth = 1
context.arc(650,670,15,0.5*Math.PI,1.2*Math.PI,true)
context.fill()
context.stroke()

context.beginPath()
context.strokeStyle ='black'
context.fillStyle ='black'
context.lineWidth = 1
context.arc(670,610,15,1.5*Math.PI,1*Math.PI)
context.fill()
context.stroke()

context.beginPath()
context.strokeStyle ='black'
context.fillStyle ='black'
context.lineWidth = 1
context.arc(730,600,15,0.2*Math.PI,1.2*Math.PI)
context.fill()
context.stroke()




