import { appSusService } from '../../../services/util-service.js'

export const missKeepService = {
    getNotes,
    remove,
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
    createNoteText('Audu Mea');
    createNoteImg('https://www.photo-art.co.il/wp-content/uploads/2015/07/BY1A5781.jpg');
    createNoteTodos('Subali,Pesha');
    createNoteVideo('https://www.youtube.com/v/a12Qfcci9Ro');
}

function getNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note)
}

function createNoteText(txt) {
    const note = {
        type: 'note-text',
        id: appSusService.makeId(),
        isPinned: false,
        info: {
            txt,
            title: null
        },
        style: {
            backgroundColor: "#00d"
        }
    }
    gNotes.push(note)
}

function createNoteImg(url) {
    const note = {
        type: 'note-img',
        id: appSusService.makeId(),
        info: {
            txt: url,
            title: null

        },
        style: {
            backgroundColor: '#00d'
        }
    }
    gNotes.push(note)
}

function createNoteTodos(txt) {
    const todosTxt = txt.split(',');
    const note = {
        type: 'note-todos',
        id: appSusService.makeId(),
        info: {
            todos: [],
            title: null
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

function createNoteVideo(url) {
    const note = {
        type: 'note-video',
        id: appSusService.makeId(),
        info: {
            txt: url,
            title: null
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
    return Promise.resolve()
}
// function edit(noteId) {
//     const note = gNotes.findIndex(note => note.id === noteId);
    
// }
