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
}

const clear = function (event) {
    console.log(event);
}