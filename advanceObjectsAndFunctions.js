console.log('coming from advance-objects-and-functions');
// constructor / prototype / class

var sushantObj ={
    firstName: 'Sushant',
    lastName: 'Joshi',
    yearOfBirth: 1994
}

// function constructor

var Person = function (name, lastName, yearOfBirth){
    this.firstName= name;
    this.lastName= lastName;
    this.yearOfBirth=yearOfBirth;
}

var gauravObj = new Person('Gaurav','Joshi',1989);

console.log(gauravObj);

