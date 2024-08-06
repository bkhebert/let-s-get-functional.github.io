// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
var maleCount = function(customers){
let males = _.filter(customers, function(customer){
    return customer.gender === 'male';
})
return males.length;
};

var femaleCount = (customers) => {
    let females = _.reduce(customers, function (result, customer, index){
        if (customer.gender === 'female'){
         result += 1
        };
        return result;
    }, 0); 
    return females;
};

var oldestCustomer = (customers) => {
    //declare the oldest variable;
    let theOldest;
    //initialize the last customer variable to equal 0;
    let lastCustomer = 0;
    //loop through customers
    for(let i = 0; i < customers.length; i++){
        //if the customers age is greater than the last customer
        if(customers[i].age > lastCustomer){
            //set the oldest customers name to match
            theOldest = customers[i].name;
            //update the lastcustomer age
            lastCustomer = customers[i].age;
        }
    }
    //return the oldest customer
    return theOldest;
};


var youngestCustomer = (customers) => {
    //declare the oldest variable;
    let theYoungest;
    //initialize the last customer variable to equal 500;
    let lastCustomer = 500;
    //loop through customers
    for(let i = 0; i < customers.length; i++){
        //if the customers age is less than the last customer
        if(customers[i].age < lastCustomer){
            //set the oldest customers name to match
            theYoungest = customers[i].name;
            //update the lastcustomer age
            lastCustomer = customers[i].age;
        }
    }
    //return the oldest customer
    return theYoungest;
};

var averageBalance = (customers) => {
    let totalBalance;
    for(let i = 0; i < customers.length; i++){
        totalBalance += parseFloat(customers[i].balance.slice(1).replaceAll(',','').replace('.',''));
    }
    let averageBalance = totalBalance / customers.length;
    return averageBalance.
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
