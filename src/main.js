requirejs.config({
  baseUrl: 'lib/',
  paths: {
    app: '../src/helpers'
  }
});

requirejs(['app/alert', 'handlebars'], function (alert_me, handlebars) {
  console.log(handlebars.VERSION);
});
