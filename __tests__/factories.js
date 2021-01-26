import factory from "factory-girl";
import faker from "faker";

import User from "../src/app/models/User";

factory.define("User", User, () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: "Sa123456",
  phone: faker.phone.phoneNumber("+55##########"),
}));

module.exports = factory;
