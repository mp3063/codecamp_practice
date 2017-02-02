$(document).ready(function ()
{
    $.ajax({
        method: "GET", url: "http://api.icndb.com/jokes/random", success: function (joke)
        {
            $(".joke").html(joke.value.joke);
        }
    });
    $(".new-joke").on("click", function (e)
    {
        e.preventDefault();
        $.ajax({
            method: "GET", url: "http://api.icndb.com/jokes/random", success: function (joke)
            {
                $(".joke").html(joke.value.joke);
            }
        });
    });
    $(".tweet-quote").on('click', function ()
    {
        var joke = $(".joke").text();
        console.log(joke);
        $(this).attr('href',
            'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
            + encodeURIComponent('"' + joke + '"')).attr('target', '_blank');
    });
});