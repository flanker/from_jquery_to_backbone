describe('App.models.Tweet', function () {

  var tweet;

  beforeEach(function () {
    tweet = new App.models.Tweet();
  });

  it('should have the default value', function () {
    expect(tweet.get('tweet')).toEqual('');
  });

});