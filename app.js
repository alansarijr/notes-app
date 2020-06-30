const chalk = require('chalk');
const notes = require('./notes.js')
const yargs = require('yargs');
const fs = require('fs');
const { showCompletionScript, string } = require('yargs');
const { argv } = require('process');
yargs.version('1.0.0');

// Create Add Command 
yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "note body",
            demandOption: true,
            type: "string",
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    },
});
// create remove command 
yargs.command({
    command: "remove",
    describe:"remove a note",
    builder: {
        title: {
            descripe: 'note title',
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) =>{
        notes.removeNotes(argv.title);
    }
});
// create list command 
yargs.command({
    command: 'list',
    describe: 'lists all the notes',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => {
        notes.listNotes();
    }
});
// create read command 
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => {
         notes.readNote(argv.title);
    }
});
yargs.parse();
//console.log(yargs.argv);