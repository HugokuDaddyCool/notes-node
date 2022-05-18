console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('.\\notes.js');

// console.log(_.isString(true));
// console.log(_.isString('true'));

var filteredArray = _.uniq([1,2,3,'victor',4,5,'victor']);
console.log(filteredArray);
// var res = notes.add(9,-2);
// console.log(res);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username} and you are ${notes.age} years old!`, (err) => {
//   if (err) {
//     console.log('unable to write file!');
//   }
// });
