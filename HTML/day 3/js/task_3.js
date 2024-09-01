var x= prompt('Enter your Example:')
var y= confirm('are you sure,dont edit it')
if(!y){
    x.toUpperCase();
}
 var z=x.split('').reduce((acc, char) => char + acc, '');
if((x.localeCompare(z)==0)){
    document.write('<h1>congrats, its a palindrome..</h1>');}
else{
    document.write('<h1>unfortunitly, itsnot a palindrome..</h1>');
}
