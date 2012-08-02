App.views.TweetsView = Backbone.View.extend({

  className: 'tweets',

  initialize: function () {
    this.render();
  },

  render: function () {
    var html = App.helper.renderTemplate('tweets-template', this.model);
    $(this.el).html(html);
  }

});