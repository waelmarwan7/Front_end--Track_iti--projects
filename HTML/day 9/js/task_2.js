

document.getElementsByTagName('input')[0].onchange = function(){
    document.getElementsByTagName('h1')[3].style.color=`rgb(${this.value},${document.getElementsByTagName('input')[1].value},${document.getElementsByTagName('input')[2].value})`
}

document.getElementsByTagName('input')[1].onchange = function(){
    document.getElementsByTagName('h1')[3].style.color=`rgb(${document.getElementsByTagName('input')[0].value},${this.value},${document.getElementsByTagName('input')[2].value})`
}

document.getElementsByTagName('input')[2].onchange = function(){
    document.getElementsByTagName('h1')[3].style.color=`rgb(${document.getElementsByTagName('input')[0].value},${document.getElementsByTagName('input')[1].value},${this.value})`
}