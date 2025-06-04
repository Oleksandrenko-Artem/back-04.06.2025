function startCountDown(seconds = 3) {
    let count = seconds;
    const interval = setInterval(() => {
        if (count <= 0) {
            clearInterval(interval);
            console.log('start');
            return;
        }
        console.log(count);
        count--;
    }, 1000);
}

module.exports = { startCountDown };