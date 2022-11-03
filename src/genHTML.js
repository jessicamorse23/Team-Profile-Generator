// card for manager
const generateManagerCard = (manager) => {
  return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
    `;
};
// card for engineer
const generateEngineerCard = (engineer) => {
  return `
  <div class="card employee-card">
  <div class="card-header">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-title"><i class="fa-solid fa-desktop"></i>${engineer.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
      </ul>
  </div>
</div>
      `;
};
// card for Intern
const generateInternCard = (intern) => {
  return `
    <div class="card employee-card">
<div class="card-header">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title"><i class="fa-solid fa-book"></i>${intern.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>
</div>
    `;
};

genHTML = (data) => {
  pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = generateManagerCard(employee);

      pageArray.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = generateEngineerCard(employee);

      pageArray.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = generateInternCard(employee);

      pageArray.push(internCard);
    }
  }

  const employeeCards = pageArray.join("");

  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};
const generateTeamPage = function (employeeCards) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <script src="https://kit.fontawesome.com/c29c44467e.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100;200;300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
        <<div class="jumbotron bg-info text-white">
        <h1 class="display-4">My Team!</h1>
        </div>
        <div class="container">
        <div class="row justify-content-md-center">
    ${employeeCards}
    </div>
  </div> 
    </body>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
  `;
};
module.exports = genHTML;
