// Chapter No.1 "Alerts"

// Task1: Write a script to greet your website visitor using JS alert box.

alert("Hello Visitor");

// Task2: Write a script to display following message on your web page:

alert("Error!Please Enter a Valid Password");

// Task3: Write a script to display following message on your web page: (Hint : Use line break)

alert("Welcome to JS Land... \n Happy Coding!");

// Task4:  Write a script to display following messages in sequence:

alert("Welcome to JS Land");
alert("Happy Coding");

// Task5:  Generate the following message through browser’s developer console:

console.log("Hello I Can Run JS Through web browser's console");

// Chapter No.2 "VARIABLES FOR STRINGS"

// Task1. Declare a variable called username.

var username;

// Task2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Bilal Ahmed Shah";

// Task3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var titled_message = "Hello World";
alert(titled_message);

// Task4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var Name = "Bilal Ahmed Shah";
alert("Name : " + Name);
var Age = "25";
alert("Age : " + Age);
var Profession = "GIS Expert";
alert("Profession : " + Profession);

// Task5. Write a script to display the following alert using one JS variable:

var pizza = "PIZZA";
alert(
  pizza +
    "\n" +
    pizza.slice(0, -1) +
    "\n" +
    pizza.slice(0, -2) +
    "\n" +
    pizza.slice(0, -3) +
    "\n" +
    pizza.slice(0, -4)
);

// Task6. Declare a variable called email and assign to it a string that represents your Email
// Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

var email = "bilalsha2014@gmail.com";
alert("My Email Address is " + email);

// Task7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// Task8. Write a script to display this in browser through JS

document.write("Yah! I can write HTML content through Javascript" + "<br>");

// Task9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

var symbol = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(symbol);

// Chapter 3 VARIABLES FOR NUMBERS

// Task1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 25;
alert("I am " + age + " Year's Old");

// Task2. Declare & initialize a variable to keep track of how many times a visitor
// has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

var visit = 0;
visit += 1;
alert("You have visited this site " + visit + " times");

// Task3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthyear = 1995;
document.write("My Birth Year is " + birthyear + "<br>");
document.write(
  "Data Type of my declared variable is " + typeof birthyear + "<br>"
);

// Task4. A visitor visits an online clothing store www.xyzClothing.com .
//  Write a script to store in variables the following information:
//    a. Visitor’s name
//    b. Product title
//    c. Quantity i.e. how many products a visitor wants to order
//    Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = prompt("Visitor Name:");
var ProductTitle = prompt("Product Title: ");
var Quantity = prompt("Quantity: ");
document.write(
  visitorName +
    " Ordered " +
    Quantity +
    " " +
    ProductTitle +
    " on XYZ Clothing Store" +
    "<br>"
);

// Chapter N.4 "VARIABLE NAMES: LEGAL & ILLEGAL "

// Task1. Declare 3 variables in one statement.

var Variable1 = "Bilal",
  Variable2 = "Ahmed",
  Variable3 = "Shah";

// Task2. Declare 5 legal & 5 illegal variable names.

// Legal Variables:
var myName = "Bilal";
var My_Name = "Bilal";
var $My_Name_Is = "Bilal";
var _My_Name_Is = "Bilal";
var My_Name_1 = "Bilal";

// Illegal Variables:
// 1. var alert ="Bilal";
// 2. var 1stName = "Bilal";
// 3. var @Name = "Bilal";
// 4. var #Name = "Bilal";
// 5. var %Name = "Bilal";
// 6. var ~Name = "Bilal";

// Task 3. Display this in your browser
// a)  A heading stating “Rules for naming JS variables”
// b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// Rules for naming JS variables
document.write(
  "Variable names can only contain number,$ and _ . For example $my_1stVariable" +
    "<br>" +
    "Variables must begin with a letter, $ or _. For example $name, _name or name" +
    "<br>" +
    "Variable names are case sensitive" +
    "<br>" +
    "Variable names should not be JS Keywords" +
    "<br>"
);

// Chapter 5 "MATH EXPRESSIONS"

// Task1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
var result = Number(num1) + Number(num2);
document.write(result + "<br>");

// Task2. Repeat task1 for subtraction, multiplication, division & modulus.

