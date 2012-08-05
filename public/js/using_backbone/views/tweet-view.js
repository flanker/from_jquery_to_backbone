App.views.TweetView = Backbone.View.extend({

  tagName: 'li',

  initialize: function () {
    this.render();
  },

  render: function () {
    var html = App.helper.renderTemplate('tweet-template', {
      model: this.model
    });
    $(this.el).html(html);
  }

});