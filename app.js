//lets make a few data type
let name = 'Channee'
let age = '35'
let isCool = true;
const myArray = ['Jim', 'Joe', 'Bob']
console.log(name);
console.log(age);
console.log(isCool);
console.log(myArray);

//now lets make an object
//object we have key industry and value pairs cars
//object: 'key', followed by a comma then on the last object no comma
const tesla = {
    industry: 'Electric Cars',
    ceo: 'Elon Musk',
    yearFounded: 2003,
    foundingMembers: ['Elon Musk', 'JB Straubel', 'Martin Eberard'],
    stockTicker: "TSLA",
    //put object inside of an object
    vehicles: {
        vehicleOne: 'Model S',
        vehicleTwo: 'Model X',
        vehicleThree: 'Model 3'
    },
    print: function(){
        console.log('The CEO of Tesla is ' + this.ceo);// this.ceo is reference ceo if i want to say tesla.ceo
    }
}

tesla.stockPrice = 1643.00;

console.log(tesla);
tesla.vehicles.vehicleThree;
console.log(tesla['vehicles']['vehicleThree']);

tesla.print();

const musicGenre = {
    hipHop: 'GangStarr',
    rap: 'Nipsey Hussle',
    myMusic: ['Rap','RNB','Eletric','Rock','Foreign'],
    subGenres: {
        musicOne: 'House',
        musicTwo: 'Trap',
        musicThree: '80s Rock'

    },
    print: function(){
        console.log('This is okay'+ this.rap)
    }

}
console.log(musicGenre['subGenres']['musicTwo']);
// can do forloop for each
function printFriends(array){
    array.forEach(friend =>{
        console.log(friend);
        array.forEach(function(element){

        })
    })
}

function printName(element) {
    console.log(element)
}

myArray.forEach(function(myArray){
    printName(myArray);
});

myArray.forEach(myArray =>{
    printName(myArray)
})
//invoke 
printFriends(myArray);
printFriends(tesla.foundingMembers);



// //stnd function
function addNumbers(num1, num2){
    return num1 + num2;

};

//function expression 
const multiplyNumbers = function(num1, num2){
    return num1 * num2;
};

//arrow function 
const subtractNumbers = (num1, num2) => {
    return num1 - num2
};


//DOM DOCUMENT OBJECT MODEL 
const container = document.querySelector('.container');
console.log(container);
//create an element
const headerTwo = document.createElement('h2');
headerTwo.textContent ='My first JS review';
console.log(headerTwo);

//apend
container.appendChild(headerTwo);

//add a class classList.add headerTwo
headerTwo.classList.add('subtitle', 'header-two');
// headerTwo.setAttribute('class', 'header-two');
//remove class headerTwo
headerTwo.classList.remove('header-two');
console.log(headerTwo);

//add event listener when i click on that 
// i want to take headerTwo and put name there

headerTwo.addEventListener('click', function(){
    headerTwo.textContent = 'Channee';
});

// make another element 

const headerThree = document.createElement('h2');
headerThree.textContent = 'Friends';

container.appendChild(headerThree);
console.log(headerThree);
const list = document.createElement('ul');

//so when i click on friends it shows all friends
//listen for click on friends
//create an element reference that arra at each element then append under friends

//pseudo code writ out some type of idea
//iterate through my friends array 
for(let i = 0; i < myArray.length; i++){
    let eachFriend = myArray[i];
    // console.log(eachFriend);
    //now create li
    const listItem = document.createElement('li');
    listItem.textContent = eachFriend;
    // console.log(listItem);

    //now take each item and append it
    list.appendChild(listItem);
}
//once i click on headerThree append that ul to that friends to that container
console.log(list);
//doig outside forloop because its listening for a click
headerThree.addEventListener('click', function(){
    container.appendChild(list);
});
//reference each friend
//create a li (list)
//add textContent to that li
//append that to ul (unordered list)
//unordered list
// printFriends
// -friends 1
// -friends 2
// -freiends 3

// orderlist
// 1.friends 1

//Proble solving 


//what do i star with 
//what do i hope to end up with what result am i trying to get

//understand the problem
//where the issue start and... 

//break it down into more managable problems


//Fizzbuzz 
// write a function that does the following 
// takes in an array 
// check each number in the array
//if its divisable by 3 and 5 and === fizzbuzz
//if number is divisable by 3 === fizz 
//if the number is divsible by 5 === 'Buzz' 

// for example: [3, 5, 15, 20, 9, 7]
//['Fizz', 'Buzz', 'FizzBuzz', 'Buzz', 'Fizz', 7]
//return an array

//I need to setup an empty array 
//iterate through the array that going to be passed in
//check to see if divisible
//check the remainer of each element with % mod sign
//push result of each element into result array
//return that result array 