// Substraction
var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
var result = Number(num1) - Number(num2);
document.write(result + "<br>");

// Multiplication
var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
var result = Number(num1) * Number(num2);
document.write(result + "<br>");

// Division
var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
var result = Number(num1) / Number(num2);
document.write(result + "<br>");

// Modulus
var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
var result = Number(num1) % Number(num2);
document.write(result + "<br>");

// Task3. Do the following using JS Mathematic Expressions
//  a. Declare a variable.
//  b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//  c. Initialize the variable with some number.
//  d. Show the value of variable in your browser like “Initial value: 5”.
//  e. Increment the variable.
//  f. Show the value of variable in your browser like “Value after increment is: 6”.
//  g. Add 7 to the variable.
//  h. Show the value of variable in your browser like “Value after addition is: 13”.
//  i. Decrement the variable.
//  j. Show the value of variable in your browser like “Value after decrement is: 12”.
//  k. Show the remainder after dividing the variable’s value by 3.
//  l. Output : “The remainder is : 0”.

var DeclareVariable;
document.write(
  "Value after variable declaration is: " + DeclareVariable + "<br>"
);
DeclareVariable = 10;
document.write("Initial value: " + DeclareVariable + "<br>");
DeclareVariable++;
document.write("Value after increment is: " + DeclareVariable + "<br>");
DeclareVariable = DeclareVariable + 7;
document.write("Value after addition is: " + DeclareVariable + "<br>");
DeclareVariable--;
document.write("Value after decrement is: " + DeclareVariable + "<br>");
DeclareVariable = DeclareVariable / 3;
document.write("The remainder is: " + DeclareVariable + "<br>");

// Task4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

var ticketPrice = 600;
var totalTickets = 5;
var cost = ticketPrice * totalTickets;
document.write(
  "Total Cost to Buy " +
    totalTickets +
    " tickets to a movie is " +
    cost +
    "PKR" +
    "<br>"
);

// Task5. Write a script to display multiplication table of any number in your browser.

var table = prompt("Enter Number of Which you want table: ");

document.write("<h1>Table of</h1>" + table + "<br>");
table = Number(table);
for (var i = 1; i <= 10; i++) {
  result = table * i;
  document.write(table + " * " + i + " = " + result + "<br>");
}

// Task6.  The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a.  Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celsiusTemp = Number(prompt("Enter Temperature in Celsius"));
var fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
var celsiusCalculated = ((fahrenheitTemp - 32) * 5) / 9;
document.write(celsiusTemp + "oC" + " is " + fahrenheitTemp + "oF" + "<br>");
document.write(fahrenheitTemp + "oF" + " is " + celsiusCalculated + "oC");

// Task7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

document.write("<h1>Shoping Cart</h1>" + "<br>");
var item1 = 650;
document.write("Price of Item 1 is " + item1 + "<br>");
var QuantityItem1 = 3;
document.write("Quantity of Item 1 is " + QuantityItem1 + "<br>");
var item2 = 100;
document.write("Price of Item 2 is " + item2 + "<br>");
var QuantityItem2 = 7;
document.write("Quantity of Item 2 is " + QuantityItem2 + "<br>");
document.write("Shiping Charges 100 " + "<br><br>");

var Totalcost = item1 * QuantityItem1 + item2 * QuantityItem2 + 100;
document.write("Total Cost of Your Order is " + Totalcost + "<br>");

// Task8.   Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

document.write("<h1>Marksheet</h1>" + "<br>");

var TotalMarks = 980;
var MarksObtained = 804;

document.write("Total Marks : " + TotalMarks + "<br>");
document.write("Marks Obtained : " + MarksObtained + "<br><br>");

document.write("Percentage : " + TotalMarks / MarksObtained + "<br>");

// Task9.   Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
//  (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h1>Currency in PKR</h1>" + "<br>");
var dollars = 10;
var SaudiRiyal = 25;
document.write("Total Dollars : " + dollars + "<br>");
document.write("1 US Dollar=104.80 Pakistani Rupee " + "<br>");
document.write("Total Saudi Riyal : " + SaudiRiyal + "<br>");
document.write("1 Saudi Riyal = 28 Pakistani Rupee" + "<br>");
document.write(
  "Total Currency in PKR is " + [dollars * 104.8 + 28 * 25] + "<br>"
);

