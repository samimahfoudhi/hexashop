const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ProductCard = sequelize.define(
    "ProductCard",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timesTamps: true,
    }
  );
  ProductCard.associate = (models) => {
    ProductCard.belongsTo(models.Client, {
      onDelete: "cascade",
    });
  };
  return ProductCard;
};
