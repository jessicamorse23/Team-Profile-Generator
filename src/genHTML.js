// card for manager
const generateManagerCard = (manager) => {
  return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fa-regular fa-cup-togo"></i>${manager.getRole()}</h3>
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
    <h3 class="card-title"><i class="fa-solid fa-notebook"></i>${intern.getRole()}</h3>
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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    
    <body>
        <<div class="jumbotron bg-info text-white">
        <h1 class="display-4">My Team!</h1>
      </div>
    
        <main>
        <div class="container">
        <div class="d-flex p-2 bd-highlight">
                  <div class="row justify-content-center">
                  ${employeeCards}
                  </div>
              </div>
              </div>
        </main>
        
    </body>
    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;
};
module.exports = genHTML;
