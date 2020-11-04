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




// 4 different notes functions

function noteTxt(txt) {
    const note = {
        type: 'NoteText',
        id: appSusService.makeId(),
        isPinned: false,
        info: {
            txt
        }
    }
    return note;
}

function noteImg(txtUrl) {
    const note = {
        type: 'NoteImg',
        id: appSusService.makeId(),
        info: {
            url: txtUrl,
            title: 'Me playing Mi'
        },
        style: {
            backgroundColor: '#00d'
        }
    }
    return note
}

function noteTodos(txt) {
    var todos = txt.split(',');

    const note = {
        type: 'NoteTodos',
        id: appSusService.makeId(),
        info: {
            label: 'How was it:',
            todos: [
                {
                    txt: todos[0],
                    doneAt: null
                },
                {
                    txt: todos[1],
                    doneAt: null
                }
            ]
        }
    }
    return note;
}

function noteVidoe(txtUrl) {
    const note = {
        type: 'NoteVideo',
        id: appSusService.makeId(),
        info: {
            url: txtUrl,
            title: 'Me playing Mi'
        }
    }
    return note;
}



