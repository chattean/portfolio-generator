// Portfolio 
const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: userNameInput => {
        if (userNameInput) {
          return true;
        } else {
          console.log('Please enter your Username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);
};
// promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {
  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
        =================
        Add a New Project
        =================
    `);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project? (Required)',
      validate: projectNameInput => {
        if (projectNameInput) {
          return true;
        } else {
          console.log('Please enter your Project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: projectDescriptionInput => {
        if (projectDescriptionInput) {
          return true;
        } else {
          console.log('Please enter your Project Description');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: gitHubLinkInput => {
        if (gitHubLinkInput) {
          return true;
        } else {
          console.log('Please enter your GitHub Link');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]).then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
};
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });
// console.log(inquirer);
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');


// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });


// const profileDataArgs = process.argv.slice(2);
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// ES6
// const[name,github] = profileDataArgs;
//  Old JS
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];


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