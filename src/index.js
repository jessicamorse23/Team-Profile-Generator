// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
// write the classes: employee, manager, intern
// write the command line app that collects the info
// write some code that, based on the info collected from command line, generates an HTML file

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
let employees = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "Manager Name:",
      name: "name",
    },
    {
      type: "input",
      message: "Manager ID",
      name: "id",
    },
    {
      type: "input",
      message: "Manager Email",
      name: "email",
    },
    {
      type: "number",
      message: "Manager Office Number",
      name: "officeNumber",
    },
  ])
  .then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    employees.push(manager);
    addNewMember();
  });

function addNewMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you want to add an Intern or Engineer or stop?",
        name: "choice",
        choices: ["Intern", "Engineer", "stop"],
      },
    ])
    .then((answers) => {
      if (answers.choice === "Intern") {
        askForIntern();
      } else if (answers.choice === "Engineer") {
        askForEngineer();
      } else if (answers.choice === "stop") {
        stop();
      }
    });
}
function askForIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Intern Name:",
        name: "name",
      },
      {
        type: "input",
        message: "Intern ID",
        name: "id",
      },
      {
        type: "input",
        message: "Intern Email",
        name: "email",
      },
      {
        type: "input",
        message: "School",
        name: "school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      employees.push(intern);
      console.log(employees);
      addNewMember();
    });
}

function askForEngineer() {
  inquirer
    .prompt([
      { type: "input", message: "Engineer Name:", name: "name" },
      {
        type: "input",
        message: "Engineer ID",
        name: "id",
      },
      {
        type: "input",
        message: "Engineer Email",
        name: "email",
      },
      {
        type: "input",
        message: "GitHub username",
        name: "github",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      employees.push(engineer);
      addNewMember();
    });
}
function stop() {
  console.log("stop");
  const HTMLcontent = readytoRender(employees);
  console.log(HTMLcontent); 
  }

  // Create the html for the web page
  // let html = genHtml(employees);

function readytoRender() {
  let HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
</head>
<body>
<div class="jumbotron">
<h1 class="display-4">My Team</h1>
<div class="container">
<div class="row">
</div>
</div>
</div>
</body>`;

for (let e of employees) {
  HTML += e.renderCard();
}
return HTML;
};
