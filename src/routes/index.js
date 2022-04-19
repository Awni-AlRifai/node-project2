const express = require('express');
const usersController = require('../controllers').users;
const { validateUser } = require('../middlewares/validators/userValidator');

const router = express.Router();
router.get('/users', usersController.getAll);
router.put('/users/:userId', usersController.update);
router.route('/users/').post(validateUser, usersController.create);
// router.post('/users', usersController.create);
router.get('/users/:userId', usersController.show);
router.delete('/users/:userId', usersController.delete);

module.exports = router;
