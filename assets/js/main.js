jQuery(document).ready(function($) {

    $('#send_button').click(function() {
        $('#send_message').text('');
        $.ajax({
            type:'POST',
            url: '/wp-admin/admin-ajax.php',
            data: {
                action: 'custom_action'
            },
            success:function (output) {
                console.log(output);
                $('#send_message').text('Success!');
                $.cookie("var1", output);
               
            },
            error:function (error) {
                console.log('Error');
                $('#send_message').text('Error: ' + error);
            }

        });
    });

});