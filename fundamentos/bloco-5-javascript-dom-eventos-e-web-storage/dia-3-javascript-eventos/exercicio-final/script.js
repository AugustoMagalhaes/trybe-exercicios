function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;
        weekDaysList.appendChild(dayListItem);

    };
};

createDaysOfTheWeek();

function createDaysOfTheMonth() {
    const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dezDaysList = document.getElementById('days');

    for (let index = 0; index < dezDays.length; index += 1) {
        const monthDays = dezDays[index];
        const dezDaysListItem = document.createElement('li');
        dezDaysListItem.className = 'day';
        dezDaysListItem.innerHTML = monthDays;
        dezDaysList.appendChild(dezDaysListItem);

        if (monthDays === 24 || monthDays === 25 || monthDays === 31) {
            dezDaysListItem.className += ' ' + 'holiday';
        }
        if (monthDays === 4 || monthDays === 11 || monthDays === 18 || monthDays === 25) {
            dezDaysListItem.className += ' ' + 'friday';
        }
    };
};

createDaysOfTheMonth(); // fim 1

function generateHolidayBtn(label) {
    const btnHolidays = document.createElement('button');
    btnHolidays.id = 'btn-holiday';
    btnHolidays.innerHTML = label;
    const buttonsContainerDiv = document.querySelector('.buttons-container');
    buttonsContainerDiv.appendChild(btnHolidays);
}

generateHolidayBtn('Feriados'); // fim 2

const holidayButton = document.getElementById('btn-holiday');

function highlighHolidays() {
    const holidaysList = document.getElementsByClassName('holiday');
    for (let index = 0; index < holidaysList.length; index += 1) {
        const holidaysListItemStyle = holidaysList[index].style;
        if (holidaysListItemStyle.backgroundColor === 'rgb(238, 238, 238)' || holidaysListItemStyle.backgroundColor === '') {
            holidaysListItemStyle.backgroundColor = '#fff777';
        } else {
            holidaysListItemStyle.backgroundColor = 'rgb(238, 238, 238)'
        }
    }
}

holidayButton.addEventListener('click', highlighHolidays); // fim 3

function generateFridayBtn() {
    const btnFridays = document.createElement('button');
    btnFridays.id = 'btn-friday';
    btnFridays.innerHTML = 'Sexta-feira';
    const buttonsContainerDiv2 = document.querySelector('.buttons-container');
    buttonsContainerDiv2.appendChild(btnFridays);
}
generateFridayBtn(); // fim do 4

const fridayButton = document.getElementById('btn-friday');
const fridaysList = document.getElementsByClassName('friday');

for (let index = 0; index < fridaysList.length; index += 1) {
    const fridaysListItem = fridaysList[index];
    fridaysListItem.originalValue = fridaysListItem.innerText;
}

function highLightFridays() {
    for (let index = 0; index < fridaysList.length; index += 1) {
        const fridaysListItem = fridaysList[index];
        if (fridaysListItem.innerText === 'SEXTOU o/') {
            fridaysListItem.innerText = fridaysListItem.originalValue;
        } else {
            fridaysListItem.innerText = 'SEXTOU o/';
        }
    }
}

fridayButton.addEventListener('click', highLightFridays); // fim do 5

function zoomDay(event) {
    const element = event.target;
    const originalDaySize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    element.originalValue = parseFloat(originalDaySize);
    if (event.type === 'mouseenter') {
        event.target.style.fontSize = (element.originalValue * 1.5) + 'px';
    } else if (event.type === 'mouseout') {
        event.target.style.fontSize = (element.originalValue * 2 / 3) + 'px';
    }
}

const daysList = document.getElementsByClassName('day');

for (let index = 0; index < daysList.length; index += 1) {
    const daysListItem = daysList[index];
    daysListItem.addEventListener('mouseenter', zoomDay);
    daysListItem.addEventListener('mouseout', zoomDay);
}

// fonte window.getComputed~: https://www.ti-enxame.com/pt/javascript/como-obter-o-tamanho-da-fonte-em-html/1070829157/
// fim 6

function addTask(tasksName) {
    const myTasksDiv = document.querySelector('.my-tasks');
    const newTask = document.createElement('span');
    newTask.innerText = tasksName + ":";
    myTasksDiv.appendChild(newTask)
}

addTask('Estudar'); // fim 7

function addLabel(labelColor) {
    const myTasksDiv2 = document.querySelector('.my-tasks');
    const newLabel = document.createElement('div');
    newLabel.className = 'task';
    const style = newLabel.style;
    style.border = `3px solid ${labelColor}`;
    style.borderRadius = '100%';
    style.backgroundColor = labelColor;
    style.height = '20px';
    style.width = '20px';
    style.marginTop = '-10px';
    myTasksDiv2.appendChild(newLabel);
}

addLabel('green'); // fim 8

function taskClick(event) {
    const element = event.target;
    if (element.className === 'task') {
        element.className = 'task selected'
    } else if (element.className === 'task selected') {
        element.className = 'task';
    }
}

const myLabelDiv = document.querySelector('.task');
myLabelDiv.addEventListener('click', taskClick);

function changeDayColor(event) {
    const element = event.target;
    const elementColor = window.getComputedStyle(element, null).getPropertyValue('color');
    const selectedTask = document.getElementsByClassName('task selected')[0];
    const selectedTaskColor = (selectedTask) ? window.getComputedStyle(selectedTask, null).getPropertyValue('background-color') : "";
    if (elementColor === 'rgb(119, 119, 119)') {
        element.style.color = selectedTaskColor;
    } else if (elementColor === selectedTaskColor) {
        element.style.color = 'rgb(119,119,119)';
    }
}

for (let index = 0; index < daysList.length; index += 1) {
    const daysListItem = daysList[index];
    daysListItem.addEventListener('click', changeDayColor);
}

// fim 9

function addAppointment() {
    const inputElement = document.getElementById('task-input');

    const appointmentList = document.querySelector('.task-list');
    const createdAppointment = document.createElement('li');
    if (inputElement.value === '') {
        alert('O conteúdo do compromisso deve ser válido, preencha o formulário novamente.')
    } else {
        createdAppointment.innerText = inputElement.value;
    }
    appointmentList.appendChild(createdAppointment);
}

const addAppointmentBtn = document.getElementById('btn-add');
addAppointmentBtn.addEventListener('click', addAppointment);

const inputForm = document.getElementById('task-input');
inputForm.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        addAppointment();
    }
});

// fim 10
