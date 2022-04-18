
let outDate = document.getElementById('date2');

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;

    if (event.target.classList.contains('start')) {
        let date = document.getElementById('date1').valueAsDate
        let days = document.getElementById('days').value
        let newdate = (+date+days*86400000)
        let date2 = new Date (newdate)

        function formatDate(date2) {
        var dd = date2.getDate();
        if (dd < 10) dd = '0' + dd;
        var mm = date2.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        return dd + '.' + mm + '.' + date2.getFullYear();
    }
        let date3 = formatDate(date2)
        outDate.textContent = date3;
}
    if (event.target.classList.contains('clean')) {
    outDate.textContent = '0';
}
}
