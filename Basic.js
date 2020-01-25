console.log('Hello Sushant Coming from Basic.js');
/*************************************************************/
// * Variables And Datatypes
/*
var fistName = 'Sushant';
console.log(fistName);

var lastName = 'Joshi';
var agr = 25;

//Data types :: Number, String, boolean , undefined, null
//dynamic typing

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job ='Software Engineer';
console.log(job);

// $ and _ only allowed at start of any variables
// Reserved javascript key cant be used to name variables
*/
/*************************************************************/
// * variable mutation

//
/**/
//
// var firstName = 'Sushant';
// var age = 25;
//
// console.log(firstName + ' age is ' + age);   // type coercion
//
// firstName=10;
// console.log(firstName);

// var job, isMarried;
//
// console.log(job + isMarried);
//
// job = 'Software Engineer'
// isMarried = false;
//
// console.log(firstName + 'is '+ age + ' year old. is he married ' +isMarried); // type coercion with bollean
//
// //variable mutation
//
// age = 25.5;
//
// console.log(firstName + 'is '+ age + ' year old. is he married ' +isMarried); // type coercion with bollean
//
// alert(firstName + 'is '+ age + 'year old. is he married ' +isMarried); // type coercion with bollean
//
// var lastName = prompt('what is his last name ? ');
// console.log(firstName + ' ' + lastName);



/*********************************************************************************/
// * Basic Operators
//
// var now = 2019;
//
// // Math operators
// var ageSushant = 25;
// var yearSushant = now - ageSushant;
// console.log(yearSushant);
// var ageDudu = 30;
// var yearDadu = now - ageDudu;
// console.log(yearDadu);
//
// //logical operators
//
// var sushantOlder = ageSushant > ageDudu ;
// console.log(sushantOlder);
//
// //type of operator
// console.log(typeof sushantOlder);

/*********************************************************************************/

// * operator procedence and associativity
/*
var now = 2019;
var yearSushant = 1994;
var fullAge = 18;

var isFullAge= now - yearSushant >= fullAge ;
console.log(isFullAge); //true

var ageSushant = now - yearSushant;
var ageDadu = 30;

var averageAge = ageSushant + ageDadu /2;
console.log(averageAge); // 40 ?

averageAge = (ageSushant + ageDadu ) /2;
console.log(averageAge);

// mutiple assignment

var x, y ;

y=x= (3 + 4) /2;
console.log(x,y);

x+=10;
console.log(x);

x++;
console.log(x);
*/
/*********************************************************************************/

// * coding challenge 1
/*
var sushantMass, daduMass, sushantHeight, daduHeight, sushantBMI, daduBMI, isSushantBMIGreater;

sushantMass = prompt('Give sushant Mass is KG');
sushantHeight = prompt('Give sushant Height is Meter');
daduMass = prompt('Give dadus Mass is KG');
daduHeight = prompt('Give dadus Height is Meter');

sushantBMI = (sushantMass / (sushantHeight * sushantHeight));
daduBMI = (daduMass / (daduHeight * daduHeight));

console.log(sushantBMI,daduBMI);
isSushantBMIGreater = sushantBMI > daduBMI ;

alert('Is sushant BMI highter than dadus? ' + isSushantBMIGreater);
*/
/*********************************************************************************/

// * if / else statement
/*
var firstName = 'Sushant';
var civilStatus = 'single';

if(civilStatus === 'married')
{
    alert(firstName + ' is married');
}
alert(firstName + ' is single');

 */
/*********************************************************************************/
// * Boolean logic
/*
var age= 30;

if(age < 13)
{
    alert('its a boy ...!!!!');
}
else if(age >= 13 && age < 20){
    alert('its a teenager');
}
else if(age>= 20 && age < 30){
    alert('its a man');
}
else{
    alert('its older man');
}
*/
/*********************************************************************************/
// * ternary operator / conditional operator
/*
var age= 20;

age >= 21 ? alert('Dude you can drink ...!!!!!!'): alert('dude you cant drink ...!!!!');
*/
// * switch statement
/*
var job = 'teacher';

switch(job){
    case 'teacher':
        alert('teaches');
    case 'driver':
        alert('rides');
    case 'teacher':
        alert('teaches');
    default:
        alert('does nothing');
}

 */
