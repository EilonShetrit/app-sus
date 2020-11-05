import { appSusService } from '../../../services/util-service.js'

export const missKeepService = {
    getNotes,
    getNoteById,
    createNotes,
    createNoteText,
    createNoteImg,
    createNoteTodos,
    createNoteVideo
}

//--MODEL--//
const gNotes =  [];

function getNotes() {
    return Promise.resolve(gNotes)
}
createNotes()
function createNotes() {
    gNotes.push(createNoteText('Audu Mea'));
    gNotes.push(createNoteImg('Fiak Ibasa'));
    gNotes.push(createNoteTodos('Subali,Pesha'));
    gNotes.push(createNoteVideo('https://www.youtube.com/watch?v=oXx2TczveMI'));
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
    return note;
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
    return note
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
    for(let i=0; i< todosTxt.length; i++){
        note.info.todos[i] = {
            txt: todosTxt[i],
            doneAt: null
        }
    }
    return note; 
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
    return note;
}


