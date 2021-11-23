// import  models
const Nft = require("./Nft");
const User = require("./User");

User.hasMany(Nft, {
  foreignKey: "name",
  onDelete: "CASCADE",
});

Nft.belongsTo(User, {
  foreignKey: "name",
});

module.exports = { User, Nft };
// renamed to upper