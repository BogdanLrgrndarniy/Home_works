let age = prompt('Ведіть свій вік');

if (age > 0 && age <= 2) {
 alert('Ви дитина');
} else if (age >= 12 && age < 18) {
    alert('Ви підліток');
} else if (age >= 18 && age <= 60) {
    alert('Ви дорослий');
} else if (age > 60) {
    alert('Ви пенсіонер');
} else {
    alert('Не визначено');
}