"use strict";

$(document).ready(function () {
    var pomodoro       = $(".pomodoro-clock");
    var addWork        = $(".session-plus");
    var subWork        = $(".session-minus");
    var addRest        = $(".break-plus");
    var subRest        = $(".break-minus");
    var workValueField = $(".work-value");
    var restValueField = $(".break-value");
    var pause          = false;
    var counting       = void 0;

    // Update values on click
    $(addWork).on("click", function () {
        var value = parseInt(workValueField.text()) + 1;
        workValueField.text(value);
    });
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
        seconds     = seconds % 60;
        if (seconds < 10) {
            return minutes + ":" + "0" + seconds;
        }
        return minutes + ":" + seconds;
    }

    var count     = parseInt($(workValueField).text()) * 60;
    var rest      = parseInt($(restValueField).text()) * 60;
    var workCount = count;

    // Timer toggle Session or Break time if isSession is true or false
    function timer() {
        if (prop.isSession) {
            count--;
            workValueField.text(formatTime(count));
            pomodoro.html("<h1>Wooork!!!</h1><h2>" + formatTime(count) + "</h2>");
            if (count == 0) {
                count          = rest;
                prop.isSession = false;
            }
        } else {
            count--;
            restValueField.text(formatTime(count));
            pomodoro.toggleClass("red");
            pomodoro.html("<h1>Break!</h1><h2>" + formatTime(count) + "</h2>");
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
        } else if (pause === true) {
            clearInterval(counting);
            pause = false;
        }
    });
});