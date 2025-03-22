
// #1 За допомогою ajax-запиту вивести погоду
//
// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19
// q=XXX - місто, для якого показати погоду

// Вводимо в інпут назву міста, натискаємо кнопку Погода
// Якщо таке місто не існує (404), виводимо напис, що таке місце не знайдено
// Якщо місто існує, виводимо наступну інформацію:
// temp – температура
// pressure - тиск
// description – опис
// humidity – вологість
// speed – швидкість вітру
// deg - напрям у градусах
// icon - значок, де 10d код іконки (виводимо картинку з таким урлом, як нам повернувся)
// http://openweathermap.org/img/w/10d.png

// Placeholder for city to be specified
let city = "";

// Listener on form to get weather "object" for the chosen city.
document.getElementById("weatherButton").addEventListener("click", event => {
        console.log("Submitted");
        event.preventDefault();     //Prevent default behaviour of form, namely reload of the page.
            getWeatherByCity();
    });

// Listener on input field to get city name from input.
document.getElementById("searchCity").addEventListener("input", event => {
    city = event.target.value;
    console.log("I am here");
});

// Put name of the city in the api link.
function getWeatherAPIForCity () {
    console.log("city:", city);

    let weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    document.getElementById("link").innerHTML = weatherAPI;

    return weatherAPI;
}

// Load data through api for chosen data.
async function getWeatherByCity () {
    console.log("Get weather by city called");
    const weatherLink = getWeatherAPIForCity();
    const weatherData = await fetch(weatherLink)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch city");
            }
            return response.json();
        })
        .catch(error => console.error("Error:", "There is no such city"));

    setWeatherValues(weatherData);
}

function setValueVisible()   {
    document.getElementById("temp").classList.remove("hidden");
    document.getElementById("pressure").classList.remove("hidden");
    document.getElementById("description").classList.remove("hidden");
    document.getElementById("humidity").classList.remove("hidden");
    document.getElementById("speed").classList.remove("hidden");
    document.getElementById("deg").classList.remove("hidden");
    document.getElementById("icon").classList.remove("hidden");
}

function setValueHidden()   {
    document.getElementById("temp").classList.add("hidden");
    document.getElementById("pressure").classList.add("hidden");
    document.getElementById("description").classList.add("hidden");
    document.getElementById("humidity").classList.add("hidden");
    document.getElementById("speed").classList.add("hidden");
    document.getElementById("deg").classList.add("hidden");
    document.getElementById("icon").classList.add("hidden");
}

function setWeatherValues(weatherData) {
    if (weatherData !== undefined) {
        setValueVisible();
        document.getElementById("temp").innerHTML = weatherData.main.temp;
        document.getElementById("pressure").innerHTML = weatherData.main.pressure;
        document.getElementById("description").innerHTML = weatherData.weather[0].description;
        document.getElementById("humidity").innerHTML = weatherData.main.temp;
        document.getElementById("speed").innerHTML = weatherData.wind.speed;
        document.getElementById("deg").innerHTML = weatherData.wind.deg;
        document.getElementById("icon").src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    } else {
        setValueHidden();
    }
}


// За бажанням:
// #2 Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// На сторінку вивести інпут та кнопку Пошук
// Ід поста має бути введений в інпут (валідація: ід від 1 до 100)
// Якщо знайдено пост, то вивести на сторінку нижче блок з постом і зробити кнопку для отримання коментарів до посту.
// По клику на кнопку коментарі має бути виведені нижче під постом коментарі до цього посту
// Якщо зробити Пошук нового поста, старий пост та коментарі видаляються зі сторінки
// Зробити завдання використовуючи проміси, перехопити помилки.