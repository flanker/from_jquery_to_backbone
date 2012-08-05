describe('App.views.TweetAppView', function () {

  var view;
  var tweets;

  beforeEach(function () {
    tweets = new App.models.Tweets();
    loadTemplates(function () {
      view = new App.views.TweetAppView({collection: tweets});
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