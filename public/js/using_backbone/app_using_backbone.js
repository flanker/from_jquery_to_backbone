$(function () {
  App.helper.loadTemplates(function () {
    var tweetsView = new App.views.TweetsView({model: {tweet: 'hello', created_at: 'test'}});
    $('.main-container').html(tweetsView.el);
  });
});