// Task10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2 Perform all calculations in a single expression

var airthemtic = [[Number(prompt("Enter Number")) + 5] * 10] / 2;
document.write("Results is : " + airthemtic);

// Task11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

document.write("<h1>Age Calculator</h1>" + "<br>");

var CurrentYear = 2020;
var BirthYear = Number(prompt("Enter Your Birth Year: "));
document.write("Your Age is  : " + [CurrentYear - BirthYear]);

// Task12.  The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The  area is NN”.
// (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h1>The Geomotizer</h1>" + "<br>");
var radius = 20;
document.write("Radius of Circle is  : " + radius + "<br>");
var circumference = 2 * 3.14 * radius;
document.write("The Circumference of Circle is  : " + circumference + "<br>");
var area = 3.14 * radius ** 2;
document.write("The Area of Circle is  : " + area + "<br>");

// Task13.    The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br>");

var FavSnack = "Choclatoo";
var CurrentAge = 25;
var EstimatedAge = 65;
var SnacksPerDay = 3;
var TotalEat = [EstimatedAge - CurrentAge] * 365 * SnacksPerDay;

document.write("Favourite Snack : " + FavSnack + "<br>");
document.write("Current Age : " + CurrentAge + "<br>");
document.write("Estimated Maximum Age : " + EstimatedAge + "<br>");
document.write("Amount of Snacks Per Day : " + SnacksPerDay + "<br><br>");

document.write(
  "You Will Need " +
    TotalEat +
    " " +
    FavSnack +
    "to last you untile the ripe old age of " +
    EstimatedAge +
    "<br>"
);

// Chapter 6-9 "MATH EXPRESSIONS "

//Task 1.Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

document.write("<h1>Result</h1>" + "<br>");
var a = 10;
document.write("The Value of a is : " + a + "<br>");
document.write(
  "............................................................." + "<br><br>"
);

document.write("The Value of ++a is : " + ++a + "<br>");
document.write("Now The Value of a is : " + a + "<br><br>");

document.write("The Value of a++ is : " + a++ + "<br>");
document.write("Now The Value of a is : " + a + "<br><br>");

document.write("The Value of --a is : " + --a + "<br>");
document.write("Now The Value of a is : " + a + "<br><br>");

document.write("The Value of a-- is : " + a-- + "<br>");
document.write("Now The Value of a is : " + a + "<br><br>");

//Task 2.What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a; --a - --b; --a - --b + ++b;
// --a - --b + ++b + b--;

document.write("<h1>Before Increment & Decrement</h1>" + "<br>");
var a = 2,
  b = 1;
document.write("a is : " + a + "<br>");
document.write("b is : " + b + "<br>");
var result = --a - --b + ++b + b--;
// result= 1-0+1+1
//result=3
//a=1
//b=0 because after decrement b 1-1 =0
document.write("<h1>After Increment & Decrement Process</h1>" + "<br>");
document.write("a is : " + a + "<br>");
document.write("b is : " + b + "<br>");
document.write("Result is : " + result + "<br>");

//Task 3. Write a program that takes input a name from user & greet the user.

var username = prompt("Enter Your Name:");
document.write(
  "Hi & Welcome " + username + "<br>" + "How are you? " + username + "<br>"
);

//Task 5. Write a program to take input a number from user & display it’s multiplication table on your browser.
//  If user does not enter a new number, multiplication table of 5 should be displayed by default.

var table = 5;
var table = Number(prompt("Enter Number for table", table));

for (i = 1; i <= 10; i++) {
  result = i * table;
  document.write(table + " * " + i + " = " + result + "<br>");
}

//Task 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var English = Number(prompt("Enter English Marks : "));
var Math = Number(prompt("Enter Math Marks : "));
var Urdu = Number(prompt("Enter Urdu Marks : "));

var MarksPerSubject = 100;
var Totalmarks = 300;
var PercentageEnglish = (English / 100) * 100;
var PercentageMath = (Math / 100) * 100;
var PercentageUrdu = (Urdu / 100) * 100;

