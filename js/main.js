"use strict";

$(document).ready(function () {
    var pomodoro = $(".pomodoro-clock");
    var addWork = $(".session-plus");
    var subWork = $(".session-minus");
    var addRest = $(".break-plus");
    var subRest = $(".break-minus");
    var workValueField = $(".work-value");
    var restValueField = $(".break-value");
    var pause = false;
    var clicked = false;
    var counting = void 0;

    // Update values on click
    var some = $(addWork).on("click", function () {
        var value = parseInt(workValueField.text()) + 1;
        workValueField.text(value);
        return value[0];
    });
    console.log(some);
    $(subWork).on("click", function () {
        var value = parseInt(workValueField.text()) - 1;
        workValueField.text(value);
    });
    $(addRest).on("click", function () {
        var value = parseInt(restValueField.text()) + 1;
        restValueField.text(value);
    });
    $(subRest).on("click", function () {
        var value = parseInt(restValueField.text()) - 1;
        restValueField.text(value);
    });

    // Properties
    var prop = {
        isSession: true,
        isBreak: function isBreak() {
            return this.isSession !== true;
        }
    };

    // Format seconds so it returns minutes and seconds
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        if (seconds < 10) {
            return minutes + ":" + "0" + seconds;
        }
        return minutes + ":" + seconds;
    }

    var workSeconds = void 0;
    var restSeconds = void 0;
    var workCount = void 0;

    $(pomodoro).on("click", function () {
        if (pause === false) {
            if (clicked === false) {
                // Pass data in seconds on first click and prevent changing data on other clicks...
                workSeconds = parseInt($(workValueField).text()) * 60;
                restSeconds = parseInt($(restValueField).text()) * 60;
                workCount = workSeconds;
                clicked = true;
            }
            counting = setInterval(timer, 1000);
            pause = true;
        } else if (pause === true) {
            clearInterval(counting);
            pause = false;
        }
    });

    // Timer toggle Session or Break time if isSession is true or false
    function timer() {
        if (prop.isSession) {
            workSeconds--;
            workValueField.text(formatTime(workSeconds));
            pomodoro.html("<h1>Wooork!!!</h1><h2>" + formatTime(workSeconds) + "</h2>");
            if (workSeconds == 0) {
                workSeconds = restSeconds;
                prop.isSession = false;
            }
        } else {
            workSeconds--;
            restValueField.text(formatTime(workSeconds));
            pomodoro.toggleClass("red");
            pomodoro.html("<h1>Break!</h1><h2>" + formatTime(workSeconds) + "</h2>");
            if (workSeconds == 0) {
                workSeconds = workCount;
                prop.isSession = true;
            }
        }
    }
});