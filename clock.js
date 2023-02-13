function realtimeClock() {
  var clock = new Date();
  var hours = clock.getHours();
  var minutes = clock.getMinutes();
  //var seconds = clock.getSeconds();

  // Add AM / PM system
  var ampm = (hours<12)? "AM" : "PM";

  //convert hours to 12-hour format
  hours = (hours>12)? hours-12 : hours;

  minutes = (minutes>=10)? minutes : "0" + minutes;

  month = clock.getMonth()+1;
  switch(month) {
    case 1: month="Jan"; break;
    case 2: month="Feb"; break;
    case 3: month="Mar"; break;
    case 4: month="Apr"; break;
    case 5: month="May"; break;
    case 6: month="June"; break;
    case 7: month="July"; break;
    case 8: month="Aug"; break;
    case 9: month="Sep"; break;
    case 10: month="Oct"; break;
    case 11: month="Nov"; break;
    case 12: month="Dec"; break;
  }
  date = clock.getDate();
  day = clock.getDay();
  switch(day) {
    case 1: day="Mon"; break;
    case 2: day="Tue"; break;
    case 3: day="Wed"; break;
    case 4: day="Thu"; break;
    case 5: day="Fri"; break;
    case 6: day="Sat"; break;
    case 0: day="Sun"; break;
  }

  document.getElementById('clock').innerHTML =
    hours + ":" + minutes + " " + ampm
    + "<br>" + day+" "+date+" "+month ;
  setTimeout(realtimeClock, 5000)
}