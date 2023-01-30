let date = new Date();

function getDayFromNumber(num) {
  let dayWeek = "";
  switch (num) {
    case 0:
      dayWeek = "sunday";
      break;
    case 1:
      dayWeek = "monday";
      break;
    case 2:
      dayWeek = "tuesday";
      break;
    case 3:
      dayWeek = "wednesday";
      break;
    case 4:
      dayWeek = "thursday";
      break;
    case 5:
      dayWeek = "friday";
      break;
    case 6:
      dayWeek = "saturday";
      break;
  }

  return dayWeek;
}

function getArrDate(minutes) {
  return [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    getDayFromNumber(date.getDay()),
    minutes   
  ];
}

function getSumTime (arr){
  return arr.reduce((acc, cur)=> acc + cur.minutes, sum);
}



module.exports = { getArrDate, getDayFromNumber, getSumTime};
