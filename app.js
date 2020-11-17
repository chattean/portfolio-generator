// Portfolio 

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


const printProfileData = (profileDataArr) => {

    //ES6
    profileDataArr.forEach((profileItem)=> console.log(profileItem));
    // Old JS
//     for (let i = 0; i < profileDataArr.length; i++){
//         console.log(profileDataArr[i]);
//     }
};

printProfileData(profileDataArgs);

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