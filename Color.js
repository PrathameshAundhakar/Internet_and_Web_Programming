$(document).ready(function(){
    $("#red").mousemove(function(){
        $("body").css('background-color','red');
    });
    $("#green").mousemove(function(){
        document.body.style.backgroundColor = "green";
    });
    $("#blue").mousemove(function(){
        document.body.style.backgroundColor = "blue";
    })

})