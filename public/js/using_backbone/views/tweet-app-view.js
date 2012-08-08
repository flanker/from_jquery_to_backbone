App.views.TweetAppView = Backbone.View.extend({

  initialize: function () {
    this.render();
    _(this).bindAll('saved');
    this.model.on('sync', this.saved);
  },

  render: function () {
    this.titleView = new App.views.TitleView();
    this.tweetForm = new App.views.TweetFormView({model: this.model});
    this.timelineView = new App.views.TweetsView({collection: this.collection});
    $(this.el).html([this.titleView.el, this.tweetForm.el, this.timelineView.el]);
  },

  updateTweetForm: function () {
    this.model.on('sync', this.saved);
    this.tweetForm.model = this.model;
    this.tweetForm.render();
  },

  saved: function () {
    this.collection.add(this.model.clone());
    this.model = new App.models.Tweet();
    this.updateTweetForm();
  }

});
