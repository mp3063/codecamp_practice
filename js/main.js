'use strict';

$(document).ready(function () {
    var api   = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    var input = $("input[name='search']");
    var page  = 'https://en.wikipedia.org/?curid=';
    $(".search-wiki").on("click", function () {
        $.ajax({
            method: "post",
            dataType: 'jsonp',
            url: api + input.val(),
            beforeSend: function beforeSend(xhr) {
                xhr.setRequestHeader("Access-Control-Allow-Origin: http://localhost:8080");
            },
            success: function success(results) {
                var pages = results.query.pages;
                console.log(pages);
                $(".output").empty();
                for (var result in pages) {
                    $(".output")
                            .append('\n<a class="link-unstyled" href="https://en.wikipedia.org/wiki/' + pages[result].title + '" target="_blank"><div class="panel panel-default">\n  <div class="panel-heading">\n    <h3 class="panel-title text-center">' + pages[result].title + '</h3>\n  </div>\n  <div class="panel-body text-center">\n    ' + pages[result].extract + '\n  </div>\n</div></a>\n');
                }
            }
        });
    });
});