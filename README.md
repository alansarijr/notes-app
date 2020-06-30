# **notes-app**

### Please Unpack the node_modules.rar so the program works, </br> This is a taking notes program (no gui), its my first node.js app so i hope u like it.

## Important things to download:

1. nodejs

## The Commands
### 1. add
##### the add command adds a new note to the note db i used json file to store notes in.
#### the usage :
`node app.js add --title"the note title" --body="the node body"` </br>

### 2. remove
##### the remove command removes a note from the notes db
#### the usage :
`node app.js remove --title"the note title"`

### 3. list
##### this command lists all the notes by title in the db.
#### the usage :
`node app.js list`

### 4. read
##### this command shows the title and the body of a note by passing to it the note title.
#### the usage :
`node app.js read --title="the note title`

### the node.js modules that i used:
#### 1. fs  - to have the ability of dealing with files in the system
#### 2. [chalk](https://www.npmjs.com/package/chalk) - to add some coloring to the console
#### 3. [yargs](https://www.npmjs.com/package/yargs) - to have the ability to take input from user and parse the user passed data.


> at the end i hope u like it and dont forget to give your opinion
