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
        message: 'What is your name?',
    },
    {
        name: 'newId',
        message: 'What is your ID?',
    },
    {
        name: 'newEmail',
        message: 'What is your email?',
    },
    {
        name: 'newOfficeNumber',
        message: 'What is your office number?',
    },
    {
        name: 'doNext',
        type: 'list',
        choices:[
            'Add Intern',
            'Add Engineer',
            'Done',
        ],
        message: 'Add new employees or are you done?',
    }
];

const engineerQuestions = [
    {
        name: 'newName',
        message: 'What is your name?',
    },
    {
        name: 'newId',
        message: 'What is your ID?',
    },
    {
        name: 'newEmail',
        message: 'What is your email?',
    },
    {
        name: 'newGithub',
        message: 'What is your github username?',
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
        message: 'What is your name?',
    },
    {
        name: 'newId',
        message: 'What is your ID?',
    },
    {
        name: 'newEmail',
        message: 'What is your email?',
    },
    {
        name: 'newSchool',
        message: 'What is your school name?',
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
        console.log('File exists, updating.');
    });
}