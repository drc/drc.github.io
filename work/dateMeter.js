function nice() {
    var today = new Date();
    var hour = (today.getHours());
    (hour <= 12) ? hour = hour: hour = hour - 12;
    var minutes = (today.getMinutes());
    var minper = ((minutes / 60) * 100);
    minper = Math.round((minper) * 100) / 100;
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
    var am9 = 7 * 60 + 59;
    var pm5 = 17 * 60;
    var minCurrent = (today.getHours() - 8) * 60 + today.getMinutes();
    //console.log(minCurrent);
    if (today.getHours() * 60 + today.getMinutes() > am9 && today.getHours() * 60 + today.getMinutes() < pm5) {
        minDay = minCurrent / 540;
    } else {
        minDay = 1;
    }
    var dayPer = (minDay * 100);
    dayPer = Math.round(dayPer * 100) / 100;

    //minDay * 7 = min per week
    var minWeek = 2700;
    //console.log(minWeek);
    if (today.getDay() > 0 && today.getDay() < 6) {
        minWeek = (((today.getDay() - 1) * 540) + minCurrent) / minWeek;
    } else {
        minWeek = 1;
    }

    var weekPer = (minWeek * 100);
    weekPer = Math.round(weekPer * 100) / 100;

    //minDay * d = min per month
    var minMonth = d * 24 * 60;
    minMonth = (minCurrent + ((day - 1) * 60 * 24)) / minMonth;
    var monthPer = (minMonth * 100);
    monthPer = Math.round(monthPer * 100) / 100;

    // minDay * 365 = min per year
    var minYear = 24 * 60 * 365;
    //console.log(minYear);
    minYear = (today.getHours() * 60 + today.getMinutes() + ((day - 1) * 60 * 24)) / minYear;

    var yearPer = (minYear * 100);
    yearPer = Math.round(yearPer * 100) / 100;

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

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

function checkWeek(w) {
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
