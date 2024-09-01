var videosarr = ['../videos/big_buck_bunny.mp4',"../videos/frozen.mp4"]
var counter=0




// play button.
document.querySelector('input[type=button]').onclick=function(){

    document.getElementsByTagName('video')[0].play();

}
// pause button.
document.querySelectorAll('input[type=button]')[1].onclick=function(){

    document.getElementsByTagName('video')[0].pause();
}
// foreward button.
document.querySelectorAll('input[type=button]')[2].onclick=function(){

    document.getElementsByTagName('video')[0].currentTime-=5
}
// backward button.
document.querySelectorAll('input[type=button]')[3].onclick=function(){

    document.getElementsByTagName('video')[0].currentTime+=5;
}
// mute button.
document.querySelectorAll('input[type=button]')[4].onclick=function(){

    document.getElementsByTagName('video')[0].muted=true;
    document.getElementsByTagName('input')[5].value=0

}
// maximize button.
document.querySelectorAll('input[type=button]')[5].onclick=function(){

    document.getElementsByTagName('video')[0].width=1000
    document.getElementsByTagName('video')[0].height=700
    document.getElementsByTagName('form')[0].width=800
    document.getElementsByTagName('form')[0].height=600

}
// minimize button.
document.querySelectorAll('input[type=button]')[6].onclick=function(){

    document.getElementsByTagName('video')[0].width=450
    document.getElementsByTagName('video')[0].height=280

}
// next button.
document.querySelectorAll('input[type=button]')[7].onclick=function(){

    document.getElementsByTagName('video')[0].src=videosarr[--counter%videosarr.length]
}
// next button.
document.querySelectorAll('input[type=button]')[8].onclick=function(){

    document.getElementsByTagName('video')[0].src= videosarr[++counter%videosarr.length]
}








//time range.
document.querySelectorAll('input[type=range]')[0].onchange=function(){

    document.getElementsByTagName('video')[0].currentTime = this.value
    document.getElementsByTagName('label')[0].innerHTML = document.getElementsByTagName('video')[0].currentTime+'/'+document.getElementsByTagName('video')[0].duration.toFixed(2)

}
//video range.
document.querySelectorAll('video')[0].ontimeupdate=function(){

    document.querySelectorAll('input[type=range]')[0].value =this.currentTime 
    document.getElementsByTagName('label')[0].innerHTML = document.getElementsByTagName('video')[0].currentTime.toFixed(2)+'/'+document.getElementsByTagName('video')[0].duration.toFixed(2)

}
//volume range.
document.querySelectorAll('input[type=range]')[1].onchange=function(){

    document.getElementsByTagName('video')[0].volume = this.value
    document.getElementsByTagName('video')[0].muted=false;

}
//speed range.
document.querySelectorAll('input[type=range]')[2].onchange=function(){

    document.getElementsByTagName('video')[0].playbackRate = this.value
    document.getElementsByTagName('label')[2].innerHTML = this.value

}


















