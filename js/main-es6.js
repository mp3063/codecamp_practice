$(document).ready(function () {
    let pomodoro       = $(".pomodoro-clock");
    let addWork        = $(".session-plus");
    let subWork        = $(".session-minus");
    let addRest        = $(".break-plus");
    let subRest        = $(".break-minus");
    let workValueField = $(".work-value");
    let restValueField = $(".break-value");
    let pause          = false;
    let clicked = false;
    let counting;

    // Update values on click
    let some = $(addWork).on("click", function () {
        let value = parseInt(workValueField.text()) + 1;
        workValueField.text(value);
        return value[0];
    });
    console.log(some);
    $(subWork).on("click", function () {
        let value = parseInt(workValueField.text()) - 1;
        workValueField.text(value);
    });
    $(addRest).on("click", function () {
        let value = parseInt(restValueField.text()) + 1;
        restValueField.text(value);
    });
    $(subRest).on("click", function () {
        let value = parseInt(restValueField.text()) - 1;
        restValueField.text(value);
    });

    // Properties
    let prop = {
        isSession: true,
        isBreak: function () {
            return this.isSession !== true;
        },
    };

    // Format seconds so it returns minutes and seconds
    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        seconds     = seconds % 60;
        if (seconds < 10) {
            return minutes + ":" + "0" + seconds;
        }
        return minutes + ":" + seconds;
    }


    let workSeconds;
    let restSeconds;
    let workCount;

    $(pomodoro).on("click", function () {
        if (pause === false) {
            if (clicked === false) {
                // Pass data in seconds on first click and prevent changing data on other clicks...
                workSeconds = parseInt($(workValueField).text()) * 60;
                restSeconds = parseInt($(restValueField).text()) * 60;
                workCount   = workSeconds;
                clicked     = true;
            }
            counting = setInterval(timer, 1000);
            pause    = true;
        }
        else if (pause === true) {
            clearInterval(counting);
            pause = false;
        }
    });

    // Timer toggle Session or Break time if isSession is true or false
    function timer() {
        if (prop.isSession) {
            workSeconds--;
            workValueField.text(formatTime(workSeconds));
            pomodoro.html(`<h1>Wooork!!!</h1><h2>${formatTime(workSeconds)}</h2>`);
            if (workSeconds == 0) {
                workSeconds    = restSeconds;
                prop.isSession = false;
            }
        } else {
            workSeconds--;
            restValueField.text(formatTime(workSeconds));
            pomodoro.toggleClass("red");
            pomodoro.html(`<h1>Break!</h1><h2>${formatTime(workSeconds)}</h2>`);
            if (workSeconds == 0) {
                workSeconds    = workCount;
                prop.isSession = true;
            }
        }
    }
});