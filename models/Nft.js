const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');
const User = require('./user.js');
//
class Nft extends Model {}

    Nft.init(
        {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          nft_name:{
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                max: 23, 
              },
          },
          public_key: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [42],
              },
          },
          description: {
            type: DataTypes.STRING,
            allowNull: true,
            validate:{
              max: 200,
            },
          },
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: "user",
              key: "id",
            },
          }

          },
          {
            hooks: {
              beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
              },
              beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(
                  updatedUserData.password,
                  10
                );

                return updatedUserData;
              },
            },
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: "user",
          }
          
          
    );

    module.exports = Nft;
   