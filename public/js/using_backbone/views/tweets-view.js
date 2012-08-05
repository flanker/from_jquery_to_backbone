App.views.TweetsView = Backbone.View.extend({

  className: 'timeline',

  initialize: function () {
    this.render();
  },

  render: function () {
    var html = App.helper.renderTemplate('tweets-template', {});
    $(this.el).html(html);

    this.renderTweets();
  },

  renderTweets: function () {
    var childViews = this.collection.map(function (tweet) {
      return new App.views.TweetView({model: tweet}).el;
    });
    $('ul', this.el).html(childViews);
  }

});