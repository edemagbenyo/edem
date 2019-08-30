#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const opn = require('open');
const edem = require('./src/edem');

program.version('0.0.1')
    .description('Edem on your command-line')
    .parse(process.argv);

console.log(edem.bio);
inquirer.prompt({
    name: 'link',
    type: 'list',
    message: edem.prompt,
    choices: edem.links.concat({
        'name': `...Or shoot me an email (${edem.email})`,
        'value': 'mailto:' + edem.email
    })
}).then(answers => {
    console.log(`Opening ${answers.link}`);
    opn(answers.link);
});