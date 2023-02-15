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
         choices:['Apache license 2.0','BoostSoftware 1.0','Creative commons', 'MIT'],
         name:'license'
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
    return new Promise((resolve, reject) => {
        fs.writeFile("README.md", data, err => {
            if (err) {
                reject(err);
                return;
            } resolve(); //else
        })
    })    
}
// TODO: Create a function to initialize app
function initialize() {
    inquirer.prompt(questions).then(function(data)
    {
        console.log(data)
        writeToFile(data.namemessage);
    })

}

// Function call to initialize app
initialize();
