const validator = require("validator");
const chalk = require("chalk");
//packege for getting arguments
const yargs = require("yargs");
const addNote = require("./notes.js");
const notes = require("./notes.js");
const { title } = require("process");
// const note = addNote("Just keep swimming");

//get argument without library 
const command = process.argv[2];

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true, 
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  },
});

// Create remove command
yargs.command({ 
  command: "remove",
  describe: "Remove the note",
  builder:{
      title:{
        describe:'Note title',
        demandOption: true,
        type:'string'
      }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your note",
  handler() {
    notes.listNotes()
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read your note",
  builder:{
    title:{
      describe:'Note Title',
      demandOption:true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  },
});

yargs.parse();
