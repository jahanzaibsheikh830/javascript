//Shapter 1

//alert("Welcome to my site");

//alert("Error! Please Enter a valid Password");

//alert("Welcome to JS land \r\n Happy Coding!");

//Chapter 2

// var myName= "Muhammad Jahanzaib";
// var title= "Hello World";
// alert(title + " " + myName);

// var myName="Muhammad Jahanzaib";
// var age= "22";
// var course="Web and Mobile";
// alert(myName);
// alert(age);
// alert(course);

// alert("Pizza \r\n Pizz \r\n Piz \r\n Pi \r\n P");

// var email="Jahanzaibsheikh830@gmail.com";

// alert("My E-mail address is"+ email);

//Chapter 3

// var age= 22;

// alert("I am "+ age +" years old");

// var prize= 600*5;
//  document.write("The total cost of 5 tickets are"+ prize);

// var celsius= 25;
// var f= 70;

// document.write(25 +"is"+ (70-32)*5/9 +"<br>");

// document.write(70 +"is"+ (25*9)+32);

// var calculate= 10 * 104.80 + 25 * 28;

// document.write("Total currnecy in PKR: " + calculate);

// var currentYear=2020;
// var birthYear=1999;
// var age =currentYear-birthYear;

// document.write("Current Year is "+ currentYear + "<br>" + "Birth year is " + birthYear + "<br>" + "Age is " + age);

//Chapter 6 to 9

// var a=+prompt("Enter a number")

// document.write("Result"+"<br>"+ "The value of a is "+ a + "<br>");
// ++a
// document.write("The value of ++a is "+ a +"<br>");
// a++
// document.write("The value of a++ is "+ a +"<br>");
// --a
// document.write("The value of --a is "+ a +"<br>");
// a--
// document.write("The value of a-- is "+ a +"<br>");

// var a=2 , b=1;

// var result= --a - --b + ++b + b--;

// document.write(--a +"<br>");
// document.write(--a - --b +"<br>");
// document.write(--a - --b + ++b +"<br>");
// document.write(--a - --b + ++b + b--);

// var a =+prompt("Please enter a number ");
// var b=5;
// if(a){
//     for(var i=1; i<=10; i++)
//     document.write(a + "*" + i + "= " + a*i +"<br>" );
// }
// else{
//     for(var i=1; i<=10; i++)
//     document.write(b + "*" + i + "= " + b*i +"<br>" );
// }

// var sub1=prompt("Enter first subject");
// var sub2=prompt("Enter second subject");
// var sub3=prompt("Enter third subject");

// var totalMarks=100;

// var markSub1=+prompt("Marks of Subject1");
// var markSub2=+prompt("Marks of Subject2");
// var markSub3=+prompt("Marks of Subject3");

// document.write("Subject" + "<br>" + sub1 + "<br>" + sub2 + "<br>" + sub3);
// document.write("Total" + "<br>" + totalMarks + "<br>" + totalMarks + "<br>" + totalMarks + "<br>" + totalMarks+totalMarks+totalMarks);
// document.write("obtained Marks" + "<br>" + markSub1 + "<br>" + markSub2 + "<br>" + markSub3 + "<br>"+ markSub1+markSub2+markSub3);
// document.write("Percentage" + "<br>" + markSub1/totalMarks*100 + "<br>" + markSub2/totalMarks*100 + "<br>" + markSub3/totalMarks*100 );

//Chapter 9 to 11

// var city=prompt("Enter Your City");

// document.write("Welcome To" + city);

// var gender=prompt("Let me know who you are");

// if(gender=="male"){
//     alert("Wellcome Sir");
// }
// else if(gender=="female"){
//     alert("Wellcome ma'am");
// }
// else{
//     alert("You entered a wrong gender");
// }

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// var a=+prompt("Guess a secret number");
// var secretNumber=4;

// if(a==4){
//     alert("Bingo! correct answer");
// }
// else if(a== 3 || a==5){
//     alert("Close enough to the correct answer.");
// }
// else if(a== 1 || a==2 || a== 6 || a==5 || a== 7 || a==8 || a== 9 || a==10 ){
//     alert("Wrong answer");
// }
// else{
//     alert("The number is out from the range..");
// }

// var number=+prompt("Enter a Number");

//     if(number % 3 == 0){
//         alert("The Number is divisible by 3");
//     }
//     else{
//         alert("Not divisible by 3");
//     }

// var number=prompt("Enter a Number");

// if(number%2==0){
//     alert("Even Number");
// }
// else{
//     alert("Odd Number");
// }

// Chapter 12 to 13

// var a=+prompt("Enter First Number");
// var b=+prompt("Enter Second Number");

