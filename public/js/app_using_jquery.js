App.AppUsingJquery = function () {
  return {

    templates: [
      'tweet'
    ],

    loadTemplates: function () {
      $(this.templates).each(function (index, name) {
        $.get('/js/templates/' + name + '.html.haml', function (template) {
          console.log(template);
          var templateElement = $('<script type="text/haml-template" id="' + name + '-template"></script>');
          templateElement.html(template);
          $('#haml-templates').append(templateElement);
        });
      });
    },

    init: function () {

      this.loadTemplates();

      $(function () {
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
      });

    }

  };
};

var appUsingJquery = new App.AppUsingJquery();
appUsingJquery.init();