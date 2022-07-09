const fs = require('fs');

// Function that returns engineer/intern information to HTML page only if engineer/intern information is passed in
// If there is no new employee added, return an empty string
function renderEmployeeCard(role) {
    if (role === 'none'|| role === undefined) {
      return '';
    } else if (role === 'Engineer') {
      return ` 
        <div class="card" style="width: 18rem;">
            <div class="card-header font-weight-bold">
                Employee name: ${data.engineerName}
                <br>Engineer
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee Id Number: ${data.engineerId}</li>
                    <li class="list-group-item">Employee Email: <a href="mailto:${data.engineerEmail}">${data.engineerEmail}</a></li>
                    <li class="list-group-item">Engineer GitHub Account: <a href=https://github.com/${data.gitHub}>${data.gitHub}</a></li>
                </ul>
        </div>`
    } else if (role === 'Intern') {
      return `
        <div class="card" style="width: 18rem;">
            <div class="card-header font-weight-bold">
                Employee name: ${data.internName}
                <br>Intern
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee Id Number: ${data.internId}</li>
                <li class="list-group-item">Employee Email: <a href="mailto:${data.internEmail}">${data.internEmail}</a></li>
                <li class="list-group-item">Intern's school: ${data.school} </li>
            </ul>
        </div>`
    }
  }

// Function to generate the HTML site
function generateSite(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="/Users/kristy/Desktop/BootCamp/my-team/src/style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <h1>My Team</h1>
        <section> 
            <div class="card" style="width: 18rem;">
                <div class="card-header font-weight-bold">
                    Employee name: ${data.managerName}
                    <br>Manager
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee Id Number: ${data.managerId}</li>
                    <li class="list-group-item">Employee Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a></li>
                    <li class="list-group-item">Manager Office Number: ${data.officeNumber}</li>
                </ul>
            </div>
            ${renderEmployeeCard(data.role[0])}
        </section>
    </body>
    `;
}

module.exports = generateSite;