// if(a>b){
//     alert("The first number 'a' is greater");
// }
// else if(b>a){
//     alert("The second number 'b' is greater");
// }
// else if(a==b){
//     alert("The both number 'a' and 'b' are equal");
// }
// else{
//     alert("Wrong Input");
// }



//chapter 14


// var matrix=[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// for(var i=0; i<matrix.length; i++){
//     for(var j=0; j<matrix.length; j++);
//     document.write(matrix[i][j]+ "<br>");
// }


// for(var i=1; i<=10; i++){
//     document.write(i + "<br>");
// }


// var num=prompt("Enter a number multipilication");
// var lenght=prompt("Enter lenght");

// for(var i=1; i<=lenght; i++){
//     document.write(num+"*"+ i + "=" + num*i + "<br>" );
// }


// var fruits=["apple","banana","mango","orange","stawbery"];

// for(var i=0; i<fruits.length; i++){
//     document.write("Element at index" + i + "is " + fruits[i] +"<br>");
// }

//Arrrays


// var student = [];

// student = ["jahanzaib", "zuhaib", "ali", "nasir", "amir"];

// console.log(student);


// var edu=["SSC", "HSC", "BSC", "BCOM", "BBA", "MPHIL"]
// document.write("<h1>Qualification</h1>")
// for(var i = 0; i<edu.length; i++){
//     document.write(i + " " + edu[i] + "<br>");
// }


// var student=["Jahanzaib","Ali","Razi"];
// var marks=[320,230,480];

// for(var i=0; i<student.length; i++){
//         document.write("Scor of " + student[i] + "is " + marks[i] + "Percentage" + marks[i]/500*100 + "<br>")
    
// }

// var colors=["Blue","red","green"];

// document.write(colors);

// document.write("<br>");

// var add= prompt("Enter a color");

// colors.unshift(add);

// document.write(colors);
// colors.unshift("yellow", "White");
// document.write(colors);
// document.write("<br>");
// colors.shift();
// document.write(colors);
// document.write("<br>");
// colors.pop();
// document.write(colors);
// document.write("<br>");
// var colorIndex=prompt("write index from where want to add a new color");
// var newColor=prompt("Enter a color");

// colors.splice(colorIndex,0,newColor);

// document.write(colors);

// var score=["65","45","42","32"];

// document.write(score); 
// score.sort();
// document.write("<br>");
// document.write(score);

// var citites=["karchi","islamabad","lahore","hydrabad","quetta"];

// document.write(citites);
// document.write("<br>");
// var copy = citites.slice(0,3);

// document.write(copy);

// var arr=["this","is","my","cat"];

// document.write(arr);
// document.write("<br>");
// var join = arr.join(" ");

// document.write(join);

// var date = new Date();
// document.write(date);

// var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// var now = new Date();
// console.log(now);
// var currentMonth= months[now.getMonth()];
// console.log(currentMonth);

// var days= ["sunday","monday","tuesday","wednesday","thurday","friday","saturday"];
// var now= new Date();
// var currentDay = days[now.getDay()];
// console.log(currentDay.slice(0,3));

// var days= ["sunday","monday","tuesday","wednesday","thurday","friday","saturday"];
// var day = new Date();
// var day1=days[day.getDay()];
// alert(day1);
// if(day1 === "saturday" || day1===  "sunday"){
//     alert("It's Funday");
// }
// else{
//     alert("It's not funday");
// }

// var days = new Date();
// days= days.getDate();
// alert(days);
// if(days <=15 ){
//     alert("First fifteen days of a month");
// }
// else{
//     alert("Last fifteen days of a month");
// // }

// var date = new Date();
// var millis= date.getTime();
// var min = date.getMinutes()/millis;
// console.log(date);
// console.log(millis);
// console.log(min);

// var date = new Date();

// var time = date.getHours();
// alert(time);

// if(time <=12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

// var date =new Date('31 dec 2020');
// console.log(date)

// var ramzan = new Date('26 april 2020');
// var ramzanMilli = ramzan.getTime(); 
// var today = new Date();
// var todayMilli = today.getTime();
// var diff = todayMilli - ramzanMilli;
// var ramzanPast = diff/(1000*60*60*24);
// console.log(ramzanPast);

// var past = new Date('31 dec 2019');
// var pastMilli = past.getTime();
// var today = new Date();
// var todayMilli = today.getTime();
// var diff = todayMilli - pastMilli;
// var calc = diff/(1000);
// console.log(past);
// console.log(calc);

// var cusName = prompt("Enter Customer Name...");
// var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// var month = new Date();
// var currentMonth = months[month.getMonth()];
// var units = 410;
// var chUnit = 16;
// var calc = units*chUnit;
// var latePay = Math.floor(calc/100*15);
// var afterDue = latePay+ calc;

