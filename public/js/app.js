$(document).ready(function() {
    $('#tweets').submit(function(e) {
        e.preventDefault();

        $.ajax({
            url: '/tweet/create',
            type: 'POST',
            dataType: 'json',
            data: { tweet: $('#tweet-box', this).val() },
            success: function(data) {
                $('ul').prepend('<li>' + data.created_at + ': ' + data.tweet + '</li>');
                $('#tweet-box').val('');
            }
        });
    });
});