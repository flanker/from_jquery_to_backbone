describe('App.views.TweetsView', function () {

  var views;
  var tweet;

  beforeEach(function () {
    tweets = new App.models.Tweets([{
      tweet: 'some message',
      created_at: '2012/08/01 12:00'
    }, {
      tweet: 'another message',
      created_at: '2012/08/02 12:00'
    }]);
    loadTemplates(function () {
      view = new App.views.TweetsView({collection: tweets});
    });
  });

  describe('#render', function () {

    it('should render timeline title', function () {
      expect($('.hint', view.el)).toHaveText('Tweet timeline:');
    });

    it('should render two tweets', function () {
      expect($('.tweet-date', view.el).length).toEqual(2);
    });

  });

});