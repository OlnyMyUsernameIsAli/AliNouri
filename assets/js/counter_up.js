let valueDisplays = document.querySelectorAll(".counter");
let interval = 5000;
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("number-value"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 2;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});