// alert("hello world");

// chapter # 21 to 25


// var firstName = prompt ("enter your first name");
// var lastName = prompt ("enter your last name");
// var fullName = firstName.concat ("" + lastName);
// alert (" " + fullName);



//  var userMobile = prompt ("favorite mobile phone model");
//  document.write(`my favorite phone is: ${userMobile} <br /> lenght of String: ${userMobile.length}`)



//  var word = "Pakistani";
//  document.write(`String: ${word} <br /> Index of 'n': ${word.indexOf("n")}`)



// var word = "Hello World";
//  document.write(`String: ${word} <br /> Last Index of 'l': ${word.lastIndexOf("l")}`)



// var word = "Pakistan";
// document.write(`String: ${word} <br /> character at index 3: ${word.charAt(3)}`)



// var word = "Hyderbad";
// var replace = word.replace("hyder" , "Islam")
// console.log(replace)



//  var message = "Ali and sami are the best friends. They play cricket and football together.";
//  var replace = message.replace (/and/g, "&")
//  console.log(replace)



//  var stringNumber = "472";
//  document.write("value :" + stringNumber + "<br />" + "type:" + typeof(stringNumber)  )
//  var number = parseInt(stringNumber)
//  document.write(` <br/> Value: ${number} <br/> Type:  ${typeof(number)}`)



//  var wordCap = prompt ("enter any word");
//  document.write(`User Input : ${wordCap} <br> Upper case : ${wordCap.toUpperCase()}`)



//   var userInput = prompt("enter Any word");
//  document.write(userInput.slice(0,1).toUpperCase()  + userInput.slice(1,userInput.length).toLowerCase() )



// var num = 35.36;
//  var string = num.toString().replace("." , "");
//  document.write(`Number: ${num} <br> Result: ${string}`)



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
 


// var university = "University of Karachi";
//  var arr = university.split("")
// document.write(arr.join("<br />"))



// var user = prompt("enter word");
//  document.write( "user Input: " + user + "<br />" + "Last Character of input : "  + user.slice(user.length-1));

// chapter # 26 to 30

// var num = prompt("enter positive integer number");
// var floor = Math.floor(num);
//  var round = Math.round(num);
//  var ceil = Math.ceil(num);
//  document.write(`Number: ${num} <br /> 
//   round off value: ${round} <br />
//    floor value: ${floor} <br />
//    ceil value: ${ceil}`);



//       var num = prompt("enter negative floating point number");
//  var floor = Math.floor(num);
//  var round = Math.round(num);
// var ceil = Math.ceil(num);
//  document.write(`Number: ${num} <br /> 
//   round off value: ${round} <br />
//   floor value: ${floor} <br />
//  ceil value: ${ceil}`);



    //  var num = -4;
    //  var abs = Math.abs(num);
    // document.write(`The absolute value of ${num} is ${abs}`) ;



//  var dice = Math.random() *4 +1
//  var dicefloor = Math.floor(dice)
//  console.log(dicefloor)    
//  document.write(`Random dice value : ${dicefloor}`)



//  var number = Math.random() * 100 + 1;
//   var number = Math.floor(number);
// document.write(`Random number between 1 to 100: ${number}`) 



// var user = (prompt("Enter your weight in kilograms")); 
// document.write(`The weight of user is ${user} kilograms`);



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

