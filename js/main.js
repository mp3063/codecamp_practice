"use strict";

$(document).ready(function () {
    var usernames  = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "ROOTCatZ", "brunofin", "comster404"];
    var baseUrl    = "https://wind-bow.gomix.me/twitch-api/channels/";
    var baseUrlStr = "https://wind-bow.gomix.me/twitch-api/streams/";

    usernames.forEach(function (username) {
        $.ajax({
            method: "GET",
            url: baseUrlStr + username,
            crossdomain: true,
            dataType: 'jsonp',
            success: function success(data) {
                var htmlTemplate = "\n<a href=\"" + ("https://www.twitch.tv/" + username.toLowerCase()) + "\" target=\"_blank\" class=\"link-unstyled\">\n    <div class=\"well text-center on-hover " + (data.stream == null ? "offline" + username : "online" + username) + "\"><h4>" + username.toUpperCase() + "</h4>\n        <p>" + ("https://www.twitch.tv/" + username.toLowerCase()) + "</p>\n        <small>" + (data.stream == null ? "offline" : "online") + "</small>\n        <div class=\"additional\"></div>\n    </div>\n</a>";
                $(".output").append(htmlTemplate);
                if (data.stream !== null) {
                    $(".online" + username).append("<small>" + data.stream.game + "</small>");
                }
            }
        });
    });

    function checkUserChanell(users) {
        users.forEach(function (username) {
            $.ajax({
                method: "GET",
                url: baseUrl + username,
                success: function success(data) {
                    console.log(data.status);
                    if (data.status == 404) {
                        $(".offline" + username)
                                .append("<span class=\"label label-default\">" + data.message + "</span>");
                    }
                }
            });
        });
    }

    function removeAndAddActive() {
        $(".active").removeClass("active");
        $(this).parent().addClass("active");
    }

    $(".offLink").on("click", function (e) {
        e.preventDefault();
        removeAndAddActive.call(this);
        $("[class*=online]").hide();
        $("[class*=offline]").show();
    });
    $(".all").on("click", function (e) {
        e.preventDefault();
        removeAndAddActive.call(this);
        $("[class*=online]").show();
        $("[class*=offline]").show();
    });
    $(".onLink").on("click", function (e) {
        e.preventDefault();
        removeAndAddActive.call(this);
        $("[class*=offline]").hide();
        $("[class*=online]").show();
    });
    checkUserChanell(usernames);
});