var TotalObtainedMarks = English + Math + Urdu;
var TotalPercentage = (TotalObtainedMarks / Totalmarks) * 100;
document.write(
  "<table>" +
    "<tr>" +
    "<td>" +
    "<b>Subject</b>" +
    "</td>" +
    "<td>" +
    "<b>Total Marks</b>" +
    "</td>" +
    "<td>" +
    "<b>Obtained Marks</b>" +
    "</td>" +
    "<td>" +
    "<b>Percentage</b>" +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "English" +
    "</td>" +
    "<td>" +
    MarksPerSubject +
    "</td>" +
    "<td>" +
    English +
    "</td>" +
    "<td>" +
    PercentageEnglish +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "Math" +
    "</td>" +
    "<td>" +
    MarksPerSubject +
    "</td>" +
    "<td>" +
    Math +
    "</td>" +
    "<td>" +
    PercentageMath +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "Urdu" +
    "</td>" +
    "<td>" +
    MarksPerSubject +
    "</td>" +
    "<td>" +
    Urdu +
    "</td>" +
    "<td>" +
    PercentageUrdu +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "Overall Marks" +
    "</td>" +
    "<td>" +
    "<b>" +
    Totalmarks +
    "</b>" +
    "</td>" +
    "<td>" +
    "<b>" +
    TotalObtainedMarks +
    "</b>" +
    "</td>" +
    "<td>" +
    "<b>" +
    TotalPercentage +
    "</b>" +
    "</td>" +
    "</tr>" +
    "</table>"
);

// Chapter 9-11 "USER INPUT & CONDITIONAL STATEMENT"

// Task 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

var city = prompt("City : ");
if (city == "Karachi") {
  alert("Welcome to city of lights");
} else {
  alert("Please Enter Correct City");
}

// Task 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter Your Gender");
if (gender == "male") {
  alert("Good Morning Sir");
} else if (gender == "female") {
  alert("Good Morning Ma’am");
} else {
  alert("Please,Enter Correct Gender");
}

// Task 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

var signal = prompt("Enter Traffic Signal Color");
if (signal == "Red") {
  alert("Must Stop");
} else if (signal == "Yellow") {
  alert("Ready to Move");
} else if (signal == "Green") {
  alert("Move Now");
} else {
  alert("Please Enter Correct signal");
}

// Task 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

var fuel = Number(prompt("Enter Remaining Fuel in Car(in Litres)"));
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
} else if (fuel >= 0.25) {
  alert("Your Fuel is Ok");
} else {
  alert("Please Enter Correct Number");
}

// Task 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("cat" < "car") {
  alert("car is smaller than cat");
} else {
  alert("cat is smaller than car");
}

// Task 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page.
//  Take percentage & compute grade as per following table:

document.write("<h1>Marksheet</h1><br>");
var English = Number(prompt("Enter English Marks"));
var Urdu = Number(prompt("Enter Urdu Marks"));
var Math = Number(prompt("Enter Math Marks"));
var totalMarks = English + Urdu + Math;
document.write("Total Marks : 300" + "<br>");
document.write("Marks Obtained : " + totalMarks + "<br>");
var percentage = (totalMarks / 300) * 100;
document.write("Percentage : " + percentage + "<br>");
if (percentage >= 80) {
  document.write("Grade : A+" + "<br>");
  document.write("Remarks : Excellent" + "<br>");
} else if (percentage >= 70) {
  document.write("Grade : A" + "<br>");
  document.write("Remarks : Good" + "<br>");
} else if (percentage >= 60) {
  document.write("Grade : B" + "<br>");
  document.write("Remarks : You Need to Improve" + "<br>");
} else {
  document.write("Grade : Fail" + "<br>");
  document.write("Remarks : Sorry" + "<br>");
}

// Task 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”

var a = Math.random();
var SecretNumber = Math.round(a * 10);
document.write(a + "<br>");
document.write(SecretNumber + "<br>");
var userInput = Number(prompt("Guess Number : "));
if (userInput == SecretNumber) {
  document.write("Bingo! Correct answer" + "<br>");
} else if (1 + userInput == SecretNumber) {
  document.write("Close enough to the correct answer" + "<br>");
} else if (2 + userInput == SecretNumber) {
  document.write("Bit Closer Bit Far" + "<br>");
} else if (3 + userInput == SecretNumber) {
  document.write("Bit Far" + "<br>");
} else if (userInput - 1 == SecretNumber) {
  document.write("Close enough to the correct answer" + "<br>");
} else if (userInput - 2 == SecretNumber) {
  document.write("Close enough to the correct answer" + "<br>");
} else if (userInput - 3 == SecretNumber) {
  document.write("Bit Far" + "<br>");
} else {
  document.write("Not Correctly Guessed,Please Try Again" + "<br>");
}

