$(document).ready(function () {
    let pomodoro       = $(".pomodoro-clock");
    let addWork        = $(".session-plus");
    let subWork        = $(".session-minus");
    let addRest        = $(".break-plus");
    let subRest        = $(".break-minus");
    let workValueField = $(".work-value");
    let restValueField = $(".break-value");
    let pause          = false;
    let counting;

    // Update values on click
    $(addWork).on("click", function () {
        let value = parseInt(workValueField.text()) + 1;
        workValueField.text(value);
    });
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

    let count     = parseInt($(workValueField).text()) * 60;
    let rest      = parseInt($(restValueField).text()) * 60;
    let workCount = count;

    // Timer toggle Session or Break time if isSession is true or false
    function timer() {
        if (prop.isSession) {
            count--;
            workValueField.text(formatTime(count));
            pomodoro.html(`<h1>Wooork!!!</h1><h2>${formatTime(count)}</h2>`);
            if (count == 0) {
                count          = rest;
                prop.isSession = false;
            }
        } else {
            count--;
            restValueField.text(formatTime(count));
            pomodoro.toggleClass("red");
            pomodoro.html(`<h1>Break!</h1><h2>${formatTime(count)}</h2>`);
            if (count == 0) {
                count          = workCount;
                prop.isSession = true;
            }
        }
    }

    $(pomodoro).on("click", function () {
        if (pause === false) {
            counting = setInterval(timer, 1000);
            pause    = true;
        }
        else if (pause === true) {
            clearInterval(counting);
            pause = false;
        }
    });

});