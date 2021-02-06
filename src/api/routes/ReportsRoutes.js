const router = require('express').Router();
const { Reports } = require('../models');

router.get('/', async (req, res) => {
  const rq = await Reports.findAll();
  return res.status(200).json(rq);
});

router.post('/', async (req, res) => {
  const rq = await Reports.create(req.body);
  return res.status(200).json(rq);
});

module.exports = router;
