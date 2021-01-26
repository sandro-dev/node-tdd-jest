import bcrypt from "bcrypt";
import "../../src/database";
import User from "../../src/app/models/User";

const truncate = require("../utils/truncate");

describe("User", () => {
  beforeAll(async () => {
    await truncate();
  });

  it("should be able to encrypt user password", async () => {
    const user = await User.create({
      name: "Sandro Santos",
      email: "sandro@sandrosantos.dev",
      password: "Sa123456",
      phone: "+5571988928742",
    });

    const compareHash = await bcrypt.compare("Sa123456", user.password);

    expect(compareHash).toBe(true);
  });
});