// document.write(cusName + "<br>");
// document.write(currentMonth + "<br>");
// document.write(units + "<br>");
// document.write(chUnit + "<br>");
// document.write(calc + "<br>");
// document.write(latePay + "<br>");
// document.write(afterDue + "<br>");

// var dob = new Date(prompt("Enter your DOB"));
// var dobMilli = dob.getTime();
// var date = new Date();
// var dateMilli = date.getTime();
// var diff = dateMilli-dobMilli;
// var acurage = Math.floor(diff/(1000*60*60*24*30*12));
// alert("Your age is: " + acurage );

// function currentDate(){
//     var date = new Date();
//     alert(date);
// }
// currentDate();

// function greetings(){
//     var fname = prompt("Enter first name");
//     var lname = prompt("Enter last name");
//     alert("Welcome " + fname + lname);
// }
// greetings();

// function add(){
//     var a = +prompt("Enter f no");
//     var b = +prompt("Enter s no");
//     return a+b;
// }
// alert(add());

// function calculator(num1, num2, operator){
//     if(operator === "+"){
//         return num1+num2;
//     }
//     else if (operator === "-"){
//         return num1-num2;
//     }
//     else if (operator === "*"){
//         return num1*num2;
//     }
//     else if (operator === "/"){
//         return num1/num2;
//     }
//     else{
//         return "Wrong Operator";
//     }

// }
// var res = calculator(5,5,"*");
// alert(res);

// function sumOfSquares(num) {
//     for (var i=0;i<=num;i++){
//         var sum;
//         var i = i*i;
//         sum = i;
// }
//      document.write("The sum of squares for numbers up to and including " +num+ "is " +sum) ;
// }
// var num = parseInt(prompt("Enter a number:"));
// sumOfSquares(num);

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = +prompt("Enter a Number");
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);

// function count(start,end){
//     for(var i=start; i<=end; i++){
//         document.write(i + "<br>");
//     }
// }
//  var start = +prompt("Enter start number");
//  var end = +prompt("Enter end number");
// count(start,end);


// function  calculateHypotenuse(hypo){
//     function calculateSquare(base, perp){
//         return (base*base)+(perp*perp);
//     }
//     var a = prompt("Enter Base");
//     var b = prompt("Enter Perpendicular");
//    alert(calculateSquare(a,b));
// }
// calculateHypotenuse();

// function power(a,b){
//     var pow = Math.pow(a,b);
//     return pow;
// }
// document.write(power(5,4));

// function leapyear(){
//     var enterYear = +prompt("Enter year");
//     if (enterYear%4==0){
//         alert(enterYear + "is a leap year");
//     }
//     else{
//         alert("Not a leave year");
//     }
// }
// leapyear();

// function main(sub1, sub2, sub3){
//     function average(){
//         var total = 3;
//         var obtained = sub1+sub2+sub3;
//         var averageMarks = obtained/total;
//         document.write("Average Marks of 3 Subjects is" + averageMarks + "<br>");
//         return averageMarks;
//     }
//     average();
//     function percentage(){
//         var total = 300;
//         var obtained = sub1+sub2+sub3;
//         var percent = obtained/total*(100);
//         document.write("Percentage of 3 Subjects is" + percent);
//         return percent;
//     }
//     percentage();
// }
// var sub1 = +prompt("Enter Marks of Subject1");
// var sub2 = +prompt("Enter Marks of Subject2");
-// var sub3 = +prompt("Enter Marks of Subject3");
// main(sub1,sub2,sub3);

// function indof(para,chr){
//     for(var i=0; i<para.length; i++){
//         if(para[i]==chr){
//             return i;
//         }
//         return -1;
//     }
// }
// var chr = prompt("Enter a character to know index");
// var para = "Hello World";
// console.log(indof(para,chr));

// function indexOf(string, character) {
//     let i=0;
//     while(i < string.length){
//         if(string[i] == character){  // yes? just return the index i
//             return i
//         }
//         i++                          // no? increase i and move on to next loop iteration
//     }
//     return -1;                       // made it through the loop and without returning. This means no match was found.
// }
// console.log(indexOf("Mark Was Here", "k"))
// console.log(indexOf("Mark Was Here", "W"))
// console.log(indexOf("Mark Was Here", "X"))

// function delvov(){
//     var sen = "hey how are you";
//     var check = sen.split("");
//     for(var i=0; i<=check.length; i++){
//         var s = sen[i];
//         if(s== "a" || s== "e" || s== "i" || s== "o" || s== "u"){
//             var rep = sen.replace(s,"");
//             document.write(rep + "<br>");
//             break;
//         }
//     }
// }
// delvov();

