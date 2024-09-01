/*document.cookie = "username=ahmd"
document.cookie = "userage=25"

var arr = []

for (i = 0; i < 2; i++) {
    arr[i] = document.cookie.split(';')[i].split('=')

}*/
const x = /[a-z]|[A-Z]/
var nam = prompt('enter your name')
while(!(x.test(nam))){

    alert('Invalid,please enter char only...')
    nam = prompt('enter your name')
}
document.getElementById('1').innerHTML=nam


const y = /\d{8}/
var telnm = prompt('enter your telephone number')
while(!(y.test(telnm))){

    alert('Invalid,please enter 8 numbers only ...')
    telnm = prompt('enter your telephone number')
}
document.getElementById('2').innerHTML=telnm


const Z = /(010|011|012)\d{8}/
var mobnm = prompt('enter your mobile number')
while(!(Z.test(mobnm))){

    alert('Invalid,please enter number starts with (010,011,012)and of length 11 only...')
    mobnm = prompt('enter your mobile number')
}
document.getElementById('3').innerHTML=mobnm


const l = /([a-z]|[A-Z]){3}@[0-9]{3}.com/
var email = prompt('enter your email')
while(!(l.test(email))){

    alert('Invalid,please enter email as 3char@3num only...')
    email = prompt('enter your email')
}
document.getElementById('4').innerHTML=email






