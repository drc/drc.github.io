function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function checkWeek(w) {
  var day;
  switch (w) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  return day;
}

function checkMonth(m) {
  switch (m) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }
  return month;
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function nice() {
  var today = new Date();
  var hour = (today.getHours());
  if (hour > 12) {
    hour = hour - 12;
  }
  var minutes = (today.getMinutes());
  var minper = ((minutes / 60) * 100);
  minper = Math.round(minper * 100) / 100;
  minutes = checkTime(minutes);
  var seconds = (today.getSeconds());
  seconds = checkTime(seconds);
  var mil = today.getMilliseconds();
  var day = (today.getDate());
  var week = (today.getDay());
  week = checkWeek(week);
  var month = (today.getMonth());
  month = checkMonth(month);
  var year = today.getFullYear();
  var time = today.getTime();
  var d = daysInMonth(today.getMonth(), today.getYear());

  //24*60 = min per day
  var minDay = 24 * 60;
  var minCurrent = today.getHours() * 60 + today.getMinutes();
  minDay = minCurrent / minDay;
  var dayPer = (minDay * 100);
  dayPer = Math.round(dayPer * 100) / 100;

  //minDay * 7 = min per week
  var minWeek = 24 * 60 * 7;
  minWeek = (minCurrent + today.getDay() * 24 * 60) / minWeek;
  var weekPer = (minWeek * 100);
  weekPer = Math.round(weekPer * 100) / 100;

  //minDay * d = min per month
  var minMonth = d * 24 * 60;
  minMonth = (minCurrent + ((day - 1) * 60 * 24)) / minMonth;
  var monthPer = (minMonth * 100);
  monthPer = Math.round(monthPer * 100) / 100;

  // minDay * 365 = min per year
  var now = new Date();
  //console.log(now, 'now');
  var start = new Date(now.getFullYear(), 0, 0);
  //console.log(start,'start');
  var diff = now - start;
  //console.log(diff,'diff');
  var oneDay = 1000 * 60 * 60 * 24;
  var yearDay = Math.floor(diff / oneDay);
  yearPer = Math.round(((yearDay/365)*100) * 100)/100;

  $("div#hour").html(hour + ':' + minutes + ':' + seconds);
  $("div#hourPer").html(minper + '%');
  //3600000
  $('#hourBar').attr('value', minper);
  $('div#day').html(day);
  $("div#dayPer").html(dayPer + '%');
  $('#dayBar').attr('value', dayPer);
  $('div#week').html(week);
  $("div#weekPer").html(weekPer + '%');
  $('#weekBar').attr('value', weekPer);
  $('div#month').html(month);
  $("div#monthPer").html(monthPer + '%');
  $('#monthBar').attr('value', monthPer);
  $('div#year').html(year);
  $("div#yearPer").html(yearPer + '%');
  $('#yearBar').attr('value', yearPer);

  var t = setTimeout(function() {
    nice()
  }, 1000);
}