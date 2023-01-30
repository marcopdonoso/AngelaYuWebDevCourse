$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({
        "font-size": "5rem",
        opacity: 0.5,
        margin: "0 0 0 300"
    });
});