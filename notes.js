const fs = require('fs');
const chalk = require('chalk');
const { conflicts } = require('yargs');

const addNote = (title,body) => {
    const notes = loadNotes();
    const dublicateNote = notes.find((note) => note.title === title);

    if(!dublicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green('new note added'));
    }
    else {
        console.log(chalk.red('note title taken !'));
    }
}

const saveNotes =  (notes) => {
    const dataJson  = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }catch (e) {
        return [];
    }
}

const removeNotes=(title) => {
    const notes = loadNotes();
    const notMatchedTitle = notes.filter((note) => note.title !== title);

    if(notes.length > notMatchedTitle.length){
        console.log(chalk.bgGreen('note removed !'));
        saveNotes(notMatchedTitle);
    }
    else {
        console.log(chalk.bgRed('no note found !'));
    }
};

const listNotes = function(title) {
    console.log(chalk.inverse('your notes: '));
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }
    else {
        console.log('no note found');
    }
}

module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote,
}