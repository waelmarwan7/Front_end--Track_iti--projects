var canvas = document.getElementsByTagName('canvas')[0]
var context = canvas.getContext('2d')



class polygon{
    points = []
    constructor(...p){
        this.points =[...p]
    }


    draw(){
        //gets points x--y seperatly......
        let points_x = []
        let points_y = []
        let z=0
        for(let i=0;i<this.points.length;i++){
            if(i%2==0){
                points_x[i-z]=this.points[i]
                z++;
            }else{
                points_y[i-z]=this.points[i]
            }
        }
        context.beginPath()
        context.strokeStyle ='black'
        context.lineWidth = 2
        context.moveTo(points_x[0],points_y[0])
        for(let i=1;i<points_x.length;i++){
            context.lineTo(points_x[i],points_y[i])

        }
        context.closePath()
        context.stroke()
    }
}


class rectangle extends polygon{

    constructor(l,w,...p){

        super(...p)
        this.length=l
        this.width = w
    }

    area(){
        this.result_area= this.length*this.width;
    }

    toString(){
        this.area();
        console.log(this.result_area);
    }
}

class square extends rectangle{

    constructor(l,...p){

        super(l,l,...p)
        this.length=l
    }

    area(){
        this.result_area= this.length*this.length;
    }

    toString(){
        this.area();
        console.log(this.result_area);
    }
}

class circle extends polygon{

    constructor(r,...p){

        super(...p)
        this.raduis=r
    }

    area(){
        this.result_area= Math.PI*this.raduis*this.raduis;
    }

    toString(){
        this.area();
        console.log(this.result_area);
    }
    draw(){
        context.beginPath()
        context.strokeStyle ='white'
        context.fillStyle ='green'
        context.lineWidth = 5
        context.arc(this.points[0],this.points[1],this.raduis,0*Math.PI,2*Math.PI)
        context.fill()
        context.stroke()
    }
}

class traingle extends polygon{

    constructor(h,b,...p){

        super(...p)
        this.height=h
        this.base = b
    }

    area(){
        this.result_area= 0.5*this.base*this.height;
    }

    toString(){
        this.area();
        console.log(this.result_area);
    }
}







var p1 = new polygon(200,200,300,45,100,100,150,50)
p1.draw()


var c1 = new circle(100,800,400)
c1.draw()