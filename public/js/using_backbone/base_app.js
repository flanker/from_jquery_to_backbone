var App = {};

App.views = {};
App.models = {};
App.helper = {};
App.config = {};

App.config.templates = [
  'tweets'
];

App.helper.loadTemplates = function (callback) {
  var loadedTemplates = 0;

  $(App.config.templates).each(function (index, name) {
    $.get('/js/using_backbone/templates/' + name + '-template.html.haml', function (template) {
      registerTemplate(name, template);
      loadedTemplates ++;
      if (isLoadComplete()) {
        callback();
      }
    });
  });

  var registerTemplate = function (name, template) {
    var templateElement = $('<script type="text/haml-template" id="' + name + '-template"></script>');
    templateElement.html(template).appendTo($('#haml-templates'));
  };

  var isLoadComplete = function () {
    return loadedTemplates === App.config.templates.length;
  };
};

App.helper.renderTemplate = function (sourceId, model) {
  var fn = haml.compileHaml({sourceId: sourceId});
  return fn({model: model});
};