var App = {};

App.views = {};
App.models = {};

var templates = [
  'tweets'
];

$(function () {
  $(templates).each(function (index, name) {
    $.get('/js/using_backbone/templates/' + name + '-template.html.haml', function (template) {
      var templateElement = $('<script type="text/haml-template" id="' + name + '-template"></script>');
      templateElement.html(template).appendTo($('#haml-templates'));
      init();
    });
  });
});

var init = function () {
  var tweetsView = new App.views.TweetsView({model: {tweet: 'hello', created_at: 'test'}});
  $('.main-container').html(tweetsView.el);
};