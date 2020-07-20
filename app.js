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
// console.Log(tesla.vehicles.vehicleThree);
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
        console.log('My kind of music is' + this.rap)
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

