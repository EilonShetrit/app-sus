import { appSusService } from '../../../services/util-service.js'
const NOTE_DB = 'noteDB'
export const missKeepService = {
    createNotes,
    updeteNotes,
    getNoteById,
    remove,
    update,
    copy,
    createNoteText,
    createNoteImg,
    createNoteTodos,
    createNoteVideo,
}

//--MODEL--//
var gNotes = [];


function createNotes() {
    let loadedNotes = appSusService.loadFromStorage(NOTE_DB)
    if (!loadedNotes  || !loadedNotes .length){
        loadedNotes = []
        loadedNotes.unshift(createNoteText('You must Kapara !!!', 'Get better at Vue'));
        loadedNotes.unshift(createNoteImg('https://www.photo-art.co.il/wp-content/uploads/2015/07/BY1A5781.jpg', 'Desktop picture'));
        loadedNotes.unshift(createNoteTodos('Buy PS5, Clean the house', 'Todo things'));
        loadedNotes.unshift(createNoteVideo('https://www.youtube.com/watch?v=oXx2TczveMI', 'Watch later'));
    }
    gNotes = loadedNotes;
    appSusService.saveToStorage(NOTE_DB, gNotes);
    console.log(gNotes);
    return Promise.resolve(gNotes)
}

function updeteNotes(note){
    gNotes.unshift(note);
    appSusService.saveToStorage(NOTE_DB, gNotes);
    return Promise.resolve(gNotes)
}

function getNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note)
}

function createNoteText(txt, title) {
    const note = {
        type: 'note-text',
        id: appSusService.makeId(),
        isPinned: false,
        info: {
            txt,
            title
        },
        style: {
            backgroundColor: "#FCD581"
        }
    }
    return note;
}

function createNoteImg(url, title) {
    const note = {
        type: 'note-img',
        id: appSusService.makeId(),
        isPinned: false,
        info: {
            txt: url,
            title

        },
        style: {
            backgroundColor: '#FCD581'
        }
    }
    return note;
}

function createNoteTodos(txt, title) {
    let originalTxt = txt;
    const todosTxt = txt.split(',');
    const note = {
        type: 'note-todos',
        fullTxt: originalTxt,
        id: appSusService.makeId(),
        isPinned: false,
        info: {
            title,
            todos: []
        },
        style: {
            backgroundColor: "#FCD581"
        }
    }
    for (let i = 0; i < todosTxt.length; i++) {
        note.info.todos[i] = {
            txt: todosTxt[i],
            doneAt: null,
        }
    }
    return note;
}

function createNoteVideo(url, title) {
    const note = {
        type: 'note-video',
        id: appSusService.makeId(),
        isPinned: false,
        info: {
            txt: url,
            title
        },
        style: {
            backgroundColor: "#FCD581"
        }
    }
    return note;
}

function remove(noteId) {
    let notes = appSusService.loadFromStorage(NOTE_DB)
    const idx = notes.findIndex(note => note.id === noteId);
    notes.splice(idx, 1);
    appSusService.saveToStorage(NOTE_DB, notes);
    return Promise.resolve(notes)
}
function update(note) {
    let currNote = JSON.parse(JSON.stringify(note))
    const idx = gNotes.findIndex(note => note.id === currNote.id);
    gNotes.splice(idx, 1, currNote);
    appSusService.saveToStorage(NOTE_DB, gNotes);
    return Promise.resolve(gNotes)
}
function copy(note) {
    let notes = appSusService.loadFromStorage(NOTE_DB)
    let currNote = JSON.parse(JSON.stringify(note))
    console.log(currNote);
    let newNote;
    const newId = appSusService.makeId();
    switch (currNote.type) {
        case 'note-img':
            newNote = createNoteImg(currNote.info.txt, currNote.info.title);
            break;
        case 'note-todos':
            newNote = createNoteTodos(currNote.fullTxt, currNote.info.title);
            break;
        case 'note-video':
            newNote = createNoteVideo(currNote.info.txt, currNote.info.title);
            break;
        default:
            newNote = createNoteText(currNote.info.txt, currNote.info.title);
    }
    newNote.id = newId;
    notes.unshift(newNote);
    appSusService.saveToStorage(NOTE_DB, notes);
    return Promise.resolve(notes)
}

// function save(note) {
 
// }