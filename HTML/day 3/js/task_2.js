var result=0;
document.write('<h1>result =</h1>')
do
{
var x= prompt('Enter your number:');
if(isFinite(x)){
    var y=parseInt(x);}
else{
    alert('ERROR please Enter a number.')
    continue;

}
result+=y;
}while(result<100 && x!=0);

document.write('<h1>'+result+'</h1>');