document.addEventListener('DOMContentLoaded', () => {

    console.log('JavaScript Successfully Loaded');

    const registerAnimalForm = document.querySelector('#register-animal');
    registerAnimalForm.addEventListener('submit', registerAnimal);

    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', clear);

});

const registerAnimal = function (event) {
    event.preventDefault();
    addToRegister(event.target);
    this.reset();
}

const addToRegister = function (target) {
    console.log(target.name.value);
    const register = document.querySelector('#register');
    const listItem = document.createElement('li');
    const table = document.createElement('table');
    const tableRow = document.createElement('tr');
    const tableHeader = document.createElement('th');
    tableHeader.textContent = 'Name';
    const tableData = document.createElement('td');
    tableData.textContent = target.name.value;
    tableRow.appendChild(tableHeader);
    tableRow.appendChild(tableData);
    table.appendChild(tableRow);
    listItem.appendChild(table);
    register.appendChild(listItem);
}

const clear = function (event) {
    console.log(event);
}