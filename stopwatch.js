function stopwatch() {
  var time_start = new Date();

  var starting_hour = time_start.getHours();
  var starting_minute = time_start.getMinutes();
  starting_minute = (starting_minute>=10)? starting_minute : "0" + starting_minute;
  var starting_ampm = (starting_hour<12)? "am" : "pm";
  starting_hour = (starting_hour>12)? starting_hour-12 : starting_hour;


  var seconds = 0;
  var minutes = 0;
 
  function time_update() {
    var delta = new Date() - time_start; // ms elapsed since start
    delta = Math.floor(delta / 1000);

    if (delta < 10) {
      seconds = "0"+delta;
    } else if (delta <60) {
      seconds = delta;
    } else {
      minutes = Math.floor(delta/60)
      seconds = delta % 60;
      seconds = (seconds>9)? seconds : "0"+seconds;
    }
    document.getElementById("stopwatch").innerHTML
      = minutes+":"+seconds
      +" (Since "+starting_hour+":"+starting_minute+" "+starting_ampm+")";
  }
  time_update()
  setInterval(time_update, 1000);
}