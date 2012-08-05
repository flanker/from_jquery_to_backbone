App.views.TweetAppView = Backbone.View.extend({

  initialize: function () {
    this.createCurrentTweet();
    this.render();
  },

  render: function () {
    var childViews = [
      new App.views.TitleView().el,
      new App.views.TweetFormView({model: this.currentTweet}).el,
      new App.views.TweetsView({collection: this.collection}).el
    ];
    $(this.el).html(childViews);
  },

  createCurrentTweet: function () {
    this.currentTweet = new App.models.Tweet();
  }


});