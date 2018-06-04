/*global $*/
$(document).ready(function(){
    $('#yeah').click(function() {
        $('.message1').removeClass('hidden');
        setTimeout(function(){
            $('.rocketstart').addClass('rocketend');
            $('.message2').removeClass('hidden'); 
        }, 2000);
    });
    
    $('#ohshit').click(function(){
        $('.message3').removeClass('hidden');
    });
    
    $('#scream').on('click',function(){
        // $('#scream').off('click');
        var lastwords = $('#lastwords').val();
        if (lastwords == '' || lastwords == ' ') {
            lastwords = '*silence*';
        } else {
            lastwords = '"' + lastwords + '"';
        }
        var possibilities = [
                "Dignified.",
                "Yeah, I'd probably say that, too.",
                "Really? Are you sure? Okay, then."
            ];
        $('#lastwords').addClass('hidden');
        $('#scream').addClass('hidden');
        var randomized = Math.floor(Math.random() * possibilities.length);
        var response = possibilities[randomized];
        $('p.reprint').html(lastwords);
        $('p.response').html(response);
        $('.message4').removeClass('hidden');
    });
});