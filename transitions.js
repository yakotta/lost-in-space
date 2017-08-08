$(document).ready(function(){
    $("#yeah").click(function() {
        $('.rocketstart').toggleClass('.rocketend');
    });
});

$(document).ready(function(){
    $("#yeah").click(function(){
        $("#rocket").animate({
            height: "10px",
            top: 10%;
            right: 30%;
        });
        /* $("div").animate({width: "150px"});
        $("div").delay(1200).animate({height: "300px"}); */
    });
});