fetch('https:raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json') 
    .then(response => response.json())
    .then(students => {
        console.log(everyStudentsLog(students));
        console.table(allMaleStudentsNotFromSkopje(students));
        console.table(allFemaleAdults(students));
        console.log(avgAge(students));
        console.table(allFemaleStudentsLastNameWIthA(students));
    })
    .catch(error => console.error(error))

    let everyStudentsLog = students => students.forEach(s => {
        console.log(`${s.firstName} ${s.lastName} is coming form ${s.city}, 
        he is ${s.age} years old and he is ${s.averageGrade === 1 ? 'Failing' : 'Passing'} the class.`);
    });
    let allMaleStudentsNotFromSkopje = students => 
                            students.filter(s => s.gender === 'Male' && s.city !== 'Skopje');
    let allFemaleAdults = students => students.filter(s => s.gender === 'Female' && s.age > 18);
    let avgAge = students => students.map(s => s.age).reduce((sum, avg) => sum + avg, 0) / students.length;
    let allFemaleStudentsLastNameWIthA = students => 
                            students.filter(s => s.gender === 'Female' && s.lastName.endsWith('a'));
    