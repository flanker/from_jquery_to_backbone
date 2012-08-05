var tweets = [];
for (var i = 0; i < 10; i++) {
  tweets.push({
    tweet: 'a old tweet',
    created_at: i + ' days ago'
  });
}

var currentTweet = new App.models.Tweet({
  tweet: '',
  created_at: ''
});

$(function () {
  App.helper.loadTemplates(function () {
    var childViews = [
      new App.views.TitleView().el,
      new App.views.TweetFormView({model: currentTweet}).el,
      new App.views.TweetsView({collection: new App.models.Tweets(tweets)}).el
    ];
    $('.main-container').html(childViews);
  });
});
