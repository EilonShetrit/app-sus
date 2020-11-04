import { appSusService } from '../../../services/util-service.js'

export const missKeepService = {
    getNotes,
    getNoteById
}

//--MODEL--//

function getNotes() {
    return createNotes();
}

function createNotes() {
    const notes = []
    notes.push(noteTxt('Audu Mea'));
    notes.push(noteImg('FiakIbasa'));
    notes.push(noteTodos('Subali,Pesha'));
    notes.push(noteVidoe('MitsuBashi'));
    return Promise.resolve(notes);
}

function getNoteById(noteId) {
    const note = notes.find(note => note.id === noteId)
    return Promise.resolve(note)
}


function noteTxt(txt,title) {
    const note = {
        type: 'NoteText',
        id: appSusService.makeId(),
        isPinned: false,
        info: {
            txt,
            title
        }
    }
    return note;
}

function noteImg(url, title) {
    const note = {
        type: 'NoteImg',
        id: appSusService.makeId(),
        info: {
            txt: url,
            title
        },
        style: {
            backgroundColor: '#00d'
        }
    }
    return note
}

function noteTodos(txt,title) {
    const todosTxt = txt.split(',');
    const note = {
        type: 'NoteTodos',
        id: appSusService.makeId(),
        info: {
            title,
            todos: []
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

function noteVidoe(url,title) {
    const note = {
        type: 'NoteVideo',
        id: appSusService.makeId(),
        info: {
            txt: url,
            title
        }
    }
    return note;
}


