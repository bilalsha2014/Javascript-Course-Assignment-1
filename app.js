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

document.write("Yah! I can write HTML content through Javascript" + "\n");

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
document.write("My Birth Year is " + birthyear + "\n");
document.write(
  "Data Type of my declared variable is " + typeof birthyear + "\n"
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
    " on XYZ Clothing Store"
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
    "\n" +
    "Variables must begin with a letter, $ or _. For example $name, _name or name" +
    "\n" +
    "Variable names are case sensitive" +
    "\n" +
    "Variable names should not be JS Keywords"
);

// Chapter 5 "MATH EXPRESSIONS"

// Task1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// Task2. Repeat task1 for subtraction, multiplication, division & modulus.

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

// Task4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

// Task5. Write a script to display multiplication table of any number in your browser.

// Task6.  The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a.  Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Task7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// Task8.   Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// Task9.   Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
//  (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// Task10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2 Perform all calculations in a single expression

// Task11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

// Task12.  The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The  area is NN”.
// (Hint : Area of a circle = π r2, π = 3.142)

// Task13.    The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
