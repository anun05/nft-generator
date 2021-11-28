const router = require("express").Router();
const { Nft, User } = require("../../models");
const withAuth = require("../../utils/auth");
require("dotenv").config();
const path = require('path');
const fs = require('fs');

router.get("/", async (req, res) => {
  try {
    const nftData = await Nft.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const nfts = nftData.map((nft) => nft.get({ plain: true }));

    res.json(nfts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newNft = await Nft.create({
      ...req.body,
      user_id: req.session.user_id,
      public_key: process.env.PUBLIC_KEY,
    });

    if (newNft) {
      fs.writeFileSync(path.join(process.cwd(), "newNft.json"), JSON.stringify(newNft));
      res.status(200).json(newNft)
    }
    
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