// Task 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

var number = Number(prompt("Enter Number :"));
if (number % 3 == 0) {
  document.write("Number is Divisble by 3" + "<br>");
} else {
  document.write("Number is Not Divisble by 3" + "<br>");
}

// Task 9.Write a program that checks whether the given input is an even number or an odd number.

var number = Number(prompt("Enter Number :"));
if (number % 2 == 0) {
  document.write("Given Number is Even" + "<br>");
} else {
  document.write("Given Number is Odd" + "<br>");
}

// Task 10.  Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = Number(prompt("Enter Temperature"));
if (temperature > 40) {
  document.write("It is too hot outside" + "<br>");
} else if (temperature > 30) {
  document.write("The Weather today is Normal." + "<br>");
} else if (temperature > 20) {
  document.write("Today’s Weather is cool." + "<br>");
} else if (temperature > 10) {
  document.write("OMG! Today’s weather is so Cool." + "<br>");
} else {
  document.write("Please Enter Correct Temperature in Number" + "<br>");
}

// Task 11.Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//  a. First number
//  b. Second number
//  c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

document.write("<h1>Calculator</h1><br>");
var FirstNumber = Number(prompt("Enter First Number"));
document.write("First Number is " + FirstNumber + "<br>");
var SecondNumber = Number(prompt("Enter Second Number"));
document.write("Second Number is " + SecondNumber + "<br>");
var Operation = prompt("Enter Operation Symbol to Perform \n +\n-\n*\n/\n%");
if (Operation == "+") {
  var result = FirstNumber + SecondNumber;
  document.write("Operation Selected is Addition " + "<br>");
  document.write("Result : " + result + "<br");
} else if (Operation == "-") {
  var result = FirstNumber - SecondNumber;
  document.write("Operation Selected is Subtraction " + "<br>");
  document.write("Result : " + result + "<br");
} else if (Operation == "*") {
  var result = FirstNumber * SecondNumber;
  document.write("Operation Selected is Multiplication " + "<br>");
  document.write("Result : " + result + "<br");
} else if (Operation == "/") {
  var result = FirstNumber / SecondNumber;
  document.write("Operation Selected is Division " + "<br>");
  document.write("Result : " + result + "<br");
} else if (Operation == "%") {
  var result = FirstNumber % SecondNumber;
  document.write("Operation Selected is Modulus Operator" + "<br>");
  document.write("Result : " + result + "<br");
} else {
  document.write("Please Enter Correct Operation to Perform");
}

//Chapter 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

//Task 1  Write a program that takes a character (number or string) in a variable & checks
// whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var Character = prompt("Enter Character : ");
if (Number(Character).toString() == Character) {
  document.write("Given Input is Number" + "<br>");
} else if (Character == Character.toUpperCase()) {
  document.write("Given Input is UpperCase Letter" + "<br>");
} else if (Character == Character.toLowerCase()) {
  document.write("Given Input is LowerCase Letter" + "<br>");
} else {
  document.write("Enter Correct Characters" + "<br>");
}

//Task 2 Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var FirstInt = Number(prompt("Enter First Integer"));
var SecondInt = Number(prompt("Enter Second Integer"));

if (FirstInt > SecondInt) {
  alert(FirstInt + " is greater than " + SecondInt);
} else if (SecondInt > FirstInt) {
  alert(SecondInt + " is greater than " + FirstInt);
} else if (SecondInt == FirstInt) {
  alert("Both are Equal");
} else {
  alert("Please Enter Correct Integer");
}

//Task 3 Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var num1 = Number(prompt("Enter Your Number"));
if (num1 < 0) {
  alert("Number is Negative");
} else if (num1 > 0) {
  alert("Number is Positive");
} else if (num1 == 0) {
  alert("Number is Zero");
} else {
  alert("Please Enter Correct Number");
}