/*********************************************************************************/

// * Truthy and falsy values

// falsy values : undefined , null , 0 , '', NaN
// truthy values : Not falsy values

/*
var result = 10 / 0.1;

alert(result);

// Equlity operators (in dev console )
23 == '23' // true
23 === '23' // false
true == 'true' //false
true === 'true' //false
true == true // true
true === true //true

 */
/*********************************************************************************/

// * CODING CHANLENGE
/*
var sushantTeamMactch1Score, sushantTeamMactch2Score, sushantTeamMactch3Score, daduTeamMatch1Score,  daduTeamMatch2Score,  daduTeamMatch3Score, sushantTeamAverageScore, daduTeamAverageScore;

sushantTeamMactch1Score = 89;
sushantTeamMactch2Score = 120;
sushantTeamMactch3Score = 123;

daduTeamMatch1Score = 116;
daduTeamMatch2Score = 94;
daduTeamMatch3Score = 123;

sushantTeamAverageScore = (sushantTeamMactch1Score + sushantTeamMactch2Score + sushantTeamMactch3Score) / 3;
daduTeamAverageScore = (daduTeamMatch1Score + daduTeamMatch2Score + daduTeamMatch3Score) / 3;

console.log(sushantTeamAverageScore, daduTeamAverageScore);

sushantTeamAverageScore > daduTeamAverageScore ? alert('sushants has highest average with ' + sushantTeamAverageScore) : alert('dadus team has highest average with ' + daduTeamAverageScore);

sushantTeamMactch1Score = 100;

sushantTeamAverageScore = (sushantTeamMactch1Score + sushantTeamMactch2Score + sushantTeamMactch3Score) / 3;
daduTeamAverageScore = (daduTeamMatch1Score + daduTeamMatch2Score + daduTeamMatch3Score) / 3;

console.log(sushantTeamAverageScore, daduTeamAverageScore);

sushantTeamAverageScore === daduTeamAverageScore ? alert('both team ave is same') : sushantTeamAverageScore > daduTeamAverageScore ? alert('sushant team avg is higher than dadus' + sushantTeamAverageScore) : alert('dadus teams avg is higher than sushants with ' + daduTeamAverageScore);

sushantTeamAverageScore = daduTeamAverageScore =1;

sushantTeamAverageScore === daduTeamAverageScore ? alert('both team ave is same') : sushantTeamAverageScore > daduTeamAverageScore ? alert('sushant team avg is higher than dadus' + sushantTeamAverageScore) : alert('dadus teams avg is higher than sushants with ' + daduTeamAverageScore);


 */

//***************************************************************************************************************

// * Function declerations
//
// function calculateAge(birthYear){
//     return 2019 - birthYear;
// }
//
// function yearsTillRetirement(birthYear)
// {
//     alert('Supssss');
//     return 60 - (2019 - birthYear);
// }
// // alert(calculateAge(1994));
// // alert('Years till retirement ' + yearsTillRetirement(1994));
//


// * function expression
/*
var YearsTillRetirement = function (birthYear)
{
    return 60 - (2019 - birthYear);
}

alert(YearsTillRetirement(1994));
*/
// when javascript expects return values we must write expressions
// *****************************************************************************
/*
// * Arrays

//initialize new array
var  names = ['Sushant', 'Gaurav', 'Hridansh'];

alert(names.length);
alert(names);

//mutate array data

names[0] = '';
alert(names);

//dynamic typing in array

names[0] = 1;
alert(names);

names.push(66);
names.unshift(64);
alert(names);
names.pop();
names.shift();
alert(names.indexOf('Gaurav'));

 */
// ***********************************************************************************

// * code challenge
/*
var bills = [124, 48 ,268];

console.log(bills);
var percentageCalculator = function (amount,percentage) {

    return (amount * percentage) / 100;

}
var tipCalculator = function (billAmount) {
    if (billAmount < 50){
        console.log('inside 1');
        return percentageCalculator(billAmount,20);
    }
    else if (billAmount >= 50 && billAmount < 200)
    {
        console.log('inside 2');
        return percentageCalculator(billAmount,15);
    }
    else{
        console.log('inside 3');
        return percentageCalculator(billAmount,10);
    }
}

var tips = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
var finalAmount = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
// tips[0] = tipCalculator(bills[0]);
// tips[1] = tipCalculator(bills[1]);
// tips[2] = tipCalculator(bills[2]);
console.log(tips);
// finalAmount[0]=bills[0] + tips[0];
// finalAmount[1]=bills[1] + tips[1];
// finalAmount[2]=bills[2] + tips[2];

console.log(finalAmount);


 */

