var rawTweets = [];
for (var i = 0; i < 10; i++) {
  rawTweets.push({
    tweet: 'a old tweet',
    created_at: i + ' days ago'
  });
}

var currentTweet = new App.models.Tweet({
  tweet: '',
  created_at: ''
});

var tweets = new App.models.Tweets(rawTweets);

$(function () {
  App.helper.loadTemplates(function () {
    var childViews = [
      new App.views.TitleView().el,
      new App.views.TweetFormView({model: currentTweet}).el,
      new App.views.TweetsView({collection: new App.models.Tweets(tweets)}).el
    ];
    var tweetAppView = new App.views.TweetAppView({model: currentTweet, collection: tweets}).el;
    $('.main-container').html(tweetAppView);
  });
});
