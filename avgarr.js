//Average an array OPTION 1 //

var arr = [1,44,66,22,515,645,23]
var sum = arr.reduce(function(a,b){ return a + b })
var avg = sum / arr.length
   console.log(sum)
   console.log(avg)


   // OPTION 2 //

   var numbers = [1,44,66,22,515,645,23]
   var total = 0

   for(var index = 0; index < numbers.length; index++){
     // SYNTATIC SUGAR // = (var index in number) = this replaces above
     total += numbers[index]
   }
   var avg2 = total/numbers.length
   avg2 = avg2.toFixed(2)
   console.log(avg2)
