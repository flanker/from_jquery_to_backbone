App.views.TitleView = Backbone.View.extend({

  className: 'part',

  initialize: function () {
    this.render();
  },

  render: function () {
    var html = App.helper.renderTemplate('title-template', {
      title: 'From jQuery To Backbone'
    });
    $(this.el).html(html);
  }

});