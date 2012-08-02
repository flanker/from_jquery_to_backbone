$(function () {
  App.helper.loadTemplates(function () {
    var childViews = [
      new App.views.TitleView().el,
      new App.views.TweetsView({model: {tweet: 'hello', created_at: 'test'}}).el
    ];
    $('.main-container').html(childViews);
  });
});
