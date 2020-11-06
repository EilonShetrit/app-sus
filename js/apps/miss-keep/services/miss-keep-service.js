import { appSusService } from '../../../services/util-service.js'

export const missKeepService = {
    getNotes,
    remove,
    update,
    getNoteById,
    createNotes,
    createNoteText,
    createNoteImg,
    createNoteTodos,
    createNoteVideo,
    
}

//--MODEL--//
const gNotes = [];

function getNotes() {
    return Promise.resolve(gNotes)
}
createNotes()
function createNotes() {
    createNoteText('Audu Mea', 'My new car');
    createNoteImg('https://www.photo-art.co.il/wp-content/uploads/2015/07/BY1A5781.jpg', 'Desktop picture');
    createNoteTodos('Buy PS5, Clean the house', 'Todo things');
    createNoteVideo('https://www.youtube.com/v/a12Qfcci9Ro', 'Watch later');
}

function getNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note)
}

function createNoteText(txt,title) {
    const note = {
        type: 'note-text',
        id: appSusService.makeId(),
        isPinned: false,
        info: {
            txt,
            title
        },
        style: {
            backgroundColor: "#00d"
        }
    }
    gNotes.push(note)
}

function createNoteImg(url,title) {
    const note = {
        type: 'note-img',
        id: appSusService.makeId(),
        isPinned: false,
        info: {
            txt: url,
            title

        },
        style: {
            backgroundColor: '#00d'
        }
    }
    gNotes.push(note)
}

function createNoteTodos(txt,title) {
    const todosTxt = txt.split(',');
    const note = {
        type: 'note-todos',
        id: appSusService.makeId(),
        isPinned: false,
        info: {
            title,
            todos: []
        },
        style: {
            backgroundColor: "#00d"
        }
    }
    for (let i = 0; i < todosTxt.length; i++) {
        note.info.todos[i] = {
            txt: todosTxt[i],
            doneAt: null
        }
    }
    gNotes.push(note)
}

function createNoteVideo(url,title) {
    const note = {
        type: 'note-video',
        id: appSusService.makeId(),
        isPinned: false,
        info: {
            txt: url,
            title
        },
        style: {
            backgroundColor: "#00d"
        }
    }
    gNotes.push(note)
}

function remove(noteId) {
    const idx = gNotes.findIndex(note => note.id === noteId);
    gNotes.splice(idx, 1);
    return Promise.resolve(gNotes)
}
function update(note) {
    const idx = gNotes.findIndex(currNote => currNote.id === note.id);
    gNotes.splice(idx, 1, note);
    return Promise.resolve(gNotes)
}
