const template = (team) => {
    console.log(team)
    const htmlArr = []
     //Create manager function card
    const manager = team.filter ((employee) =>employee.getRole() === "Manager").map((manager) => {
           return `
           <div class='card' style='width: 18rem'>
                <div class="card-body">
                <h1 class="name">${manager.getName()}</h1>
                <div class="title icon mb-2 text-muted">
                <i class="fa-solid fa-mug-hot m-2"></i>
                <h3 class="title icon mb-2 text-muted">${manager.getId()}</h3>
                </div>
                
                </div>
            </div>
           `
    })

    htmlArr.push(manager)

//Create engineer function card
    const engineer = team.filter((employee) => employee.getRole() === "Engineer").map(engineer => {
        return `
        <div>
        <div>${engineer.getName()}</div>
        <div>${engineer.getId()}</div>
        </div>
        `
    })

    htmlArr.push(engineer)

    //Create intern function card
    const intern = team.filter((employee) => employee.getRole() === "Intern").map((intern) => {
        return `
        <div>
        <div>${intern.getName()}</div>
        <div>${intern.getId()}</div>
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
    </head>
    <body>
        ${htmlArr.join("")}
    </body>
    </html>

    `
}
module.exports = template

