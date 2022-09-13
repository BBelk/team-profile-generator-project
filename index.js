const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pageTemplate = require('./src/page-template');

// TODO: CODE GOES HERE

const managerQuestions = [
    {
        name: 'newName',
        message: 'What is the Managers name?',
    },
    {
        input: 'number',
        name: 'newId',
        message: 'What is the Managers ID?',
        validate: (answer) => {
            if (isNaN(answer)) {
              return "Please enter a number";
            }
            return true;
          },
    },
    {
        name: 'newEmail',
        message: 'What is the Managers email?',
    },
    {
        input: 'number',
        name: 'newOfficeNumber',
        message: 'What is the Managers office number?',
        validate: (answer) => {
            if (isNaN(answer)) {
              return "Please enter a number";
            }
            return true;
          },
    },
    {
        name: 'doNext',
        type: 'list',
        choices:[
            'Add Engineer',
            'Add Intern',
            'Done',
        ],
        message: 'Add new employees or are you done?',
    }
];

const engineerQuestions = [
    {
        name: 'newName',
        message: 'What is the Engineers name?',
    },
    {
        input: 'number',
        name: 'newId',
        message: 'What is the Engineers ID?',
        validate: (answer) => {
            if (isNaN(answer)) {
              return "Please enter a number";
            }
            return true;
          },
    },
    {
        name: 'newEmail',
        message: 'What is the Engineers email?',
    },
    {
        name: 'newGithub',
        message: 'What is the Engineers GitHub username?',
    },
    {
        name: 'doNext',
        type: 'list',
        choices:[
            'Add Another Engineer',
            'Add Intern',
            'Done',
        ],
        message: 'Add new employees or are you done?',
    }
];

const internQuestions = [
    {
        name: 'newName',
        message: 'What is the Interns name?',
    },
    {
        input: 'number',
        name: 'newId',
        message: 'What is the Interns ID?',
        validate: (answer) => {
            if (isNaN(answer)) {
              return "Please enter a number";
            }
            return true;
          },
    },
    {
        name: 'newEmail',
        message: 'What is the Interns email?',
    },
    {
        name: 'newSchool',
        message: 'What is the Interns school name?',
    },
    {
        name: 'doNext',
        type: 'list',
        choices:[
            'Add Engineer',
            'Add Another Intern',
            'Done',
        ],
        message: 'Add new employees or are you done?',
    }
];

teamArray = [];
doInquirer(managerQuestions, 0);

function doInquirer(newQuestions, roleInt){
    inquirer.prompt(newQuestions)
    .then(response => {

        if(roleInt == 0){
            var newManager = new Manager(response.newName, response.newId, response.newEmail, response.newOfficeNumber);
            teamArray.push(newManager);
        }

        if(roleInt == 1){
            var newEngineer = new Engineer(response.newName, response.newId, response.newEmail, response.newGithub);
            teamArray.push(newEngineer);
        }

        if(roleInt == 2){
            var newIntern = new Intern(response.newName, response.newId, response.newEmail, response.newSchool);
            teamArray.push(newIntern);
        }





        // teamArray.push(response);
        // console.log(response);
        if(response.doNext == "Done"){
            FinishedTeam(teamArray);
            // console.log("ALL DONE");
            // console.log(teamArray);
            // console.log(JSON.stringify(teamArray));
        }
        if(response.doNext == ("Add Engineer") || response.doNext == ("Add Another Engineer")){
            // console.log("Add Engineer");
            doInquirer(engineerQuestions, 1);
        }
        if(response.doNext == ("Add Intern") || response.doNext == ("Add Another Intern")){
            // console.log("Add Intern");
            doInquirer(internQuestions, 2);
        }
    });
}

function FinishedTeam(teamData){
    const generatedHTML = pageTemplate(teamData);
    fs.writeFile('./dist/team.html', generatedHTML, (err) => {
        if (err) throw err;
        console.log('File exists in /dist directory, updating.');
    });
}