i=0
function openWindow(){
    win = open('testpage.html','_blank',"width=300,height=300")
}

function moveWindow(){
    win.moveBy(10,10)
    win.resizeTo(300,300)
    win.focus()
}


function graphicmove(){
    win.setInterval(function(){
             moveWindow();
          },1000)
}

function stopfunction(){
   win.close()
}

function showtext(){
    win.setInterval(function(){
        win.focus()
        var str='hello wooorld my world';
        if(i>=str.length){win.close()}
        win.document.write('<b>'+str[i]+'</b>')
        i++
    },2000)
}

function scroll1(){
    win.setInterval(function(){
        win.focus()
        win.scrollBy(0,10)
    },200)
}