let date = new Date();

function getArrDate (){
    return [date.getFullYear(), date.getMonth() + 1, date.getDate(), 
            date.getDay()]
}

exports.getArrDate = getArrDate;