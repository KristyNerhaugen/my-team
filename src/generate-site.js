const fs = require('fs');

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
    </head>
    <body>
        <h1>My Team</h1>
        <section class="card"> 
            <h2> Employee name: ${data.name}</h2>
            <h3> Employee Id Number: ${data.id}</h3>
            <h3> Employee Email: <a href="mailto:${data.email}">${data.email}</a> <h3>
        </section>
    </body>
    `;
}

module.exports = generateSite;