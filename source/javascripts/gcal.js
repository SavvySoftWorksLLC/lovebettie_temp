//= require moment/min/moment-with-locales.min.js
//= require fullcalendar/dist/fullcalendar.min
//= require fullcalendar/dist/gcal.min

var modalTemplate = function(context) {
  return `
    <div id="${context.id}" class="modal">
      <div class="modal-content">
        <h4>${context.header}</h4>
        <p>${context.body}</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
      </div>
    </div>
  `
}

$(document).ready(function() {

    var apiKey = jQuery('#calendar').data('apiKey');
    var calendarId = jQuery('#calendar').data('calendarId');
    $('#calendar').fullCalendar({
        googleCalendarApiKey: apiKey,
        events: {
          googleCalendarId: calendarId
        },
        eventRender: function (event, element) {
          element.find(".fc-content").prepend("<i class='mdi mdi-information-outline'></i>")
          var modalId = `modal-${event.id}`;
          var modalContext = {
            id: modalId,
            header: event.title,
            body: event.description
          }

          jQuery('body').append(modalTemplate(modalContext))
          jQuery(`#${modalId}`).modal()

          element.attr('href', `#${modalId}`);
          element.click(function() {
            bootbox.alert({
              message: 'Description : '+event.description,
              title: event.title,
            });
          });
        }
    });
});
