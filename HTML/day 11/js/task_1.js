var canvas = document.getElementsByTagName('canvas')[0]
var context = canvas.getContext('2d')
var video = document.getElementsByTagName('video')[0]



// when playing video it processing frames in canvas window by 30fps....
video.onplay = function(){
var Vtimer =setInterval(() => {
        if(video.paused ){
            return;
        }else if( video.ended){
            clearInterval(Vtimer);
        }else{
            context.reset();
            // image frame..
            context.drawImage(video,0,0,900,500);
            // TEXT...
            context.beginPath()
            context.font = "50pt Verdana"
            context.fillStyle='green'
            context.fillText("Recitation of surah al mulk..",10,450);
        }
    },30);

}





