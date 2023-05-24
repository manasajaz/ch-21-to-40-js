///////ch 21//////

// userInput = "ANAS";
// var allLower = userInput.toLowerCase();
// console.log(allLower)

// var arr = ["anas"]
// var a = arr[0].toUpperCase();
// console.log(a)
// var cityName = "kaRacHi";

// var a = cityName.slice(0,1)
// var b = cityName.slice(1)
// var rslt = a.toUpperCase()+b.toLowerCase()
// console.log(rslt)

///////ch 22 to 25//////

// var str = "hello world";
// var rslt  = str.indexOf("world")
// console.log(rslt)

// var animal = "elephant"
// var seg = animal.slice(2,6)
// console.log(seg)

// var a = "anas";
// var b = a.indexOf("s")
// console.log(b)

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx)

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx)

// var alpha = "abcd"
// var rslt = alpha.charAt(2)
// console.log(rslt)
// var cha = "abcdefghijklmno"
// var a= cha.lastIndexOf("o")
// console.log(a)
// var rslt = cha.charAt(14)
// console.log(rslt)

// var cha = "anasajaz"
// if(cha.charAt(3)=="s"){
// alert("its true")
// }
// else{
//     alert("its false")
// // }

// str = "I have 1 apple and 1 orange."
// newStr = str.replace("1", "one")
// console.log(newStr)

// var x = "This is an example statement.";
// var y = x.replace(/a/g,"b");
// console.log(y)

///////ch 26//////

// var a = 12.8
// console.log(Math.round(a));

// var a = 12.9
// console.log(Math.floor(a));

// var number = 0.5;
// var roundedNumber = Math.round(number);
// console.log(roundedNumber)

///////ch 27//////

// var num = Math.random()*50
// console.log(num)

// var num = Math.round(Math.random()*6)
// console.log(num)

///////ch 28,29//////

// var a = 123;
//  var b = a.toString()
//  console.log(typeof(b))

// var stringNumber = "3.14";
// var floatNumber = parseFloat(stringNumber);
// console.log(typeof (floatNumber));

// var decimal = "2.23"
// var integer = +parseInt(decimal);
// console.log(integer);

///////ch 30//////

// var num = 3.141592653589793;
// var newNum = num.toFixed(4);
// console.log(newNum);

// var a= 3.22366
// alert( a.toFixed(2))

///////ch 31to 34//////

// var dobj = new Date()
//  var a = dobj.getDate()
//  console.log(a)

// var d = new Date()
// var day = d.getDay()
// console.log(d)

// var dayarr = ["monday","tue","wed","thr","friday","saturday","sunday"]
// let d = new Date();
// let day = d.getDay()
// console.log(dayarr[day-1])

// let d = new Date();
// let day = d.getTime()
// var rslt = day/(1000*60*60*24*365)
// console.log(Math.round( rslt))

// let d = new Date();
// let date = d.setDate(30)
// let month = d.setMonth(12-1)
// let year = d.setFullYear(2020)
// console.log(d)

// var date = new Date();
// var beginningdate = new Date(0, 5, 1980);
// var calc = date - beginningdate;
// alert(calc)

// var date = new Date();
// var year = date.setFullYear(2022)
// console.log(year)

// function changeminute(){
// var m = prompt("enter minute")
// var d =new Date()
// d.setMinutes(m)
// console.log(d)
// }
// changeminute()

// var date = new Date();

// var dob = new Date();
// dob.setDate(30)
// dob.setMonth(9-1)
// dob.setFullYear(2001)

// var calc = date.getTime() - dob.getTime()
// alert((calc/(1000*60*60*24*365)).toFixed(1))

///////ch 35to 37//////

//  function myfunction(message){
//  alert(message)
//  }
//  myfunction("hello")
// myfunction("hello")

// function myfunction(){
//     var name = prompt("enter name")
// }
// myfunction()

// function myfunction(){
// var username = prompt("enter name")
// alert(username)
// }
//  myfunction()

// function myfunction(a,b,c){
//   console.log(a+" "+b+" "+c)
// }
// myfunction("anas","arham","ali")

// function myfunction(a,b,c){
// alert(a*b*c)
// }
// myfunction(2,3,3)

// function myfunction(a,b){
//     var sum = a+b
//     console.log(sum)
// }
// myfunction(3,4)

// function myfunction(){
// var arr = []
// var a = prompt("enter name")
// arr.push(a)
// console.log(arr)
// }
// myfunction()

// function reverarr(){
//     var arr = arr = ['a','b','c','d','e']
//     console.log(arr.reverse())
// }
// reverarr()

// function repeat(){
// var str = "abcde"
// console.log( str.repeat(10))
// }
// repeat()

// function myfunction() {
//   var flag = "false";
//   var array = ["zaid","haris","raza","abubakar","hassan","hussain","fatima",];
//   var userName = prompt("enter name");

//   for (i = 0; i < array.length; i++)
//     if (userName === array[i]) {
//       alert("true");
//     }
// }
// myfunction();

// function Average() {
//   var arr = [2, 4, 6, 8, 10];

//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   var avg = sum / arr.length;
//   return avg
// }
// console.log(Average())

// function dob(month,date,year){

// var d = new Date()

// var dob = new Date();
// dob.setDate(date)
// dob.setMonth(month-1)
// dob.setFullYear(year)

// var calc = d.getTime() - dob.getTime()
// var age = ((calc/(1000*60*60*24*365)))
// alert("your age is:"+" "+Math.floor(age))
// }

// dob(4,22,2009)


// function setyear(month, year) {
//   var date = new Date();

//   date.setFullYear(year);
//   date.setMonth(month);
  
//   console.log(date);
// }

// setyear(11, 2025);



///////ch 38//////
// var a = 12
// function myfunction(){
//     alert(a)
// }
// myfunction();

// function calculate(a, b) {
//     var sum = a + b;
//     console.log("The sum is: " + sum);
//   }

//   calculate(5, 3);

///////ch 39,40//////

// var day = "tuesday";

// switch (day) {
//   case "monday":
//     alert("its true monday");
//     break;

//     case "tuesday":
//     alert("its true tuesday");
//     break;
// }

// var cityName = prompt("enter city name");
// cityName = cityName.toLowerCase();
// switch (cityName) {
//   case "lahore":
//     alert("true");
//     break;

//   case "karachi":
//     alert("true");
//     break;

//   case "islamabad":
//     alert("true");
//     break;
