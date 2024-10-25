document.addEventListener('DOMContentLoaded', function () {
    const apiUrl1 = 'https://sheets.googleapis.com/v4/spreadsheets/1Cc-H-5gRbGf7zUDtD1h6iiTUnFS1yh1E6d9IutN0mp8/values/YearPositionBaseTotalDays?key=AIzaSyDLEhcKsdLunc7FUSCSUd86uvTWI8f6Lpc';
    const apiUrl2 = 'https://sheets.googleapis.com/v4/spreadsheets/1Cc-H-5gRbGf7zUDtD1h6iiTUnFS1yh1E6d9IutN0mp8/values/YearPositionCount?key=AIzaSyDLEhcKsdLunc7FUSCSUd86uvTWI8f6Lpc';

    fetch(apiUrl1)
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('table-YearPositionBaseTotalDays');
            const rows = data.values;
            rows.forEach((row, index) => {
                const tr = document.createElement('tr');
                row.forEach(cell => {
                    const cellElement = document.createElement(index === 0 ? 'th' : 'td');
                    cellElement.textContent = cell;
                    tr.appendChild(cellElement);
                });
                table.appendChild(tr);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    fetch(apiUrl2)
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('table-YearPositionCount');
            const rows = data.values;
            rows.forEach((row, index) => {
                const tr = document.createElement('tr');
                row.forEach(cell => {
                    const cellElement = document.createElement(index === 0 ? 'th' : 'td');
                    cellElement.textContent = cell;
                    tr.appendChild(cellElement);
                });
                table.appendChild(tr);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
