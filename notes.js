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
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNote = notes.filter((note) => note.title === title);
    return filteredNote[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteresNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteresNotes);
    return notes.length !== filteresNotes.length;
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

var logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
