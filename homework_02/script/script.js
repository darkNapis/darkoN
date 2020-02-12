function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function () {
        return new Date().getFullYear() - this.birthYear;
    };

    this.getInfo = function () {
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}`;
    };
    // grades = [1,2,3]
    this.getGradesAverage = function () {
        let sum = 0;
        for (const grade of this.grades) {
            sum = sum + Number(grade);
        }
        let average = sum / this.grades.length;
        return average;

    };
};

let listOfStudents = [];

let petar = new Student('Petar', 'Petrovski', 1990, 'SEDC', [1, 2, 5]);
listOfStudents.push(petar);

// console.log('Petar:', petar);
let petarsAge = petar.getAge();
// console.log(petar.getGradesAverage());

let stojan = new Student('Stojan', 'Stojanovski', 1903, 'SEDC', [2, 5, 4, 5, 1, 2]);
listOfStudents.push(stojan);

// console.log(listOfStudents);
// with saving
// console.log(petarsAge);

// without saving, direct call
// console.log(petar.getAge());

// console.log(petar.getInfo());

// Elements
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let birthYear = document.getElementById('birthYear');
let academy = document.getElementById('academy');
let grades = document.getElementById('grades');
let registerBtn = document.getElementById('register');

let tBody = document.querySelector('tbody');

// EVENT 
registerBtn.addEventListener('click', function (e) {
    e.preventDefault();

    tBody.innerHTML = '';
    let firstName = fName.value;
    let lastName = lName.value;
    let birthYearValue = birthYear.value;
    let academyValue = academy.value;
    let gradesValue = grades.value.split(','); // split returns an array of strings;
    let student = new Student(firstName, lastName, birthYearValue, academyValue, gradesValue)

    if (checkInputs()) {
        alert('Please enter empty fields')
    }
    else {
        if (isRegistered(student)) {
            alert('Allready registered')
        }
        else {
            listOfStudents.push(student);

            for (const student of listOfStudents) {
                // OPTION 1
                tBody.innerHTML += `<tr>
                                    <td>${student.firstName}</td>
                                    <td>${student.lastName}</td>
                                    <td>${student.birthYear}</td>
                                    <td>${student.academy}</td>
                                    <td>${student.grades}</td>
                                    <td>${student.getAge()}</td>
                                    <td>${student.getGradesAverage()}</td>
                                </tr>`
            }
        }
    }
});

function isRegistered(newStuden) {
    for (const student of listOfStudents) {
        if (newStuden.firstName === student.firstName && newStuden.lastName === student.lastName && newStuden.birthYear === student.birthYear) {
            return true;
        }
    }
    return false;
};

function checkInputs() {
    if (fName.value === '' || lName.value === '' || birthYear.value === '' || academy.value === '' || grades.value === '')
        return true;
    else
        return false;
};