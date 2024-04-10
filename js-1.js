// conststructor methods

let today = new Date();
console.log(today);

let day = today.getDay();
console.log( 'day',day);

let year = today.getFullYear();
console.log( 'year', year);

let  minutes = today.getMinutes();
console.log( 'minutes',minutes);

let millisecs = today.getMilliseconds();
console.log( 'millisecs', millisecs);

let month = today. getMonth() + 1 ;
console.log('month', month);

let hours = today.getHours();
console.log('hours', hours);

//number methods
  let pi = 3.14;
  let get =pi.toFixed(2);
  console.log( 'pi value',get);


//math methods 
 let num1 = 500;
  let num2 = 355;
  let min = Math.min(num1,num2);
  console.log( 'min value', min);

 let num3 = 999;
 let num4 = 2014;
 let max = Math.max(num3,num4)
 console.log('max value',max);




let number = 36;
let square = Math.sqrt(number);
console.log( 'root num',square);  //square num

let Pavbaji =  79.99;
let round = Math.round(Pavbaji);  
console.log( 'Pavbaji',round);  //rounded


let dosa = 90.45;
let floor = Math.floor(dosa);
console.log('dosa',floor);      //floor

let biriyani = 90.44;
let ceil = Math.ceil(biriyani);
console.log('biriyani', ceil);      //ceil


