var pfile

// construct label..
var lbl = document.createElement('label')
lbl.innerHTML = 'Band : '
document.body.appendChild(lbl)



// construct selection..
var sel = document.createElement('select')
sel.ariaPlaceholder='please select..'
document.body.appendChild(sel)
sel.onchange = function(){
    for(elem in sel2.options){
    sel2.options.remove(elem)}
    var opt1 = document.createElement('option')
    sel2.appendChild(opt1)
    for(var i=0;i<pfile[sel.value].length;i++){
        var opt = document.createElement('option')
        opt.innerHTML = pfile[sel.value][i].name
        sel2.appendChild(opt)
    }
}






// construct label..
var lbl2 = document.createElement('label')
lbl2.innerHTML = 'Artist : '
document.body.appendChild(lbl2)



// construct selection..
var sel2 = document.createElement('select')
sel2.ariaPlaceholder='please select..'
document.body.appendChild(sel2)
sel2.onchange = function(){
    window.location.href =pfile[sel.value][sel2.selectedIndex-1].value
}





var jsonfile = new XMLHttpRequest()
jsonfile.onreadystatechange = function(){

    if(jsonfile.readyState==4){
        if(jsonfile.status>=200&&jsonfile.status<300){
            pfile = JSON.parse(jsonfile.responseText)
            var opt1 = document.createElement('option')
            sel.appendChild(opt1)
            for(elem in pfile){
                var opt = document.createElement('option')
                opt.innerHTML = elem
                sel.appendChild(opt)
            }

        }
    }
}


// construct button..
var btn = document.createElement('button')
btn.innerHTML='open file'
document.body.appendChild(btn)
btn.onclick = function(){
    for(elem in sel.options){
        sel.options.remove(elem)}
    jsonfile.open('get','../rockbands.json')
    jsonfile.send()
}




