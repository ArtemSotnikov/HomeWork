

//Change from ternary operator (original in HW20) to if else
export function ageClassification(n) {
    if (n <= 0) {
        return null;
    } else if (n <= 24) {
        return 'Дитинство';
    } else if (n <= 44) {
        return 'Молодість';
    } else if (n <= 65) {
        return 'Зрілість';
    } else if (n <= 75) {
        return 'Старість';
    } else if  (n <= 90) {
        return 'Довголіття';
    } else if (n <= 122) {
        return 'Рекорд';
    } else {
        return null;
    }
}




export function weekFn(n) {
    switch (n) {
        case 1:
            return 'Понеділок';
        case 2:
            return 'Вівторок';
        case 3:
            return 'Середа';
        case 4:
            return 'Четвер';
        case 5:
            return 'П\'ятниця';
        case 6:
            return 'Субота';
        case 7:
            return 'Неділя';
        default:
            return null;
    }
}

console.log(weekFn(1))   // 'Понеділок'
console.log(weekFn(3))   // 'Середа'
console.log(weekFn(7))   // 'Неділя'
console.log(weekFn(9))   // null
console.log(weekFn(1.5)) // null
console.log(weekFn('2')) // null