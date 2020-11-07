export const timeToShow = {
    fullDate:showTime
}

function showTime(dateOfMail) {
    
    var currTimeStemp = Date.now()
    var diff = currTimeStemp - dateOfMail.timeStemp
    var timeForDispaly
    if (diff < (1000 * 60 * 60)) {
        var currTimeStemp = Date.now()
        var diff = currTimeStemp - dateOfMail.timeStemp
        timeForDispaly = Math.floor(diff / (1000 * 60))
        return timeForDispaly + ' minutes ago'
    } else if (diff < (1000 * 60 * 60 * 24)) {
        timeForDispaly=new Date(dateOfMail.fullDate).toLocaleString('en-us', { hour: 'numeric', minute: 'numeric', hour12: false })
        return timeForDispaly
    } else if (diff >= (1000 * 60 * 60 * 24)) {
        timeForDispaly=new Date(dateOfMail.fullDate).getDate() + "/"
        +(new Date(dateOfMail.fullDate).getMonth()+1)  + "/" 
        +new Date(dateOfMail.fullDate).getFullYear() 
        // console.log(fullDateForDisplay)
        return timeForDispaly
    }
    console.log (timeForDispaly)
    return timeForDispaly
}