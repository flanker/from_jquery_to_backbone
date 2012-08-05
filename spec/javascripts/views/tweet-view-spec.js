describe('App.views.TweetView', function () {

  var view;
  var tweet;

  beforeEach(function () {
    tweet = new App.models.Tweet({
      tweet: 'some message',
      created_at: '2012/08/01 12:00'
    });
    loadTemplates(function () {
      view = new App.views.TweetView({model: tweet});
    });
  });

  describe('#render', function () {

    it('should render the date', function () {
      expect($('.tweet-date', view.el)).toHaveText('2012/08/01 12:00');
    });

    it('should render the tweet message', function () {
      expect($('.tweet-content', view.el)).toHaveText('some message');
    });

  });

});