//Task 4  Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var character = prompt("Enter Your Character");
var vowel = ["a", "e", "i", "o", "u"];
for (var i = 0; i < vowel.length; i++) {
  if (character == vowel[vowel.indexOf(character)]) {
    alert("True");
    break;
  } else {
    alert("False");
    break;
  }
}

//Task 5 Write a program that
//  a. Store correct password in a JS variable.
//  b.  Asks user to enter his/her password
//  c.  Validate the two passwords:
//  i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”.
//  Show “Incorrect password” otherwise.

var CorrectPassword = "Shah";
var Empty = "";
var EnterPassword = prompt("Enter Your Password : ");
if (EnterPassword == CorrectPassword) {
  alert("Correct! The password you entered matches the original password");
} else if (EnterPassword == Empty) {
  alert("Please enter your password");
} else {
  alert("Incorrect password");
}

//Task 6 This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; }

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
  alert(greeting);
} else {
  greeting = "Good evening";
  alert(greeting);
}

//Task 7 Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
var time = Number(prompt("Enter Time"));
if (time >= 0000 && time < 1200) {
  alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good AfterNoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
  alert("Good Night!");
} else {
  alert("Enter Correct Time in this format i.e 1700");
}

//Chapter 14-16 ARRAYS

// Task 1 Declare an empty array using JS literal notation to store student names in future

var a = { StudentNames: [] };

// Task 2  Declare an empty array using JS object notation to store student names in future.

// var b = { "description": [] };

// Task 3  Declare and initialize a strings array.

var ArrString = ["a", "b", "c", "d"];

// Task 4 Declare and initialize a numbers array.

var ArrNumber = [1, 2, 3, 4];

// Task 5 Declare and initialize a boolean array.

var ArrBoolean = [true, false, false, true];

// Task 6 Declare and initialize a mixed array.

var ArrMixed = ["abc", 123, true];

// Task 7  Declare and Initialize an array and store available education qualifications in Pakistan
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

document.write("<h1>Qualification</h1><br>");

var Qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
for (var i = 0; i <= Qualification.length - 1; i++) {
  b = i + 1;
  document.write(b + ") " + Qualification[i] + "<br>");
}

// Task 8  Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

var StudentNames = ["Bilal", "Hassan", "Talha"];
var marks = [450, 380, 406];
for (i = 0; i <= StudentNames.length - 1; i++) {
  document.write(
    "Score Of  " +
      StudentNames[i] +
      " is " +
      marks[i] +
      ".Percentage: " +
      (marks[i] / 500) * 100 +
      "<br>"
  );
}

// Task 9  Initialize an array with color names. Display the array elements in your browser.
//  a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
//  b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
//   c. Add two more color to the beginning of the array. Display the updated array in your browser.
//   d. Delete the first color in the array. Display the updated array in your browser.
//   e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
// Then remove the same number of color(s) from user-defined position/index.
// Display the updated array in your browser.

var color = ["Pink", "Red", "Blue", "Black"];
alert(color);
var addcolor1 = prompt("what color he/she wants to add to the beginning");
color.unshift(addcolor1);
alert(color);
var addcolor2 = prompt("what color he/she wants to add to the end");
color.push(addcolor2);
alert(color);
var addcolor3 = prompt("Add One Color in the Begining");
color.unshift(addcolor3);
alert(color);
var addcolor4 = prompt("Add One More Color in the Begining");
color.unshift(addcolor4);
alert(color);
color.shift();
alert(color);
color.pop();
alert(color);
var Position1 = Number(prompt("Where You want to add a color"));
var addcolor5 = prompt("Color You want to add in your desired Spot");
color.splice(Position1, 0, addcolor5);
alert(color);
var Position2 = Number(prompt("Where You want to delete a color"));
var Position3 = Number(prompt("How Many Colors You Want to delete"));
color.splice(Position2, Position3 + Position2);
alert(color);

// Task 10 Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var studentScore = [123, 345, 245, 108, 324];
studentScore.sort();
alert(studentScore);

// Task 11 Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var cities = [
  "Karachi",
  "Lahore",
  "Peshawar",
  "Islamabad",
  "Hyderabad",
  "Rawalpindi",
];
var selectedCities = [];
selectedCities += cities.slice(2, 5);
alert(cities);
alert(selectedCities);

