describe('App.views.TweetAppView', function () {

  var view;
  var tweets;
  var tweet;

  beforeEach(function () {
    tweets = new App.models.Tweets();
    tweet = new App.models.Tweet();
    loadTemplates(function () {
      view = new App.views.TweetAppView({collection: tweets, model: tweet});
    });
  });

  describe('#render', function () {

    it('should render the title view', function () {
      expect($('.title', view.el)).toExist();
    });

    it('should render the tweet form', function () {
      expect($('form#tweets', view.el)).toExist();
    });

    it('should render the tweets timeline', function () {
      expect($('.timeline', view.el)).toExist();
    });

  });

});