// ************************************************************************************

// * objects and function inside object
/*
var obj = {
    firstName : 'sushant',
    secondName : 'joshi',
    family: ['','','',''],
    calcAge: function (birthYear) {
        this.age =  2019- birthYear;
    }
}
console.log(obj);
console.log(obj.firstName);
console.log(obj['firstName']);

var newObj = new Object();
newObj.firstName = 'Sushant';
console.log(newObj);

console.log(obj.calcAge(1994));
console.log(obj);

 */
// *******************************************************************************

// * coding challange
/*
var sushantObj = new Object();
var daduObj = {
    fullName: 'Gaurav Joshi',
    height: 5,
    mass: 50,
    calcBMI : function(){
       this.BMI = this.mass / (this.height * this.height);
    },
    getBMI : function ()
    {
    return this.BMI;
    }
}

sushantObj.addFullname = function (fullName) {
    this.fullName = fullName;
}

sushantObj.addMass = function (mass){
    this.mass = mass;
}

sushantObj.addHeight = function (height){
    this.height = height;
}

sushantObj.addFullname('Sushant Joshi');
sushantObj.addHeight(5);
sushantObj.addMass(50);

console.log(sushantObj);
console.log(daduObj);

sushantObj.calcBMI = function(){
    this.BMI = this.mass / (this.height * this.height);
}
sushantObj.calcBMI();
console.log(sushantObj);
daduObj.calcBMI();
console.log(daduObj);
console.log(daduObj.getBMI());

 */

// ******************************************************************************

// * Loops and iteration
/*
var names = ['Sushant','Gaurav','Hridnash'];

for(var c = names.length-1; c >= 0 ; c--){
    console.log(names[c]);
}

 */
// *****************************************************************

// * coding challenge
/*
function calcTipsAverage(tips){
    var tipsSum = 0;

    for (var c = 0 ; c <= tips.length - 1 ; c++){
        tipsSum +=  tips[c];

    }
    console.log('tipsSum: ' + tipsSum);
    return tipsSum / tips.length;
}

var johnSpendings = {
    bills : [124,48,268,180,42],
    tips : [],
    totalPaid : [],
    calcPercentage : function(billAmount){
        if(billAmount < 50){
            return billAmount * 0.2;
        }
        else if(billAmount >= 50 && billAmount < 200 ){
            return billAmount * 0.15;
        }
        else{
            return billAmount * 0.1;
        }

    },
    calcTips : function () {
        console.log('inside fun');
        for (var c = 0 ; c <= this.bills.length - 1 ; c++){
            var billAmount = this.bills[c];
             console.log(billAmount);
             this.tips[c] = this.calcPercentage(billAmount);
            console.log('tip for '+billAmount + ' is '+this.tips[c]);
            this.totalPaid[c] = this.tips[c] + billAmount ;
        }
    }
}

johnSpendings.calcTips();
console.log(johnSpendings.bills);
console.log(johnSpendings.tips);
console.log(johnSpendings.totalPaid);
console.log('Avg tip given : ' + calcTipsAverage(johnSpendings.tips));
alert('End');

 */

// var obj ={
//     name : 'Sushant',
//     birthYear : 1994 ,
//     calAge : function () {
//         console.log(this.name);
//
//     }
// }
//
// console.log(obj);
// obj.calAge();

// function a() {
//     console.log('a');
//     b();
// }
//
// function b() {
//     console.log('b');
//
//     c();
// }
//
// function c() {
//     console.log('c');
//
// }
//
//
// a();
//
// console.log(dddd);
// //var dddd = 10;
// console.log(dddd);
/*
var obj = {
    name: 'Sushant',
    birthYear: 1994,
    calAge: function () {
        console.log(this.name);

    }
};

obj.calSal = function () {

};

console.log(obj);


var Person ={
    name : 'sushant',
    calAge: function () {
        console.log(this.name)

    }
}

var sushant = New object(Person);

console.log(sushant);*/

