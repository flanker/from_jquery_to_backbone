App = {};

App.BaseApp = {

  extend: function (object) {

    object.templates = object.templates || [];

    object.loadTemplates = function () {
      $(this.templates).each(function (index, name) {
        $.get('/js/templates/' + name + '.html.haml', function (template) {
          var templateElement = $('<script type="text/haml-template" id="' + name + '-template"></script>');
          templateElement.html(template).appendTo($('#haml-templates'));
        });
      });
    };

    object.init = function () {
      this.loadTemplates();

      if(this.afterInit) {
        this.afterInit();
      }
    };

    return function () {
      return object;
    };

  }

};
