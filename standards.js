console.log('standars javascript is connected');
//lets makea  few data types
//string
let myName = 'Channee';
console.log(myName);
let myLastName = 'Math';
console.log(myLastName);
let myAge = 35;
console.log(myAge);
//array 
const rollerBlades = ['USD', 'Razors', 'K2', 'Solomon', 'Roces'];
console.log(rollerBlades);

//now lets make an object
//object we have key industry and value pairs cars
//object: 'key', followed by a comma then on the last object no comma

const honda = {
    industry: 'Cars',
    ceo: 'Takahiro Hachigo',
    monthFounded: 'September',
    dayFounded: 24,
    yearFounded: 1948,
    placeFounded: 'Hamamatsu, Shizuoka',
    country: 'Japan',
    vehicles: {
        vehicleOne: 'Integra',
        vehicleTwo: 'NSX',
        vehicleThree: 'Prelude'
        
    },
    print: function(){
        console.log('The CEO of Honda is ' + 
        this.ceo + ' and it was founded ' + 
        this.dayFounded + ' ' +
        this.monthFounded + ' ' +
        this.yearFounded + '.')// this.ceo is reference ceo if i want to say tesla.ceo
    }
}

console.log(honda);
//getting only the ceo from the array of objects key value pairs
console.log(honda.industry);
//getting only the ceo
console.log(honda.ceo);
//to print out the function inside of the arrayof objects
honda.print();

function fizzBuzz(array){
    let result =[];
    for(let i = 0; i < array.length; i++){
        let num = array[i];
        console.log(num);
        if(num % 3 === 0 && num % 5 === 0 ){
            result.push('Fizz Bizzneezy');
        } else if(num % 3 === 0){
            result.push('Fizz');
        } else if(num % 5 === 0){
            result.push('Bizz');
        } else{
            result.push(num);
        }
    }
    return result;
}

//outside gotta call the function with some numbers to test inside
console.log(fizzBuzz([3, 5, 9, 8, 15, 20, 25, 30, 32]));