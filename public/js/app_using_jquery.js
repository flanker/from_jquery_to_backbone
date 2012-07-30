App.AppUsingJquery = App.BaseApp.extend({

    templates: [
      'tweet'
    ],

    afterInit: function () {

      $('#tweets').submit(function(e) {
          e.preventDefault();

          $.ajax({
              url: '/tweet/create',
              type: 'POST',
              dataType: 'json',
              data: { tweet: $('#tweet-box', this).val() },
              success: function(data) {
                  var fn = haml.compileHaml({sourceId: 'tweet-template'});
                  var html = fn({model: {
                    created_at: data.created_at,
                    tweet: data.tweet
                  }});
                  $('.timeline ul').prepend(html);
                  $('#tweet-box').val('');
              }
          });
      });

    }

});

$(function () {
  var appUsingJquery = new App.AppUsingJquery();
  appUsingJquery.init();
});
