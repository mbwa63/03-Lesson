//This a single line comment in js
/*
This is a block comment.
*/
//STRING TYPE*********************************

var firstName = "Matt";  //setting variables
var lastName = "Bennett";
var bestDescription;
var question = "How would you best describe Matt?";
bestDescription = "One hell of a guy!!";
var specialSymbols;

var message = firstName + " " + lastName;

var string1 = document.getElementById("string1");
string1.innerHTML = message;
var imagePath = 'images/water-color/thumbs/artwork_01.jpg';
//console.log(imagePath);
message = message.toUpperCase();
//console.log(message);

//NUMBER****************************************
var age = 51;
var youngerAge = 35; //This is an interger
var ageDifference = age - youngerAge;
var cost = 1.50; //This is a float type number
var cost1 = 50;
var cost2 = 50;
var cost3 = "50";
Number(cost3); //convert string to number
var total = cost1 * cost2;
console.log(total);

console.log(ageDifference);


/***ARRAY DATA TYPE***/
//create array

var imageList = new Array;
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";
imageList.push("images/oil/thumbs/artwork_8.jpg");

var imagePlaceholder = document.getElementById('placeholder');
imagePlaceholder.setAttribute("src", imageList[6]);

//********BOOLEAN DATA TYPE**************************

var oldEnough = true;
var currentlyEmployed = false;
var hasPotential = true;
age = 18;

//********IF/THEN statements (branching logic, application logic, business logic)******

if(age <= 20 && age != 52){
    oldEnough = false;
}else{
    oldEnough = true;
}

if(oldEnough == true){
    console.log("You may enter the bar");
}else{
    console.log("Go home");
}

/**********************FUNCTIONS***********************/

function dynamicGreeting(){
    var now = new Date();
    //extract hours from date
    var time = now.getHours();
    
    if(time < 12){
        alert("Good Morning, the time is... "+now.toLocaleTimeString());
    }
    
    if(time == 12){
        alert("Time to eat lunch");
    }
    
    if(time > 12){
        alert("Good evening, the time is... "+now.toLocaleTimeString());   
    }
}

dynamicGreeting();