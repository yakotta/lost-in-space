<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="resources/stylesheet.css" />
    </head>
    <body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

        <img id="astronaut" src="resources/img-astronaut.png" />
        <img id="rocket" class="rocketstart rockettransform" src="resources/img-rocket.png" />
        
        <div class="text">
            <p>
                This is you. You're an astronaut. Cool, right?
            </p>
            <p>
                <button id="yeah" type="button">Yeah</button>
            </p>
        </div>
        
        <div class="hiddenmessage2 text">
            <p>
                That's your rocket. It's drifting away.
            </p>
            <p>
                <button id="ohshit" type="button">Oh shit</button>
            </p>
        </div>
        
        <div class="hiddenmessage3 text">
            <p>
                Oh shit is right. You're gonna die here. Alone. 
                Helpless.
            </p>
            <p>
                Any last words?
            </p>
            <p>
                <textarea id="lastwords" rows="3" cols="20"></textarea>
                <button id="scream" type="button">*scream into the void*</button>
            </p>
        </div>
        
        <div class="hiddenmessage4 text">
            <p class="response"></p>
            <p>
                Anyways. Enjoy the quiet. Or don't. Whatever. 
            </p>
        </div>
        
        <script>
            $(document).ready(function(){
                $("#yeah").click(function() {
                    $('.rocketstart').toggleClass('rocketend');
                    $('.hiddenmessage2').toggleClass('revealmessage2');
                });
                
                $('#ohshit').click(function(){
                    $('.hiddenmessage3').toggleClass('revealmessage3');
                });
                
                $('#scream').click(function(){
                    var possibilities = [
                            "Dignified",
                            "Yeah, I'd probably say that, too",
                            "Really? Are you sure? Okay, then"
                        ];
                    var randomized = Math.floor(Math.random() * possibilities.length);
                    var response = possibilities[randomized];
                    $('p.response').append(response);
                    $('.hiddenmessage4').toggleClass('revealmessage4');
                });
            });
        </script>
        </body>
</html>