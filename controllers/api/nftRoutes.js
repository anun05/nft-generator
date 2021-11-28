const router = require("express").Router();
const { Nft } = require("../../models");
const withAuth = require('../../utils/auth');
require('dotenv').config();

router.post('/', withAuth, async (req, res) => {
    try {
      const newNft = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
        public_key: process.env.PUBLIC_KEY,
      });
  
      res.status(200).json(newNft);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;