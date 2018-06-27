$("button").hover(function() {
    $("#wrapper").css("background-image", `url("beach.jpg")`);
},
function() {
    $("#wrapper").css("background", "black");
});

$("button").click(function() {
    console.log("turning off");
    $("button").off("mouseenter mouseleave");
})
