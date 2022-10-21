const template = (team) => {
    console.log(team)
    const htmlArr = []

    const manager = team.filter ((employee) =>employee.getRole() === "Manager").map((manager) => {
           return `
           <div>
            <div>${manager.getName()}</div>
            <div>${manager.getId()}</div>
            </div>
           `
    })

    htmlArr.push(manager)


    const engineer = team.filter((employee) => employee.getRole() === "Engineer").map(engineer => {
        return `
        <div>
        <div>${engineer.getName()}</div>
        <div>${engineer.getId()}</div>
        </div>
        `
    })

    htmlArr.push(engineer)
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
        <title>Document</title>
    </head>
    <body>
        ${htmlArr.join("")}
    </body>
    </html>

    `
}
module.exports = template

