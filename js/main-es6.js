$(document).ready(function () {
    let numbersEntry          = $(".numbers-entry");
    let operators             = $(".operator");
    let ac                    = $(".ac");
    let ce                    = $(".ce");
    let equalSign             = $(".equal-sign");
    let dot                   = $(".dot");
    let values                = [];
    let resetScreenConditions = ["/", "x", "X", "+", "-"];

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
        }
        else {
            values.push(parseInt(numbersEntry.text()));
            let firstNumber  = values[0];
            let operator     = values[1];
            let secondNumber = values[2];

            let res = result(firstNumber, secondNumber, operator);
            values  = [];
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
            let firstNumber  = parseInt(values[0]);
            let operator     = values[1];
            let secondNumber = parseInt(values[2]);

            values  = [];
            let res = result(firstNumber, secondNumber, operator);
            numbersEntry.text(res);
        }
        console.log(values);
    });
});