# Team Profile Generator

  ## Table of contents
  1. [Submission](#submission)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Tests](#tests)
  6. [Visuals](#visuals)

  ## Submission
  [Link to generated html page code](https://github.com/BBelk/team-profile-generator-project/blob/main/index.html)
  
  [Link to live generated html page on GitHub pages](https://bbelk.github.io/team-profile-generator-project/)

  [Link to walthrough screencastify video](https://watch.screencastify.com/v/0tedGRPeDhIo5IEc2QF3)


  ## Description
  This is a program that contructs an html page with information of a team of employees that the user builds. The team consists of a Manager, and then any number of Engineers and Interns. It accomplishes this through a series of prompts using inquirer and the command prompt.

  The classes of the types of employees are also tested with jest.
  ## Installation
  Navigate to the index.js and run npm init, then run npm install inquirer@8.2.4.

  To install jest, go to index.js and run npm i jest.
  ## Usage
  Navigate to the directory containing index.js and run node index.js. After completing the prompts, the generated page with the team is put in the /dist/ directory in a file named team.html.
  ## Tests
  Tests can be performed on the employee classes in the _test_ directory. First, install jest(see installation section), then run npm jest in gitbash.
  ## Visuals

 ![Alt text](./instruct\Assets\BruceBelk-myTeam.png "Generated HTML Page Screenshot")