// Task 12 Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
var join = arr.join(" ");
alert(join);

// Task 13 Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

var Storevalues = [];
var valuesTostore = Number(prompt("How Many Values You Want to Store"));
for (i = 0; i <= valuesTostore - 1; i++) {
  var store = prompt("Enter Value to Store");
  Storevalues.unshift(store);
}
Storevalues.reverse();
for (i = 0; i <= valuesTostore - 1; i++) {
  alert(Storevalues[i] + "\n");
}

// Task 14  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

var Storevalues = [];
var valuesTostore = Number(prompt("How Many Values You Want to Store"));
for (i = 0; i <= valuesTostore - 1; i++) {
  var store = prompt("Enter Value to Store");
  Storevalues.unshift(store);
}
for (i = 0; i <= valuesTostore - 1; i++) {
  alert(Storevalues[i] + "\n");
}

// Task 15  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//  Display the following dropdown/select menu in your browser using document.write() method:

var Num = Number(prompt("How Many Phone Manufacturer You Want to Store"));
var PhoneManufacturer = [];
for (i = 0; i <= Num - 1; i++) {
  c = i + 1;
  var Name = prompt("Manufacturer Name " + c);
  d = PhoneManufacturer.unshift(Name);
}

document.write(PhoneManufacturer);

// Chapter 17-20 ARRAYS AND LOOP

// Task 1.Declare and initialize an empty multidimensional array. (Array of arrays)

var multiArr1 = [[]];

// Task 2.Declare and initialize a multidimensional array representing the following matrix:

var multiArr2 = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
for (i = 0; i <= multiArr2.length - 1; i++) {
  document.write(multiArr2[i] + "<Br>");
}

//  Task 3.Write a program to print numeric counting from 1 to 10.

for (i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

//  Task 4.Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var table = Number(prompt("Enter Number for Table: "));
var Length = Number(prompt("Length of Table: "));

for (i = 1; i <= Length; i++) {
  document.write(table + " * " + i + " = " + i * table + "<br>");
}

//  Task 5.Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (i = 0; i <= fruits.length - 1; i++) {
  document.write(fruits[i] + "<br>");
}
document.write("<br>");
for (i = 0; i <= fruits.length - 1; i++) {
  document.write("Element At Index" + i + " is " + fruits[i] + "<br>");
}

//  Task 6.Generate the following series in your browser. See example output.
//  a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

var counting = [];
for (i = 1; i <= 15; i++) {
  document.write(i + "<br>");
  counting.push(i);
}
document.write(counting + "<br>");

//  b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

var a = [];
for (i = 1; i <= 10; i++) {
  a.push(i);
}

a.reverse();
for (i = 0; i <= 9; i++) {
  document.write(a[i] + "<br>");
}
document.write(a + "<br>");

//  c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

var even = [];
for (i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(i + "<br>");
    even.push(i);
  }
}
document.write(even + "<br>");

//  d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

var odd = [];
for (i = 0; i <= 20; i++) {
  if (i % 2 == 1) {
    document.write(i + "<br>");
    odd.push(i);
  }
}
document.write(odd + "<br>");

//  e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var series = [];
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(i + "k" + "<br>");
    series.push(i + "k");
  }
}
document.write(series);

//  Task 7.You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
//  After searching, prompt the user whether the given item is found in the list or not. Example:

var search = prompt(
  "Welcome to United Bakery \n What do you want to order? \n Dear Sir/Maa'm\n"
);
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

for (var i = 0; i <= A.length; i++) {
  if (search == A[A.indexOf(search)]) {
    document.write(search + " is available at index " + i + " in our Bakery");
    break;
  } else {
    document.write(
      " We are Sorry " + search + " is <b>Not Available</b> in our Bakery"
    );
    break;
  }
}

//  Task 8.Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];
document.write(Math.max.apply(null, A) + "<br>");

//  Task 9.Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];
document.write(Math.min.apply(null, A) + "<br>");

//  Task 10.Write a program to print multiples of 5 ranging 1 to 100.

var even = [];
for (i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    document.write(i + "<br>");
    even.push(i);
  }
}
document.write(even + "<br>");
