let fncCurrentDate = new Date();

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
