// alert("hello world");

// chapter # 21 to 25

// Q#1

// var firstName = prompt ("enter your first name");
// var lastName = prompt ("enter your last name");
// var fullName = firstName.concat ("" + lastName);
// alert (" " + fullName);

// Q#2

//  var userMobile = prompt ("favorite mobile phone model");
//  document.write(`my favorite phone is: ${userMobile} <br /> lenght of String: ${userMobile.length}`)

// Q#3

//  var word = "Pakistani";
//  document.write(`String: ${word} <br /> Index of 'n': ${word.indexOf("n")}`)

// Q#4

// var word = "Hello World";
//  document.write(`String: ${word} <br /> Last Index of 'l': ${word.lastIndexOf("l")}`)

// Q#5

// var word = "Pakistan";
// document.write(`String: ${word} <br /> character at index 3: ${word.charAt(3)}`)

// Q#6

// var fullname=first_name.concat(" ",last_name);
// document.write("Hi, "+fullname+" Nice to meet you!");

// Q#7

// var word = "Hyderbad";
// var replace = word.replace("hyder" , "Islam")
// console.log(replace)

// Q#8

//  var message = "Ali and sami are the best friends. They play cricket and football together.";
//  var replace = message.replace (/and/g, "&")
//  console.log(replace)

// Q#9

//  var stringNumber = "472";
//  document.write("value :" + stringNumber + "<br />" + "type:" + typeof(stringNumber)  )
//  var number = parseInt(stringNumber)
//  document.write(` <br/> Value: ${number} <br/> Type:  ${typeof(number)}`)

// Q#10

//  var wordCap = prompt ("enter any word");
//  document.write(`User Input : ${wordCap} <br> Upper case : ${wordCap.toUpperCase()}`)

// Q#11

//   var userInput = prompt("enter Any word");
//  document.write(userInput.slice(0,1).toUpperCase()  + userInput.slice(1,userInput.length).toLowerCase() )

// Q#12

// var num = 35.36;
//  var string = num.toString().replace("." , "");
//  document.write(`Number: ${num} <br> Result: ${string}`)

// Q#13

// var names = prompt("UserName:")
// for(var i=0;i<names.length;i++){
//         if(names[i].charCodeAt() === 33 || names[i].charCodeAt() === 44 || names[i].charCodeAt() === 46 || names[i].charCodeAt() === 64 ){
//                 alert("Please enter a valid userName")
//         }
// }
// document.write(names);

// Q#14

//  var bakeryItems =  ["cake", "apple pie", "cookie", "chips", "patties"];
//  var searchItems = prompt ("what do you want to order sir/ma'am"). toLowerCase();
//  var indexNum = bakeryItems.indexOf(searchItems);
//  console.log(indexNum)
//  if(bakeryItems.indexOf(searchItems) !== -1){
//             document.write(`${searchItems} is Available at Index ${bakeryItems.indexOf(searchItems)} in our Bakery`)
// }
//      else{
//      document.write(`${searchItems} is Not Available in our Bakery`)
//  }
 
// Q#15

// var password = prompt("Enter Password!");
// var pass_validation = /^[a-zA-Z0-9!$@]{1,}$/
// if(password !== ""){
//         if(!password.match(pass_validation)){
//                 alert("Please enter a valid Password")
//         }
//         else{
//                 alert("Password is Correct")
//         }
// }
// else{
//         alert("Please fill up password field")


// Q#16

// var university = "University of Karachi";
//  var arr = university.split("")
// document.write(arr.join("<br />"))

// Q#17

// var user = prompt("enter word");
//  document.write( "user Input: " + user + "<br />" + "Last Character of input : "  + user.slice(user.length-1));

// Q#18

// var string = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var count = string.match(/the/g)
// console.log(count.length)

// chapter # 26 to 30

// Q#1

// var num = prompt("enter positive integer number");
// var floor = Math.floor(num);
//  var round = Math.round(num);
//  var ceil = Math.ceil(num);
//  document.write(`Number: ${num} <br /> 
//   round off value: ${round} <br />
//    floor value: ${floor} <br />
//    ceil value: ${ceil}`);

//Q#2

//       var num = prompt("enter negative floating point number");
//  var floor = Math.floor(num);
//  var round = Math.round(num);
// var ceil = Math.ceil(num);
//  document.write(`Number: ${num} <br /> 
//   round off value: ${round} <br />
//   floor value: ${floor} <br />
//  ceil value: ${ceil}`);

// Q#3

//  var num = -4;
//  var abs = Math.abs(num);
 // document.write(`The absolute value of ${num} is ${abs}`) ;

//  Q#4

//  var dice = Math.random() *4 +1
//  var dicefloor = Math.floor(dice)
//  console.log(dicefloor)    
//  document.write(`Random dice value : ${dicefloor}`)
 
// Q#5

var coin = Math.random() * 2 +1 ;
coin = Math.floor(coin);
console.log(coin)
if(coin === 2){
    document.write(`${coin} <br> Random coin values : Heads`)
}else if(coin === 1){
    document.write(`${coin} <br> Random coin values : Tails`)

// Q#6

//  var number = Math.random() * 100 + 1;
//   var number = Math.floor(number);
// document.write(`Random number between 1 to 100: ${number}`) 

// Q#7

// var user = (prompt("Enter your weight in kilograms")); 
// document.write(`The weight of user is ${user} kilograms`);

// Q#8

var user = parseInt(prompt("enter a number between 1 and 10:"));
 var randomNum = Math.random() * 10 + 1;
  var  randomNum = Math.floor(randomNum);
 console.log(randomNum);
 if(user === randomNum){
     alert("congratulate");
 }   
else{
     alert("Next time");
 }


   
