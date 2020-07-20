# Js-review
This is my review of JavaScript. 

##Examples of Data Types 
``` javascript
let name = 'Channee'
let age = '35'
let isCool = true;
const myArray = ['Jim', 'Joe', 'Bob']

const musicGenre = {
    hipHop = 'GangStarr',
    rap = 'Nipsey Hussle',
    myMusic = ['Rap','RNB','Eletric','Rock','Foreign'],
    subGenres: {
        musicOne: 'House',
        musicTwo: 'Trap',
        musicTrhee: '80s Rock'

    },
    print function(){
        console.log('My kind of music is' + this.musicGenre)
    }

}
```

## Examples of Functions
```javascript

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
```