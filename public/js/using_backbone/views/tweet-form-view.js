App.views.TweetFormView = Backbone.View.extend({

  className: 'part',

  initialize: function () {
    this.render();
  },

  render: function () {
    var html = App.helper.renderTemplate('tweet-form-template', {});
    $(this.el).html(html);
  }

});