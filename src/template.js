const template = (team) => {
    console.log(team)
    const htmlArr = []
    //Create manager function card
    const manager = team.filter((employee) => employee.getRole() === "Manager").map((manager) => {
        return `
        <div class="card employee-card" style="width: 20rem">
            <div class="card-header bg-dark text-white">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Employee ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
           
        </div>
           `
    })

    htmlArr.push(manager)

    //Create engineer function card
    const engineer = team.filter((employee) => employee.getRole() === "Engineer").map(engineer => {
        return `
        <div class="card employee-card" style="width: 20rem">
        <div class="card-header bg-dark text-white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
        `
    })

    htmlArr.push(engineer)

    //Create intern function card
    const intern = team.filter((employee) => employee.getRole() === "Intern").map((intern) => {
        return `
        <div class="card employee-card" style="width: 20rem">
        <div class="card-header bg-dark text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Employee ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `
    })
    htmlArr.push(intern)


    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css"/>
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
    <div class="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading bg-info">
            <h1 class="text-center text-white">My Team</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="row team-area col-12 d-flex justify-content-center">
        ${htmlArr.join("")}
        </div>
    </div>
</div>
    </body>
    </html>

    `
}
module.exports = template

