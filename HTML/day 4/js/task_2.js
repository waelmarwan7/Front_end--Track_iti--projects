var arr=[]
arr[0]= prompt('Please enter number1..')
arr[1]= prompt('Please enter number2..')
arr[2]= prompt('Please enter number3..')
arr[3]= prompt('Please enter number3..')
arr[4]= prompt('Please enter number3..')

document.write('<h2>U HAVE ENTERED THE VALUES OF  </h2>'+' = '+arr.toString())
document.write('<br><br><h2>UR BALUES AFTER BEING SORTED DESCENDING  </h2>'+'='+arr.sort(function compareNumbers(a, b) {
    return a - b;
  }
  ))
document.write('<br><br><h2>UR VALUES AFTER BEING SORTED ASCENDING   </h2>'+'= '+arr.sort(function compareNumbers(a, b) {
    return a - b;
  }
  ).reverse())
