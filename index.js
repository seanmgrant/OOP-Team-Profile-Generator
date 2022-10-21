const inquirer = require("inquirer")
const fs = require("fs")
const template = require('./src/template')
// Team
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")


const teamArray = []

const managerQuestions = [
    {
        name: "managerName",
        message: "What is the manager's name?"
    },
    {
        name: "employeeId",
        message: "What is the manager's employee ID?"
    },
    {
        name: "emailAddress",
        message: "What is the manager's email?"
    },
    {
        name: "officeNumber",
        message: "What is the manager's office number"
    },
];

const engineerQuestions = [
    {
        name: "engineerName",
        message: "What is the engineer's name?"
    },
    {
        name: "employeeId",
        message: "What is the engineer's employee ID?"
    },
    {
        name: "emailAddress",
        message: "What is the engineer's email?"
    },
    {
        name: "GitHub",
        message: "What is the engineer's GitHub"
    },
];

const internQuestions = [
    {
        name: "internName",
        message: "What is the intern's name?"
    },
    {
        name: "employeeId",
        message: "What is the intern's employee ID?"
    },
    {
        name: "emailAddress",
        message: "What is the intern's email?"
    },
    {
        name: "School",
        message: "What is the intern's school"
    },
];

function addManager() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            //console.log(answers)
            const newManager = new Manager(answers.managerName, answers.employeeId, answers.emailAddress, answers.officeNumber)
            teamArray.push(newManager)
            //console.log(teamArray[0].getRole(), teamArray[0].getId(), teamArray[0].getEmail())
            addsMember()
        });
}


function addsMember() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                massage: "Which type of team member would you like to add?",
                choices: ['engineer', 'intern', "I don't want to add any more team members"]
            }
        ]).then(answers => {
            if (answers.choice === 'engineer') {
                addEngineer()
            } else if (answers.choice === 'intern') {
                addIntern()
            } else {
                buildTeam()
            }
        })
}

function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            const newEngineer = new Engineer(answers.engineerName, answers.employeeId, answers.emailAddress, answers.GitHub)
            teamArray.push(newEngineer)
            addsMember()
        });
}

function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            const newIntern = new Intern(answers.internName, answers.employeeId, answers.emailAddress, answers.School)
            teamArray.push(newIntern)
            addsMember()
        });
}

function buildTeam() {
   fs.writeFile('./dist/output.html',template(teamArray), (err) => {
        if(err) console.log(err)
        else console.log("successfully wrote html output")
   })
    
}


addManager()