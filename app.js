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

// const musicGenre = {
//     hipHop = 'GangStarr',
//     rap = 'Nipsey Hussle',
//     myMusic = ['Rap','RNB','Eletric','Rock','Foreign'],
//     subGenres: {
//         musicOne: 'House',
//         musicTwo: 'Trap',
//         musicTrhee: '80s Rock'

//     },
//     print: function(){
//         console.log('My kind of music is' + this.musicGenre)
//     }

// }
// can do forloop for each
// function printFriends(array){
//     array.forEach(friend =>{
//         console.log(friend);
//         array.forEach(function(element){

//         })
//     })
// }


function printName(element) {
    console.log(element)
}

friends.forEach(function(friend){
    printName(friend);
});

friends.forEach(friend =>{
    printName(friend)
})
//invoke 
printFriends(myArray);
printFriends(tesla.foundingMembers);



//stnd function
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
