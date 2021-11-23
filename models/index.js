// import models
const nft = require('./nft');
const user = require('./user');


user.hasMany(nft, {
    foreignKey: 'name',
    onDelete: 'CASCADE'
  });
  
  nft.belongsTo(user, {
    foreignKey: 'name'
  });
  
  module.exports = { user, nft };
  