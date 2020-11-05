
import {appSusService} from '../../../services/util-service.js'
export const demeInfoService = {
    createMails
}

function createMails(){
    var gMails=[]
    gMails.push(_createMail(1))
    gMails.push(_createMail(2))
    gMails.push(_createMail(3))
    gMails.push(_createMail(4))
    return Promise.resolve(gMails)
}



function _createMail(val){
    return {
        from:'aviv',
        subject :`wassap? ${val}`,
        body:'pic UP!',
        isRead:false,
        email: '<email>',
        sentAt :(new Date().toLocaleDateString()),
        // sentAt :new Date,
        id :appSusService.makeId()
    }
}