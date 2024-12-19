function DataTable(config, data) {

    const getParent = document.querySelector(config.parent);
    const tableRows = Object.keys(data).length;

    // Creating the main table

    let mainTable = document.createElement('table');
    getParent.appendChild(mainTable);

    // Creating the table header

    let tableHeader = document.createElement('thead');
    mainTable.appendChild(tableHeader);

    let headRow = document.createElement('tr');

    let headNumber = document.createElement('th');
    headNumber.textContent = "№";
    headRow.appendChild(headNumber);

    for (const column of config.columns) {
        let headCol = document.createElement('th');
        headCol.textContent = column.title;
        headRow.appendChild(headCol);
    }

    tableHeader.appendChild(headRow);

    // Creating the table body

    let tableBody = document.createElement('tbody');
    mainTable.appendChild(tableBody);

    for (let i = 0; i < tableRows; i++) {
        let row = document.createElement('tr');

        let number = document.createElement('td');
        number.textContent = i + 1;
        row.appendChild(number);

        for (const column of config.columns) {
            let col = document.createElement('td');
            col.textContent = data[i][column.value];
            row.appendChild(col);
        }

        tableBody.appendChild(row);
    }
}

const config1 = {
    parent: '#usersTable',
    columns: [
        { title: 'Ім’я', value: 'name' },
        { title: 'Прізвище', value: 'surname' },
        { title: 'Вік', value: 'age' },
    ]
};

const users = [
    { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
    { id: 30051, name: 'Вася', surname: 'Васечкін', age: 15 },
];

DataTable(config1, users);

const config2 = {
    parent: '#usersTable',
    columns: [
        { title: 'Айді', value: 'id' },
        { title: 'Ім’я', value: 'name' },
        { title: 'Прізвище', value: 'surname' },
        { title: 'Вік', value: 'age' },
        { title: 'Щось', value: 'smthng' },
    ]
};

const users2 = [
    { id: 30050, name: 'Вася', surname: 'Петров', age: 12, smthng: 1111111 },
    { id: 30051, name: 'Вася', surname: 'Васечкін', age: 15, smthng: 22222222 },
    { id: 30053, name: 'Ще один Вася', surname: 'Батькович', age: 30, smthng: 333333333 },
];

DataTable(config2, users2);
