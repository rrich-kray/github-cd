const inquirer = require('inquirer') // gives you access to inquirer through a variable called inquirer
const fs = require('fs')

const promptUser = () => {
    return prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) return true;
                else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages do you know?',
            choices: [
                'JavaScript',
                'HTML',
                'CSS',
                'Bootstrap',
                'Python',
                'Java',
                'C#'
            ] 
        }
    ])
    .then(answers => {
        console.log(answers);
        fs.writeFile(answers.name + '.json', JSON.stringify(answers, null, '\t'), err => { // the third argument in JSON.stringify formats the file. Spaces are tabs
            if (err) console.log(err);
            else console.log('Success!');
        })
    })
}

// if you do not evoke the JSON.stringify method, [Object object] will be returned, because the default .toString() method will be invoked on the object instead