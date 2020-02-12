let reminders = [];

let arrOfColors = ['yellow', 'red', 'purple', 'green', 'black'];

// Contructors
function Reminder(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
};

// Selectors

let title = document.getElementById('title');
let priority = document.getElementById('priority');
let color = document.getElementById('color');
let description = document.getElementById('description');
let tbody = document.querySelector('tbody');
let addReminder = document.getElementById('add-reminder');
let sReminders = document.getElementById('show-reminders');

// Events
addReminder.addEventListener('click', function () {
    let titleValue = title.value;
    let priorityValue = priority.value;
    let colorValue = color.value;
    let descriptionValue = description.value;

    let newReminder = new Reminder(titleValue, priorityValue, colorValue, descriptionValue);

    if (checkInput()) {
        alert(`Please enter empty fields`);
        return;
    }
    if (!checkColor(color)) {
        alert(`We don't have that color`);
    } else {
        reminders.push(newReminder);
        showReminders();
    }
});

sReminders.addEventListener('click', showReminders);

function showReminders() {
    for (const reminder of reminders) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        td1.innerText = reminder.title;
        td1.style.color = reminder.color;
        td2.innerText = reminder.priority;
        td3.innerText = reminder.description;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbody.appendChild(tr);
    }
};

function checkInput() {
    if (title.value === '' || priority.value === '' || color.value === '' || description.value === '') {
        return true;
    } else
        return false;
};

function checkColor(newColor) {
    for (const color of arrOfColors) {
        if (newColor.value === color) {
            return true;
        }
    }
    return false;
};
