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

## DOM Manipulation
``` Javascript
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

```

### More Dom Manipulation
``` javascript
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

```