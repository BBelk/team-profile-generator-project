// PROVIDED BY INSTRUCTOR 2022-09-09
// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class = "col-sm-3 mx-5 my-2 card px-0 shadow" style="width: 22rem;">
            <div class="card-body p-0  bg-primary rounded-top justify-content-center">
                <div class="card-title text-white ps-3 mt-2">
                    <h2>${manager.getName()}</h2>
                    <h3>
                        <i class="fas fa-mug-hot mr-2"></i>  ${manager.getRole()}
                    </h3>
                    </div>
            </div>
            <div class="bg-muted">
                <ul class="list-group p-2">
                    <li class="list-group-item">
                        ID: ${manager.getId()}
                    </li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                    </li>
                    <li class="list-group-item">
                        Office number: ${manager.getOfficeNumber()}
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class = "col-sm-3 mx-5 my-2 card px-0 shadow" style="width: 22rem;">
            <div class="card-body p-0  bg-primary rounded-top justify-content-center">
                <div class="card-title text-white ps-3 mt-2">
                <h2>${engineer.getName()}</h2>
                <h3>
                    <i class="fas fa-glasses mr-2"></i>  ${engineer.getRole()}
                </h3>
                </div>
            </div>
            <div class="bg-muted">
                <ul class="list-group p-2">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                    </li>
                    <li class="list-group-item">
                        GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a>
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class = "col-sm-3 mx-5 my-2 card px-0 shadow" style="width: 22rem;">
            <div class="card-body p-0 bg-primary rounded-top justify-content-center" >
                <div class="card-title text-white ps-3 mt-2">
        <h2>${intern.getName()}</h2>
        <h3>
            <i class="fas fa-user-graduate mr-2"></i>  ${intern.getRole()}
        </h3>
        </div>
    </div>
    <div class="bg-muted">
        <ul class="list-group p-2">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans&display=swap" rel="stylesheet">
<style>
body {
    font-family: 'Merriweather Sans', sans-serif;
}
</style>
    </head>
    <body>
        <header>
        <div id="navbar">
        <nav class="navbar navbar-info bg-danger" style="margin-bottom:20px">
          <span class="navbar-text text-center w-100 text-white" style="font-size:50px ">
            My Team
          </span>
        </nav>
      </div>
        </header>
        <main>
            <div class = "row justify-content-center pt-5 mx-5">
                ${generateTeam(team)}
            </div>
        </main>
    </body>
</html>
    `;
};
