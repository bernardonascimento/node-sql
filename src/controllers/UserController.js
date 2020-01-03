const Usuario = require('../models/Usuario');

module.exports = {
  async index(req, res) {
    const usuarios = await Usuario.findAll();

    return res.json(usuarios);
  },

  async store(req, res) {
    const { nome, email } = req.body;

    const usuario = await Usuario.create({ nome, email });

    return res.json(usuario);
  }
}