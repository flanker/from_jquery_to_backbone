describe('App.views.TweetFormView', function () {

  var view;

  beforeEach(function () {
    loadTemplates(function () {
      view = new App.views.TweetFormView();
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

});