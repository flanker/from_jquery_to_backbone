describe('App.views.TweetFormView', function () {

  var view;
  var tweet;

  beforeEach(function () {
    tweet = new App.models.Tweet();
    loadTemplates(function () {
      view = new App.views.TweetFormView({model: tweet});
    });
  });

  describe('#render', function () {

    it('should render the text box', function () {
      expect($('textarea#tweet-box', view.el)).toExist();
    });

    it('should render the tweet button', function () {
      expect($('input.btn-tweet', view.el)).toExist();
    });

  });

  describe('edit', function () {

    beforeEach(function () {
      $('#tweet-box', view.el).val('a new message').trigger('blur');

    });

    it('should update the tweet model', function () {
      expect(tweet.get('tweet')).toEqual('a new message');
    });

  });

});