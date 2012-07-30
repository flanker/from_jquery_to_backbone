App.AppUsingJquery = App.BaseApp.extend({

    templates: [
      'tweet'
    ],

    afterInit: function () {

      var self = this;

      $('#tweets').submit(function(e) {
          e.preventDefault();

          $.ajax({
              url: '/tweet/create',
              type: 'POST',
              dataType: 'json',
              data: { tweet: $('#tweet-box', this).val() },
              success: function(data) {
                  var html = self.renderTemplate('tweet-template', data);
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
