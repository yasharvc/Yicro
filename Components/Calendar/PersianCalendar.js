var CalendarItemClickEvent = document.createEvent('Event');
CalendarItemClickEvent.initEvent('CalendarItemClicked', true, true);
var PersianCalendar = function (id, year, month, day) {
    id = isNull(id) ? '__CALENDAR__' : id;
    year = year || ShamsiCurrentYear;
    month = month || ShamsiCurrentMonth;
    //day = day || ShamsiCurrentDay;
    var target = $(id);
    target.innerHTML = '';
    targetThis = this;
    var template = '<div aria-year="{year}" aria-month="{month}" aria-day="{day}" class="w3-col w3-center {class}" onclick="{onclick}" style="width:13%" id="_{year}_{month}_{day}"><p>{number}</p></div>';
    this.render = function () {
        var i = 0;
        var startDay = GetShamsiMonthStartDay(year, month);
        var daysInMonth = GetShamsiDayInMonth(year, month);
        var dayHTML = "";
        target.innerHTML += ('<div class="w3-row w3-center">');

        for (i = 1; i < startDay; i++) {
            dayHTML = template.replace(/{number}/g, '&nbsp;').replace(/{class}/g, 'calendar-empty-cell');
            dayHTML = dayHTML.replace(/{year}/g, '0').replace(/{month}/g, '0').replace(/{day}/g, i);
            dayHTML = dayHTML.replace(/{onclick}/g, 'void(0);');
            target.innerHTML += (dayHTML);
        }
        for (i = 1; i <= daysInMonth; i++) {
            var className = 'calendar-cell' + (startDay == 7 ? ' calendar-friday-cell' : '');
            if (year === ShamsiCurrentYear && month === ShamsiCurrentMonth && ShamsiCurrentDay === i)
                className += ' calendar-today-cell';
            dayHTML = template.replace(/{number}/g, i).replace(/{class}/g, className);
            dayHTML = dayHTML.replace(/{year}/g, year).replace(/{month}/g, month).replace(/{day}/g, i);
            dayHTML = dayHTML.replace(/{onclick}/g, 'this.dispatchEvent(CalendarItemClickEvent);event.stopPropagation();event.preventDefault();');
            target.innerHTML += (dayHTML);
            startDay++;
            if (startDay > 7) {
                target.innerHTML += ('</div>');
                target.innerHTML += ('\r\n<div class="w3-row w3-center">');
                startDay = 1;
            }
            target.innerHTML += '</div>';
        }
    };
    this.getSelectedDay = function () {
        if (!isNull(day))
            return year + '/' + (month > 9 ? '' + month : '0' + month) + '/' + (day > 9 ? '' + day : '0' + day);
        return null;
    };
    this.clearSelection = function(){
        forEach(target.getElementsByTagName('div'),function(div){
            div.removeClass('calendar-selected-cell');
        });
    };
    this.setSelectedDay = function (_year, _month, _day) {
        if (!isNull(_day)) {
            year = _year;
            month = _month;
            day = _day;
            updateCurrentDayViewer();
        }
    };
    var updateCurrentDayViewer = function () {
        $('_CALENDAR_SELECTED_DAY_').html(isNull(targetThis.getSelectedDay()) ? 'انتخاب نشده' : targetThis.getSelectedDay());
    };
    updateCurrentDayViewer();
    var clickListener = function (e) {
        var target = (e.target);
        targetThis.setSelectedDay(parseInt(target.aria('year')), parseInt(target.aria('month')), parseInt(target.aria('day')));
        targetThis.clearSelection();
        target.addClass('calendar-selected-cell');
    };
    addEventListener('CalendarItemClicked', clickListener, false);
};