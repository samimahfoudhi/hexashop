const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Client = sequelize.define(
    "Client",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "UserName is required" },
          len: { args: [0, 32], msg: "Name must be at most 32 characters" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: "Email is required" },
          isEmail: { msg: "Please add a valid email" },
        },
      },

      role: {
        type: DataTypes.ENUM("Admin", "Client"),
        allowNull: false,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  Client.associate = (models) => {
    Client.hasMany(models.ProductCard, {
      onDelete: "cascade",
    });
  };
  return Client;
};
