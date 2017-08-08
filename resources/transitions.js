/* global $ */
$(document).ready(function(){
    $("#yeah").click(function() {
        $('.hiddenmessage1').toggleClass('revealmessage1');
        setTimeout(function(){
            $('.rocketstart').toggleClass('rocketend');
            $('.hiddenmessage2').toggleClass('revealmessage2'); 
        }, 2000);
    });
    
    $('#ohshit').click(function(){
        $('.hiddenmessage3').toggleClass('revealmessage3');
    });
    
    $('#scream').click(function(){
        var possibilities = [
                "Dignified.",
                "Yeah, I'd probably say that, too.",
                "Really? Are you sure? Okay, then."
            ];
        var randomized = Math.floor(Math.random() * possibilities.length);
        var response = possibilities[randomized];
        $('p.response').append(response);
        $('.hiddenmessage4').toggleClass('revealmessage4');
    });
});