// 2. Menampilkan ramalan cuaca kota Jakarta untuk 5 hari kedepan

// 1. Silakan gunakan API yang disediakan http://openweathermap.org
// 2. Tolong tampilkan output berupa ramalan cuaca kota Jakarta untuk 5 hari ke depan
// 3. Yang ditampilkan hanya 1 suhu per hari
// 4. Soal ini tidak membutuhkan akun berbayar.

// Berikut contoh output yang kami harapkan

/**
 * https://api.openweathermap.org/data/2.5/forecast/daily?lat=-6.2&lon=106.816666&cnt=7&appid=47ae072bf9e792639445c6ea24280b7b
 * @reference api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
 */

const apiKey = '47ae072bf9e792639445c6ea24280b7b';
const lat    = -6.2;
const lon    = 106.816666;
const cnt    = 7;
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

console.log('Weather Forecast:')

let results = [];

fetch(apiUrl).then(response => {
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
})
.then(data => {
    data.list.map(data => {
        let date = formatDate(data.dt_txt)
        let temp = data.main.temp

        pushIfNotExists(results, date, {
            date: date,
            temp: temp
        });
    })

    results.forEach(data => {
        console.log(`${data.date}: ${data.temp} Celcius`)
    })
})
.catch(error => {
    console.error('Error fetching weather data:', error);
});


function formatDate(inputDate) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const dateObj = new Date(inputDate);
    const dayOfWeek = days[dateObj.getDay()];
    const dayOfMonth = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
    return formattedDate;
}

function pushIfNotExists(arr, valueToCheck, objectToPush) {
    if (!arr.some(obj => obj.date === valueToCheck)) {
        arr.push(objectToPush);
    }
}