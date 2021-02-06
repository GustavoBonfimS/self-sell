const router = require('express').Router();
const ProductsRoutes = require('./ProductsRoutes');
const RequestsRoutes = require('./RequestsRoutes');
const ReportsRoutess = require('./ReportsRoutes');

router.get('/', (req, res) => {
  return res.json({
    message: 'hello, its a api for self-sell!',
  });
});

router.use('/product', ProductsRoutes);
router.use('/request', RequestsRoutes);
router.use('/report', ReportsRoutess);

module.exports = router;
