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
    var tweetAppView = new App.views.TweetAppView({model: currentTweet, collection: tweets}).el;
    $('.main-container').html(tweetAppView);
  });
});
