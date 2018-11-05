var PERSIAN_EPOCH = 1948320.5;
var GREGORIAN_EPOCH = 1721425.5;
var PERSIAN_WEEKDAYS_EN = new Array("Yekshanbeh", "Doshanbeh", "Seshhanbeh", "Chaharshanbeh", "Panjshanbeh", "Jomeh", "Shanbeh");
var PERSIAN_WEEKDAYS_INT = new Array(2, 3, 4, 5, 6, 7, 1);
var PERSIAN_WEEKDAYS_FA = new Array("یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه");
var GREGORIAN_WEEKDAYS_EN = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var PERSIAN_MONTHS_FA = new Array("فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند");
var PERSIAN_MONTHS_EN = new Array("Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand");
var GREGORIAN_MONTHS_EN = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var GREGORIAN_MONTHS_FA = new Array("ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئيه", "اوت", "سپتامبر", "اكتبر", "نوامبر", "دسامبر");
var ShamsiCurrentYear, ShamsiCurrentMonth, ShamsiCurrentDay;

function persian_to_jd(year, month, day) {
    var epbase, epyear;
    epbase = year - ((year >= 0) ? 474 : 473);
    epyear = 474 + mod(epbase, 2820);
    return day + ((month <= 7) ? ((month - 1) * 31) : (((month - 1) * 30) + 6)) + Math.floor(((epyear * 682) - 110) / 2816) + (epyear - 1) * 365 + Math.floor(epbase / 2820) * 1029983 + (PERSIAN_EPOCH - 1);
}

function gregorian_to_jd(year, month, day) {
    return (GREGORIAN_EPOCH - 1) + (365 * (year - 1)) + Math.floor((year - 1) / 4) + (-Math.floor((year - 1) / 100)) + Math.floor((year - 1) / 400) + Math.floor((((367 * month) - 362) / 12) + ((month <= 2) ? 0 : (leap_gregorian(year) ? -1 : -2)) + day);
}

function jd_to_persian(jd) {
    var year, month, day, depoch, cycle, cyear, ycycle, aux1, aux2, yday;
    jd = Math.floor(jd) + 0.5;
    depoch = jd - persian_to_jd(475, 1, 1);
    cycle = Math.floor(depoch / 1029983);
    cyear = mod(depoch, 1029983);
    if (cyear == 1029982) {
        ycycle = 2820;
    } else {
        aux1 = Math.floor(cyear / 366);
        aux2 = mod(cyear, 366);
        ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) + aux1 + 1;
    }
    year = ycycle + (2820 * cycle) + 474;
    if (year <= 0) {
        year--;
    }
    yday = (jd - persian_to_jd(year, 1, 1)) + 1;
    month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
    day = (jd - persian_to_jd(year, month, 1)) + 1;
    return new Array(year, month, day);
}

function jd_to_gregorian(jd) {
    var wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad, yindex, dyindex, year, yearday, leapadj;
    wjd = Math.floor(jd - 0.5) + 0.5;
    depoch = wjd - GREGORIAN_EPOCH;
    quadricent = Math.floor(depoch / 146097);
    dqc = mod(depoch, 146097);
    cent = Math.floor(dqc / 36524);
    dcent = mod(dqc, 36524);
    quad = Math.floor(dcent / 1461);
    dquad = mod(dcent, 1461);
    yindex = Math.floor(dquad / 365);
    year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
    if (!((cent == 4) || (yindex == 4))) {
        year++;
    }
    yearday = wjd - gregorian_to_jd(year, 1, 1);
    leapadj = ((wjd < gregorian_to_jd(year, 3, 1)) ? 0 : (leap_gregorian(year) ? 1 : 2));
    month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
    day = (wjd - gregorian_to_jd(year, month, 1)) + 1;
    return new Array(year, month, day);
}

function mod(a, b) {
    return a - (b * Math.floor(a / b));
}

function jwday(j) {
    return mod(Math.floor((j + 1.5)), 7);
}

function leap_gregorian(year) {
    return ((year % 4) == 0) && (!(((year % 100) == 0) && ((year % 400) != 0)));
}

function MiladiToShamsiArray(year, month, day) {
    var now = new Date(Date.now());
    if (typeof year === 'undefined' || year === null)
        year = now.getFullYear();
    if (typeof month === 'undefined' || month === null)
        month = now.getMonth() + 1;
    if (typeof day === 'undefined' || day === null)
        day = now.getDate();
    return jd_to_persian(gregorian_to_jd(year, month, day));
}

function MiladiToShamsiString(year, month, day) {
    var now = new Date(Date.now());
    if (typeof year === 'undefined' || year === null)
        year = now.getFullYear();
    if (typeof month === 'undefined' || month === null)
        month = now.getMonth() + 1;
    if (typeof day === 'undefined' || day === null)
        day = now.getDate();
    var arr = jd_to_persian(gregorian_to_jd(year, month, day));
    arr[1] = arr[1] < 10 ? '0' + arr[1] : arr[1];
    arr[2] = arr[2] < 10 ? '0' + arr[2] : arr[2];
    return arr.join('/');
}

function GetShamsiDayInMonth(year, month) {
    var now = MiladiToShamsiArray();
    if (typeof year === 'undefined' || year === null)
        year = now[0];
    if (typeof month === 'undefined' || month === null)
        month = now[1];
    if (month <= 6 && month >= 1)
        return 31;
    else if (month >= 7 && month <= 11)
        return 30;
    else if (month == 12)
        return mod(Math.abs(year - 1395), 4) == 0 ? 30 : 29;
}

function GetShamsiMonthStartDay(year, month) {
    var now = MiladiToShamsiArray();
    if (typeof year === 'undefined' || year === null)
        year = now[0];
    if (typeof month === 'undefined' || month === null)
        month = now[1];
    var arr = jd_to_gregorian(persian_to_jd(year, month, 1));
    return PERSIAN_WEEKDAYS_INT[new Date(arr[0], arr[1] - 1, arr[2]).getDay()];
}

function GetShamsiMonthFinishDay(year, month) {
    var now = MiladiToShamsiArray();
    if (typeof year === 'undefined' || year === null)
        year = now[0];
    if (typeof month === 'undefined' || month === null)
        month = now[1];
    var day = GetShamsiDayInMonth(year, month);
    var arr = jd_to_gregorian(persian_to_jd(year, month, day));
    return PERSIAN_WEEKDAYS_INT[new Date(arr[0], arr[1] - 1, arr[2]).getDay()];
}
(function () {
    var arr = MiladiToShamsiArray();
    ShamsiCurrentYear = arr[0];
    ShamsiCurrentMonth = arr[1];
    ShamsiCurrentDay = arr[2];
})();