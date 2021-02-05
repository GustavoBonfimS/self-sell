const router = require('express').Router();
const { Requests } = require('../models');

router.get('/', async (req, res) => {
  const rq = await Requests.findAll();
  return res.status(200).json(rq);
});

router.post('/', async (req, res) => {
  const rq = await Requests.create(req.body);
  return res.status(200).json(rq);
});

module.exports = router;
