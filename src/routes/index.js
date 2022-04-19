const usersController = require('../controllers').users;

module.exports = (app) => {
  app.put('/users/:userId', usersController.update);
  app.post('/users', usersController.create);
  app.get('/users/:userId', usersController.show);
  app.delete('/users/:userId', usersController.delete);
  app.get('/users', usersController.getAll);
};
