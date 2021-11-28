const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection.js");
const User = require("./user.js");

class Nft extends Model {}

Nft.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nft_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 23,
      },
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // transaction_id: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    public_key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: [42],
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        max: 200,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Nft",
  }
);

module.exports = Nft;
