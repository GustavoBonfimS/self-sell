const router = require('express').Router();
const ProductsRoutes = require('./ProductsRoutes');
const RequestRoutes = require('./RequestsRoutes');

router.get('/', (req, res) => {
  return res.json({
    message: 'hello, its a api for self-sell!',
  });
});

router.use('/product', ProductsRoutes);
router.use('/request', RequestRoutes);

module.exports = router;
