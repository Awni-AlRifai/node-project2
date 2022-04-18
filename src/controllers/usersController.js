const { User } = require('../models');

module.exports = {
  async getAll(request, response) {
    try {
      const users = await User.findAll();
      return response.status(200).send(users);
    } catch (error) {
      return response.status(500).send({ error: 'server error' });
    }
  },
  async show(request, response) {
    try {
      const user = await User.findByPk(request.params.userId, {});
      if (!user) return response.status(404).send({ error: 'User not found' });
      return response.status(200).send(user);
    } catch (error) {
      return response.status(500).send({ error: error.message });
    }
  },

  create(request, response) {
    return User.create({
      username: request.body.username,
      email: request.body.email,
    })
      .then((user) => response.status(200).send(user))
      .catch((error) => response.status(400).send(error));
  },
  async update(request, response) {
    try {
      const USER_MODEL = {
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
      };

      const [status, user] = await User.update(USER_MODEL, {
        returning: true,
        where: { id: request.params.userId },
      });
      if (status === 0)
        return response
          .status(404)
          .send({ error: 'The user you are trying to update was not found' });
      return response.status(200).send(user);
    } catch (error) {
      return response.status(500).send(error);
    }
  },
  async delete(request, response) {
    try {
      const user = await User.destroy({ where: { id: request.params.userId } });
      if (user === 0)
        return response
          .status(404)
          .send({ error: 'The user you are trying to delete was not found' });
      return response.sendStatus(204);
    } catch (error) {
      return response.status(500).send(error);
    }
  },
};
