//= require moment/min/moment-with-locales.min.js
//= require fullcalendar/dist/fullcalendar.min

$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: '<YOUR API KEY>',
        events: {
            googleCalendarId: 'abcd1234@group.calendar.google.com'
        }
    });
});
