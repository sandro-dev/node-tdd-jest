const bcrypt = require("bcrypt");

module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert(
      "users",
      [
        {
          name: "Sandro",
          email: "sandro.dev@gmail.com",
          password: bcrypt.hashSync("Sa123456", 8),
          phone: "+5571988928742",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Zeca",
          email: "admin@sandrosantos.dev",
          password: bcrypt.hashSync("Ad123456", 8),
          phone: "+5571988776655",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {}
    ),

  down: () => {},
};
