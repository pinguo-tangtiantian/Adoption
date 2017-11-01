module.exports = function (app) {
  app.use('/', require('./home'));
  app.use('/guide', require('./guide'));
};