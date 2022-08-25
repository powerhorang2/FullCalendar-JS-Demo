let fncCurrentDate = new Date();

document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        themeSystem: 'bootstrap5',
        initialView: 'dayGridMonth',
        locale: 'ko',
        timeZone: 'UTC',
        headerToolbar: {
            start: 'today',
            center: 'title',
            end: 'prev,next'
        },
        dateClick: function(info) {
            changeActiveDate(info.dayEl, info.date)
        }

    });
    calendar.render()
    showActiveDate();
    addEventRenderActiveDateToToolbarBtn();
});

function changeActiveDate(dayEl, date) {

    let fcDayEls = document.querySelector('.fc-daygrid-day.active');

    if (fcDayEls) {
        fcDayEls.classList.remove('active');
    }

    console.log(date)

    dayEl.classList.add('active');
    fncCurrentDate = new Date(date);
    addEventRenderActiveDateToToolbarBtn();
}

function showActiveDate() {
    let fullYear = fncCurrentDate.getFullYear();

    let month = 0;
    if (fncCurrentDate.getMonth() < 9) {
        month = "0" + (fncCurrentDate.getMonth() + 1);
    } else {
        month = fncCurrentDate.getMonth() + 1;
    }

    let date = fncCurrentDate.getDate();

    if (date < 10) {
        date = "0" + date
    }

    let currentDateStr = fullYear + "-" + month + "-" + date;

    let currentDateEl = document.querySelector('.fc-daygrid-day[data-date="' + currentDateStr + '"]');

    if (currentDateEl) {
        currentDateEl.classList.add('active');
    }
}

function addEventRenderActiveDateToToolbarBtn() {
    document.querySelectorAll('.fc-toolbar button').forEach(el => {
        el.addEventListener('click', showActiveDate)
    });
}
