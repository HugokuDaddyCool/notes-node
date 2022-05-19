console.log('Starting notes.js');

var fs = require('fs');

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};
var getAll = () => {
    console.log('Getting all notes');
};
var getNote = (title) => {
    console.log('Reading note with title ', title);
};
var removetNote = (title) => {
    console.log('Removing note with title ', title);
};

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('note-data.json');
        return JSON.parse(notesString);
    } catch (e) {
    }
    return [];
}

var saveNotes = (notes) => {
    fs.writeFileSync('note-data.json', JSON.stringify(notes));    
}



module.exports = {
    addNote,
    getAll,
    getNote,
    removetNote
};
