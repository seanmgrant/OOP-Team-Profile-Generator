const inquirer = require("inquirer")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")


const questions = [
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
]

const teamArray = []

inquirer
    .prompt(questions)
    .then((answers) => {
        //console.log(answers)
        const newManager = new Manager(answers.managerName, answers.employeeId, answers.emailAddress, answers.officeNumber)
        teamArray.push(newManager)
        //console.log(teamArray[0].getRole(), teamArray[0].getId(), teamArray[0].getEmail())
    })
