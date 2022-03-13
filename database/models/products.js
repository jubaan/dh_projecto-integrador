module.exports = (sequelize, dataTypes) => {
  let alias = "Products";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
    },
    model: {
      type: dataTypes.STRING,
    },
    description: {
      type: dataTypes.STRING,
    },
    productImage: {
      type: dataTypes.STRING,
    },
  };
  let config = {
    tableName: "products",
    timestamps: false,
  };
  const Product = sequelize.define(alias, cols, config);

  return Product;
};
