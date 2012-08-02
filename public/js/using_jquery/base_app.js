App = {};

App.BaseApp = {

  extend: function (object) {

    object.templates = object.templates || [];

    object.loadTemplates = function () {
      $(this.templates).each(function (index, name) {
        $.get('/js/templates/' + name + '.html.haml', function (template) {
          var templateElement = $('<script type="text/haml-template" id="' + name + '-template"></script>');
          templateElement.html(template).appendTo($('body'));
        });
      });
    };

    object.init = function () {
      this.loadTemplates();

      if(this.afterInit) {
        this.afterInit();
      }
    };

    object.renderTemplate = function (sourceId, model) {
      var fn = haml.compileHaml({sourceId: sourceId});
      return fn({model: model});
    };

    return function () {
      return object;
    };

  }

};
