const router = require('express').Router();
const userRoutes = require('./userRoutes');
const nftRoutes = require('./nftRoutes');

router.use('/users', userRoutes);
router.use('/nfts', nftRoutes);


module.exports = router;