function fizzBuzz(array){
    // let result return empty array []
    let result = [] //will push in Fizz, Buzz, FizzBuzz, Buzz, Fizz, num which is 7

    for(let i =0; i < array.length; i++){
        let num = array[i] //going to grab each element then see that number
        console.log(num); // thi will print 3, 5, 15
        // meed conditional
        if (num % 3 === 0 && num % 5 === 0){
            //do something if those both are true
            result.push('FizzBuzz');
        } else if(num % 3 === 0){
            //do something else
            result.push('Fizz');
        } else if(num % 5 === 0){
            // do something else
            result.push('Buzz');
        } else {
            result.push(num);
        }

    }

    return result;
}
// const numbers = [3, 5, 15, 20, 9, 7]
console.log(fizzBuzz([3, 5, 15, 20, 9, 7]));

// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
// isInside(['pete', 'adam', 'taylor'], 'fred'); // => false

// need to have a for each. element 
//compare the elements 
//variety of booleans  to return true or false 
//what is the value to hold the booleans
// if the array returns true or false

function isInside(array, ele){
  //define variable to find the index of ele
    let result = array.indexOf(ele);
    // the code is saying of the element rome is in the array 
    //it will come out true if not else
    // the -1 value returned if the item is not in there
    if(array.indexOf(ele) > -1) {
      return true; 
    } else {
      return false;
    }
    //going to return true because theres an array counting as one object 
    // and the element outside of the object is being checked to see if its in the array

}

console.log(isInside(['taylor', 'rome', 'adam'],'rome'));
console.log(isInside(['pete', 'adam', 'taylor'], 'fred'));

// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('General Assembly'); //=> 'ylbmessA lareneG'

// create function that
// create string 
// how to reverse string
// returns strings but in reverse 

//Game plan was to break it down because multiple things needed to happen
// first its a string and needed to split it
// "The split() method is used to split a String object into an 
// array of strings by separating the string into substrings.""
//once string broke down into an array can use reverse
// Then join() method is used to join all elements of an array into a string.
//was able to follow along better understanding through chain method during research
function reverseStr(str){
    //means split on empty space changes to array
    let splitString = str.split('');
    // method reverse everything in array 
    let reverseString = splitString.reverse();
    // method join things together 
    let joinString = reverseString.join('');
    console.log(joinString);
    
    // return str.split('').reverse().join('')

}
console.log(reverseStr('bootcamp'));
console.log(reverseStr('General Assembly'));

// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

// create a function  that returns an array divisble by 7
//also make 
// need to create for loop that will test each number before the max
//and push all the numbers to that array 

function luckySevens(max){
    let result = [];
    for(i = 0; i < max.length; i++){
    let num = max[i]; //going to grab each element then see that number
    console.log(num); 
   
   // should be if 7 an those numbers in the array goes first and rus through each 
//    condition to be divisible with no remainder it should print the number but prints all numbers?
    // need conditional
    if (num % 25 === 0 && num % 42 === 0){
        //do something if those both are true
        result.push(num);
    } else if(num % 25 === 0){
        //do something else
        result.push(num);
    } else if(num % 42 === 0){
        // do something else
        result.push(num);
    } else {
        result.push(num);
    }
  }
  return result;
}

console.log(luckySevens([ 7, 14, 21 ]));
console.log(luckySevens([ 7, 14, 21, 28, 35, 42 ]));

// element is a string 
const copyMachine = (element, num) => {
    let result = [];
    //want to get i equal or greater than number
    // and get pushed in
    for(let i = 0; i < num; i++){

    }
    return result
}

console.log(copyMachine('mango', 3));

function everOtherWord(sentence) {
    // result = empty array
    let result = []

    let splitSentence = sentence.split(' ');
    console.log(splitSentence);
    //if you need index pass in element and pass in index
    for (let i = 0; i < splitSentence.length; i++){
        //if this is true then do this logic 
        // one is truthy value 0 is falsy value 

        if(i % 2 === 0){ //2,0 always 0
            result.push(splitSentence[i]);// empty array [hello]
        }
    }
    return result;
}
//                          0     1   2   3    4
//think about truthy and falsy values 
console.log(everOtherWord('Hello how are you doing?'));


function wordYeller(sentence){
    // use .split to sepereate the sentence at tthe space
    let words = sentence.split('')
// for loop to add '! to each word in sentence
    for(let i = 0; i < words.length; i++){

        if (punctuationCheck(words[i]));
        return sentence = words.join(' ');
    }


function punctuationCheck(word){
    let punctuation = ['!', '?', ';', ':', ',', '.'];
    for (let m = 0; m < punctuation.length; m++){
        return false;
    }
  }
  return true;
}

console.log(wordYeller('I want to, like, go shopping, but I cant find my keys!'));


let generalAssembly = 'This is what it looks like to code';
const wordYellar = (sentence) => {

    let splitArray = sentence.split(' ')
    let emptyArray = [];
    for( let i =0; i < splitArray.length; i++){
        var word = splitArray[i]
        let lastLetter = word(word.length < -1)
        if( lastLetter = '.' || lastLetter == ',' || lastLetter == '?' || lastLetter =='!' || lastLetter ==';' || lastLetter == ':'){
           emptyArray.push(word) 
        } else {
            emptyArray.push(word + '!');
        }
    }
    let finalString = emptyArray.join('')
    return finalString
}



function arraySubString(word, str){
    
}


