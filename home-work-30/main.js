console.log('#13. JavaScript homework example file')

/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */
function isValidEmail(email) {
    const emailCheck = /^(?!.*\.\.)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/; //Check for simple email.

    return emailCheck.test(email);
}

console.log("Assignment 1 ----------------")
console.log(isValidEmail('example@example.com'))            // Повинно вивести: true
console.log(isValidEmail('exa..mple@example.com'))          // Повинно вивести: false
console.log(isValidEmail('exa..mple@ex..ample.com'))        // Повинно вивести: false
console.log(isValidEmail('example@example.example.com'))    // Повинно вивести: true
console.log(isValidEmail('invalid-email'))                  // Повинно вивести: false

/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */
function isValidUrl(url) {
    const urlCheck = /^(http|https):\/\/(www)\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,5}$/;

    return urlCheck.test(url);
}

console.log("Assignment 2 ----------------")
console.log(isValidUrl('https://www.example.com'))  // Повинно вивести: true
console.log(isValidUrl('https://www.exam_ple.com')) // Повинно вивести: false
console.log(isValidUrl('https://www.exam-ple.com')) // Повинно вивести: true
console.log(isValidUrl('https://www.example_.com')) // Повинно вивести: false
console.log(isValidUrl('https://www.example-.com')) // Повинно вивести: false
console.log(isValidUrl('invalid-url'))              // Повинно вивести: false

// Експорт функції для використання та тестування
export { isValidEmail, isValidUrl }
