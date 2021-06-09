module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("shop", {
    vendor: {
      type: Sequelize.STRING
    },
    typeproduct: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.STRING
    }
  });

  return Tutorial;
};
