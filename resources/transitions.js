/*global $*/
$(document).ready(function(){
    $("#yeah").click(function() {
        $('.hiddenmessage1').addClass('revealmessage1');
        setTimeout(function(){
            $('.rocketstart').addClass('rocketend');
            $('.hiddenmessage2').addClass('revealmessage2'); 
        }, 2000);
    });
    
    $('#ohshit').click(function(){
        $('.hiddenmessage3').addClass('revealmessage3');
    });
    
    $('#scream').on("click",function(){
        $('#scream').off("click");
        var possibilities = [
                "Dignified.",
                "Yeah, I'd probably say that, too.",
                "Really? Are you sure? Okay, then."
            ];
        var randomized = Math.floor(Math.random() * possibilities.length);
        var response = possibilities[randomized];
        $('p.response').append(response);
        $('.hiddenmessage4').addClass('revealmessage4');
    });
});