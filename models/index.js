// import models
const nft = require("./Nft");
const user = require("./User");

user.hasMany(nft, {
  foreignKey: "name",
  onDelete: "CASCADE",
});

nft.belongsTo(user, {
  foreignKey: "name",
});

module.exports = { user, nft };
