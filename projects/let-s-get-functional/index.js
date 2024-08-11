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
    //return the result of customers array calling filter method. filter method returns an array. Filter has a function.
    // Filter method iterates customers array values through parameters of its function 
        return customers.filter( (customer) => {
    //the purpose of the function in filter is to return a bool. all true bools are added to filters returned array. 
    //each value of customera arrays indexed values, objects, that has a key, gender, that has a value of male string that returns true, it gets added to a new array.  
        return customer.gender === 'male';
    //the length of the resulting array is what ultimately gets returned.
}).length
};
var femaleCount = (customers) => {
    //return the result of customers array calling the reduce method. Reduce method returns a value. Reduce has a function and a seed value.
    //The function in reduce takes in 3 parameters. The result parameter is given the seed value of 0. customers array values are iterated through customer parameter.
     //the function directly interacts with the result parameter, as result is ultimately the return value for reduce.
    return customers.reduce( (result, customer, index) => {
       //the function asks, if the customer objects gender is female.
        if (customer.gender === 'female'){
            //if bool is true add 1 to result.
         result += 1
        };
        //return the result.
        return result;
        //seed value. Passed into result as the intiial value.
    }, 0); 
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
    //return the customers array calling reduce method
    return  customers.reduce( (total, customer,index ) => {
        //if the customers balance length is greater than zero
        if(customer.balance.length > 0){
            //add to the total the number of that balance. parse float to convert string to number, slicing off the dollar sign and replacing all commas.
        return total + parseFloat(customer.balance.slice(1).replaceAll(',', ''));
        }//the seed is 0. divide the value by the length of the customers array before returning
    }, 0) / customers.length
};
    /*
    //initialize a variable, totalBalance, to zero
    let totalBalance = 0;
    //loop through the customers array
    for(let i = 0; i < customers.length; i++){
        //if the customers balance has a length greater than zero
      if(customers[i].balance.length > 0){
        //add to the total balance the parseFloat of each customer objects key value of balance, use slice at length 1 (for the $ sign) and replacingAll for commas
        totalBalance += parseFloat(customers[i].balance.slice(1).replaceAll(',',''));
        //just checking 
        console.log(parseFloat(customers[i].balance.slice(1).replaceAll(',','')))
    }
    }
    //return the average balance equate to the total balance divided by the amount of customers in the array
    return totalBalance / customers.length;
    
    */


var firstLetterCount = (array, char) => {
    //initialize a number to zero
    let number = 0;
    //loop through the array 
    for(let i = 0; i < array.length; i++){
        //if the value of the objects key name first letter to uppercase equals the char or to a lower case char
        if (array[i].name[0] === char.toUpperCase() || array[i].name[0] === char.toLowerCase()){
            //increment number by 1
            number += 1;
        }
    }
    //return the number
    return number;
};

var friendFirstLetterCount = (arrayOfCustomers, customerName, char) => {
    let number = 0;
    for(let i = 0; i < arrayOfCustomers.length; i++){
        if(arrayOfCustomers[i].name === customerName){
            for(let i2 = 0; i2 < arrayOfCustomers[i].friends.length; i2++){
                if(arrayOfCustomers[i].friends[i2].name[0] === char.toUpperCase() || arrayOfCustomers[i].friends[i2].name === char.toLowerCase() ){
                    number += 1;
                }
            }
        }
    }
    return number;
};

var friendsCount = (arrayOfCustomers, nameOfFriend) => {
    //initialized an array to empty
    let arr = [];
    //loop through the array of customers
        for(let i = 0; i < arrayOfCustomers.length; i++){
            //created another loop, it loops through the array of friends
            for(let i2 = 0; i2 < arrayOfCustomers[i].friends.length; i2++){
                //if the array of customer at a certain index, has friends at any index, whose name is equal to the name of the friend parameter
                if(arrayOfCustomers[i].friends[i2].name === nameOfFriend){
                    //push that customers name, into the array
                    arr.push(arrayOfCustomers[i].name);
                }
            }
        }
    //then return the array
    return arr
};

var topThreeTags = (customersArr) => {
        //initialize an empty array
        let arr = [];
        //initialize an empty object
        let obj = {};
            //loop through the array
            for(let i = 0; i < customersArr.length; i++){
                //loop through the tags
                for(let i2 = 0; i2 < customersArr[i].tags.length; i2++){
                    //make each individual tag an object key value set equal to zero
                    obj[customersArr[i].tags[i2]] = 0;
                }
            }
              //loop through the array again
            for(let i = 0; i < customersArr.length; i++){
                //loop through the tags again
                for(let i2 = 0; i2 < customersArr[i].tags.length; i2++){
                    //add 1 to each key value inside the object per occurance of the tag
                    obj[customersArr[i].tags[i2]] += 1;
                }
            }
      //initialize 6 more variables, 3 set to number 0, and 3 set to an empty string
      let firstNum = 0;
      let firstTag = '';
      let secondNum = 0;
      let secondTag = '';
      let thirdNum = 0;
      let thirdTag = '';
      
      //loop through the object
      for(let key in obj){
        //loop through the object AGAIN
        for(let key2 in obj){
            //if the objects key is greater than all other keys and is greater than or equal to the first number, 
             if(obj[key] >= obj[key2] && obj[key] >= firstNum){
                //reassign the variables, one to the objects key
            firstTag = key;
            //the other to the objects key value, which should be a number
            firstNum = obj[key];
             }
        }
      }
      //delete the object key that was selected as the firstTag
      delete obj[firstTag];
      //loop through the object again 
    for(let key in obj){
        //loop through the object AGAIN
        for(let key2 in obj){
            //if the objects key is greater than all other keys and is greater than or equal to the second number
             if(obj[key] >= obj[key2] && obj[key] >= secondNum){
                //reassign the variables, one to the objects key
            secondTag = key;
            //the other to the key value
            secondNum = obj[key];
             }
        }
      }
      //delete the key value pair associated with second place 
      delete obj[secondTag];
      //loop through the object once more
      for(let key in obj){
        //loop through the object AGAIN
        for(let key2 in obj){
            //same concept as on line 176, except here, the third number is compared
             if(obj[key] >= obj[key2] && obj[key] >= thirdNum){
                //same drill
            thirdTag = key;
            thirdNum = obj[key];
             }
        }
      }
      //no need to delete the third value as we are done looping. now, push the top 3 tags into the empty array
      arr.push(firstTag);
      arr.push(secondTag);
      arr.push(thirdTag);
      //return the array
        return arr
    };

var genderCount = (arrayOfCustomers) => {
    //create object literal
    let obj = {};
    //set an object key, 'male', to be equal to the total number of occurences of that gender using reduce
                    //REDUCE takes in the customer array, a function that will be looped through, and seed of 0
                                            //the function will take in the customer at an index and increase the number by 1
    obj.male = _.reduce(arrayOfCustomers, function (result, customer, index){
        //if the customers gender is male
        if (customer.gender === 'male'){
            //add 1 to the result
         result += 1
        };
        //return the result
        return result;
    }, 0); 
    //the same is done for females and non-binary
    obj.female = _.reduce(arrayOfCustomers, function (result, customer, index){
        if (customer.gender === 'female'){
         result += 1
        };
        return result;
    }, 0); 
    obj["non-binary"] = _.reduce(arrayOfCustomers, function (result, customer, index){
        if (customer.gender === 'non-binary'){
         result += 1
        };
        return result;
    }, 0);
    //return the object 
    return obj 
} ;

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
