function getTimeInFormat (inputDate) {
    const myDate = new Date (inputDate)
    const month = convertMonth (myDate.getMonth() )
    const  date =  myDate.getDate ()
    const year  = myDate.getFullYear ()
    return {
        month,
        date,
        year
    }
}

function convertMonth (monthNumber) {
    switch (monthNumber) {
        case 0 : {
            return  "January"
            break;
        }
        case 1 : {
            return  "February"
            break;
        }
        case 2 : {
            return  "March"
            break;
        }
        case 3 : {
            return  "April"
            break;
        }
        case 4 : {
            return  "May"
            break;
        }
        case 5 : {
            return  "June"
            break;
        }
        case 6 : {
            return  "July"
            break;
        }
        case 7 : {
            return  "August"
            break;
        }
        case 8 : {
            return  "September"
            break;
        }
        case 9 : {
            return  "October"
            break;
        }
        case 10 : {
            return  "November"
            break;
        }
        case 11 : {
            return  "December"
            break;
        }
        default: {
            return "Please input a valid month number!!"
        }
    }
}

export {
    getTimeInFormat
}