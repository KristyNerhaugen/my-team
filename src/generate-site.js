const fs = require('fs');

// Function to generate the HTML site
function generateSite(data) {
    return `
    <section> 
        <h1> Employee name: ${data.name}</h1>
        <h2> Employee Id Number: ${data.id}</h2>
        <h2> Employee Email: <a href="mailto:${data.email}">${data.email}</a>
    </section>
    `;
}

module.exports = generateSite;