import User from "../../src/app/models/User";

const models = [User];

module.exports = () =>
  Promise.all(
    models.map((model) => model.destroy({ truncate: true, force: true }))
  );
