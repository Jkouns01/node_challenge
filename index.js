const inquirer= require("inquirer");
const fs = require("fs");

//Made by Jacob Kouns
// TODO: Create an array of questions for user input
const questions=  [
    {
        type:'input',
        message:'What is the name of your project?',
        name:'projectTitle'
    },
     {
         type:'input',
         message:'Please provide a discription and instructions for your project.',
         name:'projectQuestion'
     },
     {
         type:'checkbox',
         message:'Pick a license',
         choices:['Apache 2.0','BoostSoftware 1.0','Creative commons', 'MIT'],
         name:'licensing'
     },
     { 
        type:'input',
         message:'What is your GitHub UserName?',
         name:'whyQuestion'
     },
     {
         type:'input',
         message:'What problem does it solve?',
         name: 'solutionQuestion'
     },
     {
        type:'input',
         message:'What could you improve on?', 
        name:'sprinklesQuestion'
     },
     {
        type:'input',
         message:'What did you learn?',
        name:'knowlegeQuestion'
     },
    {
        type:'input',
        message:'What makes your project stand out?',
         name:'starQuestion'
     }
];

// TODO: Create a function to write README file
// function writeFile(fileName, data) {}
const writeToFile = (data)  => {
    fs.writeFile("README.md", JSON.stringify(data) , err => {
        if (err) {
            console.log("wrong");
            return;
        }
    })   

}
// TODO: Create a function to initialize app
function initialize() {
    inquirer.prompt(questions).then(function(data)
    {
        console.log(data)
        writeToFile(data);
    })

}

// Function call to initialize app
initialize();
