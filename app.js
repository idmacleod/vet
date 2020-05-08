document.addEventListener('DOMContentLoaded', () => {

    console.log('JavaScript Successfully Loaded');

    const registerAnimalForm = document.querySelector('#register-animal');
    registerAnimalForm.addEventListener('submit', registerAnimal);

    const clearButton = document.querySelector('#clearRegister');
    clearButton.addEventListener('click', clearRegister);

    const typeOptions = {
        'Cat': '🐈',
        'Dog': '🐕',
    }

    const vetOptions = ['Doctor Dolittle', 'James Herriott', 'Vetty McVetVet'];
    
    const addOptions = function (select, options) {
        for (optionText of options) {
            const option = document.createElement('option');
            option.value = optionText;
            option.textContent = optionText;
            select.appendChild(option);
        }
    }
    
    addOptions(document.querySelector('#type-select'), Object.keys(typeOptions));
    addOptions(document.querySelector('#vet-select'), vetOptions);

});

const registerAnimal = function (event) {
    event.preventDefault();
    addToRegister(event.target);
    this.reset();
}

const addToRegister = function (target) {
    const register = document.querySelector('#register');
    const listItem = document.createElement('li');
    const table = document.createElement('table');
    addRow(table, 'Name:', target.name.value);
    addRow(table, 'Date of Birth:', target.dob.value);
    addRow(table, 'Type:', target.type.value);
    addRow(table, 'Contact Tel:', target.contact.value);
    addRow(table, 'Notes:', target.notes.value);
    addRow(table, 'Vet:', target.vet.value);
    listItem.appendChild(table);
    register.appendChild(listItem);
}

const addRow = function (table, header, data) {
    const tableRow = document.createElement('tr');
    const tableHeader = document.createElement('th');
    tableHeader.textContent = header;
    const tableData = document.createElement('td');
    tableData.textContent = data;
    tableRow.appendChild(tableHeader);
    tableRow.appendChild(tableData);
    table.appendChild(tableRow);
}

const clearRegister = function () {
    const register = document.querySelector('#register');
    register.innerHTML = '';
}