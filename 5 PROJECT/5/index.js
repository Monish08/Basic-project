let array =JSON.parse(localStorage.getItem('array') ) || [];
const inputElement = document.querySelector('.js-taskinput');
const dateElement = document.querySelector('.js-dateinput');
const divElement = document.querySelector('.js-div');
rendertask();
function rendertask() {
    let todolisthtml = '';
    for (let i = 0; i < array.length; i++) {
        const todoobject = array[i];
        let name = todoobject.name;
        let duedate = todoobject.duedate;
        let html = `<div>${name}</div> <div>${duedate}</div> <button onclick="deletetask(${i})";>Delete</button>`;
        todolisthtml += html;
    }
    divElement.innerHTML = todolisthtml;
}
function addtask() {
    let tasktodo = inputElement.value;
    let date = dateElement.value;
    if (tasktodo && date) {
        array.push({ name: tasktodo, duedate: date });
        inputElement.value = '';
    }
    else {

        alert('Enter the task and date!');
        return;
    }
    rendertask();
    localStorage.setItem('array', JSON.stringify(array));
}
function deletetask(index) {
    array.splice(index, 1);
    localStorage.setItem('array', JSON.stringify(array));
    rendertask();
}