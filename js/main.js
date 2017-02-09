"use strict";

$(document).ready(function () {
    var numbersEntry = $(".numbers-entry");
    var operators = $(".operator");
    var ac = $(".ac");
    var ce = $(".ce");
    var equalSign = $(".equal-sign");
    var dot = $(".dot");
    var values = [];
    var resetScreenConditions = ["/", "x", "X", "+", "-"];

    function result(first, second, operator) {
        switch (operator) {
            case "/":
                return first / second;
                break;
            case "X":
                return first * second;
                break;
            case "x":
                return first * second;
                break;
            case "-":
                return first - second;
                break;
            case "+":
                return first + second;
                break;
        }
    }

    $(numbersEntry).text("0");
    $(".number").on("click", function () {
        resetScreenConditions.forEach(function (item) {
            if (item == numbersEntry.text()) {
                $(numbersEntry).text("");
            }
        });
        if ($(numbersEntry).text() === "0") {
            $(numbersEntry).text("");
        }
        if (numbersEntry.text() == values[0]) {
            numbersEntry.text("");
        }

        $(numbersEntry).append($(this).text());
        if (numbersEntry.text().length > 11) {
            numbersEntry.text(numbersEntry.text().substr(0, numbersEntry.text().length - 1));
        }
    });

    $(operators).on("click", function () {
        if (values.length < 2) {
            values.push(numbersEntry.text());
            $(numbersEntry).text($(this).text());
            values.push($(this).text());
        } else {
            values.push(parseInt(numbersEntry.text()));
            var firstNumber = values[0];
            var operator = values[1];
            var secondNumber = values[2];

            var res = result(firstNumber, secondNumber, operator);
            values = [];
            values.push(res);
            values.push($(this).text());
            numbersEntry.text(res);
        }
    });
    $(dot).on("click", function () {
        // Restrict multiple dots
        if (numbersEntry.text().indexOf(".") > -1) {
            numbersEntry.text();
        } else {
            numbersEntry.text(numbersEntry.text() + ".");
        }
    });
    $(ac).on("click", function () {
        // Reset values
        values = [];
        numbersEntry.text("0");
    });
    $(ce).on("click", function () {
        // Back one place each time
        numbersEntry.text(numbersEntry.text().substr(0, numbersEntry.text().length - 1));
    });
    $(equalSign).on("click", function () {
        values.push(numbersEntry.text());
        if (values.length == 3) {
            var firstNumber = parseInt(values[0]);
            var operator = values[1];
            var secondNumber = parseInt(values[2]);

            values = [];
            var res = result(firstNumber, secondNumber, operator);
            numbersEntry.text(res);
        }
        console.log(values);
    });
});