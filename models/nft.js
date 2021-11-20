const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


    nft.init(
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
            }
          }
          }
    );