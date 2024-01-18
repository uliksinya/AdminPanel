import {months} from "./data.js";

export function generateTime(){
    const date = new Date();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
}
export function generateDate(){
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let beautifulDate;
    beautifulDate = `${day} ${month} ${year}`;
    return beautifulDate;
}
export function updateDateTime() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    function update() {
        timeElement.textContent = generateTime();
        dateElement.textContent = generateDate();
    }
    // Обновление каждую секунду (1000 миллисекунд)
    setInterval(update, 1000);
    update();
}
