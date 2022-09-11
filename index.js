const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
        name: 'officeNumber',
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
            'Add Intern',
            'Add Another Engineer',
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
            'Add Another Intern',
            'Add Engineer',
            'Done',
        ],
        message: 'Add new employees or are you done?',
    }
];

teamArray = [];
doInquirer(managerQuestions);

function doInquirer(newQuestions){
    inquirer.prompt(newQuestions)
    .then(response => {
        teamArray.push(response);
        console.log(response);
        if(response.doNext == "Done"){
            console.log("ALL DONE");
            console.log(JSON.stringify(teamArray));
        }
        if(response.doNext == ("Add Engineer") || response.doNext == ("Add Another Engineer")){
            // console.log("Add Engineer");
            doInquirer(engineerQuestions);
        }
        if(response.doNext == ("Add Intern") || response.doNext == ("Add Another Intern")){
            // console.log("Add Intern");
            doInquirer(internQuestions);
        }
    });
}