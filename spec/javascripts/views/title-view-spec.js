describe('App.views.TitleView', function () {

  var view;

  beforeEach(function () {
    loadTemplates(function () {
      view = new App.views.TitleView();
    });
  });

  describe('#render', function () {

    it('should render the application title', function () {
      expect($('.title', view.el)).toHaveText('From jQuery To Backbone');
    });

  });

});