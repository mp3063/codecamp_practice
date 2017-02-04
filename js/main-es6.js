$(document).ready(function () {
    let api   = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    let input = $("input[name='search']");
    let page  = 'https://en.wikipedia.org/?curid=';
    $(".search-wiki").on("click", function () {
        $.ajax({
            method: "post",
            dataType: 'jsonp',
            url: api + input.val(),
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Access-Control-Allow-Origin: http://localhost:8080");
            },
            success: function (results) {
                let pages = results.query.pages;
                console.log(pages)
                $(".output").empty();
                for (let result in pages) {
                    $(".output").append(`
<a class="link-unstyled" href="https://en.wikipedia.org/wiki/${pages[result].title}" target="_blank"><div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title text-center">${pages[result].title}</h3>
  </div>
  <div class="panel-body text-center">
    ${pages[result].extract}
  </div>
</div></a>
`);
                }


            }
        });
    });
});
