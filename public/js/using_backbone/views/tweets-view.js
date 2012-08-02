App.views.TweetsView = Backbone.View.extend({

  className: 'tweets',

  initialize: function () {
    this.render();
  },

  render: function () {
    var fn = haml.compileHaml({sourceId: 'tweets-template'});
    var html = fn({model: this.model});
    $(this.el).html(html);
  }

});