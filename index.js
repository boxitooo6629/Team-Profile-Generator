const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { create } = require("domain");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const idList = []
const teamMembers = []


const appMenu = () => {
    
    function buildTeam(){

    }


    function addIntern() {

    }
    
    
    function addEngineer(){
       inquirer.prompt([
        {
            type:"input",
            name:"engineerName",
            message:"What is your engineer name?"
        },
        {
            type:"input",
            name:"engineerId",
            message:"What is your engineer id?"
        },
        {
            type:"input",
            name:"engineerEmail",
            message:"What is your engineer email?"
        },
        {
            type:"input",
            name:"engineerGithub",
            message:"What is your engineer github?"
        },

    ]).then(answers => {
        const engineer = new Manager(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        idList.push(answers.engineerId);
        console.log(engineer);
        createTeam();
    })
    }   





    function createTeam(){
       inquirer.prompt([
        {
            type:"list",
            name:"memberChoice",
            message:"Which type of team member would you like to add?",
            choises: [
                "Engineer",
                "intern",
                "I don't want to add any more team members"
            ]
        }
    ]).then(userChoice => {
        if(userChoice.memberChoice === "Engineer" ) {
            // Add Engineer
            addEngineer();

        } else if(userChoice.memberChoice === "Intern") {
            // Add Intern
            addIntern();
        } else if {
              //build team function
            buildTeam();
        }
            
            

        })

    }

   }





    function createManager(){
        console.log("Please build your team");
        inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
            validate: answer => {
                if(answer !==""){
                    return true
                }
                return "Please enter at least one character."
            }


        },
            {
                type:"input",
                name:"managersId",
                message:"What is the team manager's id?",
            },
            {
                type:"input",
                name:"managerEmail",
                message:"What is the team manager's email?"

            },
            {
                type:"input",
                name:"managerOfficeNumber",
                message:"What is team manager's office number?"

            },
    ]).then(answer =>{
        const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber);
        console.log(manager);
        teamMembers.push(manager);
        idList.push(answer.managerId);
        createTeam();
    })
    }

    createManager();

}

appMenu();