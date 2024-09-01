var arr=[]
arr[0]= prompt('Please enter number1..')
arr[1]= prompt('Please enter number2..')
arr[2]= prompt('Please enter number3..')

document.write('<h2>sum of 3 values  </h2>'+arr.join('+')+'= '+(arr[0]+arr[1]+arr[2]))
document.write('<br><br><h2>multiply of 3 values  </h2>'+arr.join('*')+'= '+(arr[0]*arr[1]*arr[2]))
document.write('<br><br><h2>divide of 3 values  </h2>'+arr.join('/')+'= '+(arr[0]/arr[1]/arr[2]))