// var strings = ["bongo drums", "guitar", 
// "flute", "double bass", "xylophone","piano"];                          

//  string = strings.replace( /["aeiou"]/g, '');              

// console.log(string);

// function km(distance){

//     function meter(){
//         var met = distance*1000;
//         document.write(met + "<br>");
//     }
//     meter();
//     function feet(){
//         var ft = distance*3280.8;
//         document.write(ft + "<br>");
//     }
//     feet();
//     function inches(){
//         var inch = distance*39370.1;
//         document.write(inch + "<br>");
//     }
//     inches()
//     function cent(){
//         var centi = distance*100000;
//         document.write(centi + "<br>");
//     }
//     cent();
// }
// km(5);

// function sw(str){
//     for(var i=0; i<=str.length; i++){
//         if(str[i] == "u"){
//             console.log(str[i]);
//         }
//     }
// }
// sw("Pleases read this application and give me gratuity");

// function hello(){
//     alert("Hello world");
// }
// function del(i){
//     document.getElementById('mytable').deleteRow(i);
// }   
// function changeimg(){
//     var ching = document.getElementById("img1");
//     ching.src = 'images/car1.jpg'; 

// }
// function changeimg(id,src){
//     var ching = document.getElementById(id);
//     ching.src = src;
// }
// function increasenum(){
//     var count = document.getElementById('counter');
//     count.value++;
// }
// function decreasenum(){
//     var count = document.getElementById('counter');
//     count.value--;
// }
// var firstName=prompt("Enter your firsst name");
// var lastName=prompt("Enter your last name");

// var fullName= firstName + lastName;

// alert("welcome sir"+ fullName);

// var mobile=prompt("Enter your fvoriute mobile nme");

// alert("Length of String "+ mobile.length);

// var country="pakistani";
// console.log("Index of 'n' "+ country.indexOf("n"));

// var str="Hello World";

// console.log("Index of L :" + str.lastIndexOf("l"));

// var str="Pakistani";

// console.log("Character at index 3"+ str.charAt(5));

// var firstName=prompt("Enter your firsst name");
// var lastName=prompt("Enter your last name");

// var fullName= firstName.concat(lastName);

// alert("Welcome Sir"+ fullName);

// var city="Hyderabad";

// city2= city.replace("Hydera","Islama");

// console.log(city2);

// var message="Ali and Sami are best friends. They play cricket and football together";

// replace= message.replaceAll("and","&");

// console.log(replace);

// var num="472";
// console.log("Value: " + num);
// console.log("Type: "+ typeof(num));

// toInt=parseInt(num);

// console.log("Value: " + toInt);
// console.log("Type: "+ typeof(toInt));

// var str=prompt("Write Your Name");

// var str2 = str.toUpperCase();

// alert("You typed"+ str2);

// var str=prompt("Write any word");

// var str1= str.slice(0,1).toUpperCase();
// var str2= str.slice(1,str.length).toLowerCase();
// var str3= str1.concat(str2);
// alert(str3);

// var userName=prompt("Enter Your Name");
// var find=false;
// for(var i=0; i<=userName.length; i++){
//     if("@"==userName[i]||"#"==userName[i]||"$"==userName[i]||"%"==userName[i]||"^"==userName[i]||"&"==userName[i]){
//         find=true;
//         alert("Please enter valid user name");
//         break;  
//     }
// }
//     if(find===false){
//         alert("Welcome sir : " + userName);
//     }

// var arr=["cake","apple","cookies","chips","paties"];
// var search=prompt("Enter your item");
// search=search.toLowerCase();
// var find=false;
// for(var i=0; i<=arr.length; i++){
//     if(search===arr[i]){
//         find=true;
//         var index=arr.indexOf(search);
//         alert(search +" is available at index "+ index);
//         break;    
//     }
    
// }
//     if(find===false){
//         alert("Item not found");
// }

// var arr="University of Karachi";
// for(var i=0;i<arr.length;i++){
//     document.write(arr[i]+"</br>")
// }

// var country="pakistan";
// alert(country.charAt(country.length-1));

// var user=prompt("Enter a postive value");
// document.write("Round of value"+ Math.round(user) +"<br>");
// document.write("Floor value"+ Math.floor(user)+"<br>");
// document.write("Ceil value" + Math.ceil(user));

// var user=prompt("Enter a negative value");
// document.write("Round of value"+ Math.round(user) +"<br>");
// document.write("Floor value"+ Math.floor(user)+"<br>");
// document.write("Ceil value" + Math.ceil(user));