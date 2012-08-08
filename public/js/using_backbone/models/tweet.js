App.models.Tweet = Backbone.Model.extend({

  urlRoot : '/tweets',

  defaults: {
    'tweet': ''
  }

});