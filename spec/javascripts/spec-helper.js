var templatesLoaded = false;

var loadTemplates = function (callback) {
  if (templatesLoaded === false) {
    runs(function () {
      App.helper.loadTemplates(function () {
        templatesLoaded = true;
      }, {
        publicPath: '/public'
      });
    });

    waitsFor(function () {
      return templatesLoaded;
    }, 3000);

  }

  if (callback) {
    runs(callback);
  }
};
