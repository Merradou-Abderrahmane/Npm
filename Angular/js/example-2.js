$(document).ready(function(){

    $('#input').keyup(function(){
        $value = $(this).val();
        $('#display').text($value);
    });
});