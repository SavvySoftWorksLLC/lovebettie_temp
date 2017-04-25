//= require moment/min/moment-with-locales.min.js
//= require fullcalendar/dist/fullcalendar.min
//= require fullcalendar/dist/gcal.min

$(document).ready(function() {
    var apiKey = jQuery('#calendar').data('apiKey');
    var calendarId = jQuery('#calendar').data('calendarId');
    $('#calendar').fullCalendar({
        googleCalendarApiKey: apiKey,
        events: {
            googleCalendarId: calendarId
        }
    });
});
