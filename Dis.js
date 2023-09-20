$(document).ready(function(){
    $('#checked').click(function() {
        if ($('#button').is(':disabled')) {
            $('#button').removeAttr('disabled');
        } else {
            $('#button').attr('disabled', 'disabled');
        }
})
});
