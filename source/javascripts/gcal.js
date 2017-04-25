//= require moment/min/moment-with-locales.min.js
//= require fullcalendar/dist/fullcalendar.min
//= require fullcalendar/dist/gcal.min

$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: ENV['GOOGLE_CAL_API_KEY'],
        events: {
            googleCalendarId: ENV['GOOGLE_CAL_ID']
        }
    });
});
