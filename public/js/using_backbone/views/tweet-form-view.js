App.views.TweetFormView = Backbone.View.extend({

  className: 'part',

  events: {
    'blur #tweet-box': 'updateTweet',
    'click input[type="submit"]': 'save'
  },

  initialize: function () {
    this.render();
  },

  render: function () {
    var html = App.helper.renderTemplate('tweet-form-template', {});
    $(this.el).html(html);
  },

  updateTweet: function () {
    var tweet = $('#tweet-box', this.el).val();
    this.model.set('tweet', tweet);
  },

  save: function (e) {
    this.model.save();
    return false;
  }

});