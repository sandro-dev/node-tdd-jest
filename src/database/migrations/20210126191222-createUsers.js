module.exports = {
  up: async (queryInterface, Sequelize) => {
    if (process.env.DB_DIALECT === "postgres") {
      queryInterface.sequelize.query(
        'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'
      );
    }

    queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID(),
        allowNull: false,
        primaryKey: true,
        generationStrategy: "uuid",
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },

      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      phone: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => queryInterface.dropTable("users"),
};
