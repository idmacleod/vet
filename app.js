document.addEventListener('DOMContentLoaded', () => {

    const registerAnimalForm = document.querySelector('#register-animal-form');
    registerAnimalForm.addEventListener('submit', registerAnimal);

    const clearRegisterButton = document.querySelector('#clear-register-button');
    clearRegisterButton.addEventListener('click', clearRegister);

    const typeOptions = {
        'Cat': '🐈',
        'Dog': '🐕',
    }

    const vetOptions = ['Doctor Dolittle', 'James Herriott', 'Vetty McVetVet'];
    
    addOptions(document.querySelector('#type-select'), Object.keys(typeOptions));
    addOptions(document.querySelector('#vet-select'), vetOptions);

});

const addOptions = function (select, options) {
    for (optionText of options) {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
    }
}

const registerAnimal = function (event) {
    event.preventDefault();
    const register = document.querySelector('#register');
    const listItem = document.createElement('li');
    const table = document.createElement('table');
    addRowToTable(table, 'Name:', event.target.name.value);
    addRowToTable(table, 'Date of Birth:', event.target.dob.value);
    addRowToTable(table, 'Type:', event.target.type.value);
    addRowToTable(table, 'Contact Tel:', event.target.contact.value);
    addRowToTable(table, 'Notes:', event.target.notes.value);
    addRowToTable(table, 'Vet:', event.target.vet.value);
    listItem.appendChild(table);
    register.appendChild(listItem);
    this.reset();
}

const addRowToTable = function (table, header, data) {
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