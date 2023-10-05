const users = require("./users");
const trakers = require("./trakers");

module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define("products", {
    ID_product: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    png: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pub: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gallery: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  products.associate = (models) => {
    products.belongsToMany(models.users, {
      through: models.trakers,
      onDelete: "CASCADE",
      foreignKey: "productId",
    });
  };

  return products;
};
