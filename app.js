// Portfolio 
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// ES6
const[name,github] = profileDataArgs;
//  Old JS
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];



fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });

// console.log(name, github);

// console.log(generatePage(name,github));

// const printProfileData = (profileDataArr) => {

//     //ES6
//     profileDataArr.forEach((profileItem)=> console.log(profileItem));
//     // Old JS
// //     for (let i = 0; i < profileDataArr.length; i++){
// //         console.log(profileDataArr[i]);
// //     }
// };

// printProfileData(profileDataArgs);

//Examples 

// const message = 'Hello Node!';
// console.log(message);
// if (true === true) {
//   const message = 'Hello ES6!';
//   let sum = 5;
//   sum += 10;
//   console.log(message);
//   console.log(sum);
// }

// console.log(sum);