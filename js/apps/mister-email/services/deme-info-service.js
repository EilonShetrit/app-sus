
import { appSusService } from '../../../services/util-service.js'


export const demeInfoService = {
    createMails,
    getEmailById,
    getIdxEmailById
}


function createMails() {
    var loadedEmail = appSusService.loadFromStorage('emailsDB')
    if (!loadedEmail || !loadedEmail.length) {
        loadedEmail = []
        loadedEmail.unshift(_createMail(1))
        loadedEmail.unshift(_createMail(2))
        loadedEmail.unshift(_createMail(3))
        loadedEmail.unshift({
            from: 'haaa',
            subject: `eeeee? `,
            body: 'pic UP!',
            isRead: false,
            email: '<email>',
            isStar: false,
            id: appSusService.makeId(),
            sentAt: {
                timeStemp: 1604665202487,
                fullDate: 'Fri Nov 06 2020 14:25:20 GMT+0200 (Israel Standard Time)'
            }

        })
        loadedEmail.unshift({
            from: 'oaaa',
            subject: `teeee? `,
            body: 'pic UP!',
            isRead: false,
            email: '<email>',
            isStar: false,
            id: appSusService.makeId(),
            sentAt: {
                timeStemp: 1604660202487,
                fullDate: 'Fri Nov 06 2020 14:25:20 GMT+0200 (Israel Standard Time)'
            }
            // appSusService.saveToStorage('emailsDB',loadedEmail)
        })
        loadedEmail.unshift({
            from: 'sssss',
            subject: `bbbb? `,
            body: 'pic UP!',
            isRead: false,
            email: '<email>',
            isStar: false,
            id: appSusService.makeId(),
            sentAt: {
                timeStemp: 1604660902487,
                fullDate: 'Fri Nov 06 2020 14:25:20 GMT+0200 (Israel Standard Time)'
            }
            // appSusService.saveToStorage('emailsDB',loadedEmail)
        })
    }

    appSusService.saveToStorage('emailsDB', loadedEmail)
    return Promise.resolve(loadedEmail)
}

function getEmailById(emailsId) {
    let emails = appSusService.loadFromStorage('emailsDB')
    let email = emails.find(email => email.id === emailsId)

    return Promise.resolve(email)
}

function getIdxEmailById(emailsId) {
    let emails = appSusService.loadFromStorage('emailsDB')
    let emailIdx = emails.findIndex(email => email.id === emailsId)

    return Promise.resolve(emailIdx)
}


function _createMail(val) {
    return {
        from: 'aviv',
        subject: `wassap? ${val}`,
        body: 'pic UP!',
        isRead: false,
        email: '<email>',
        isStar: false,
        sentAt: {
            timeStemp: Date.now(),
            fullDate: new Date()

        },
        id: appSusService.makeId()

    }
}