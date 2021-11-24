// import  models
const Nft = require("./Nft");
const User = require("./User");

User.hasMany(Nft, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Nft.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Nft };
