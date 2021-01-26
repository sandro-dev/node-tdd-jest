import "../../src/database";

const request = require("supertest");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../factories");

describe("Authenticate", () => {
  beforeAll(async () => {
    await truncate();
  });

  it("should be able to authenticate with valid credentials", async () => {
    const user = await factory.create("User", {
      password: "Sa123456",
    });

    const response = await request(app).post("/session").send({
      email: user.email,
      password: "Sa123456",
    });
    expect(response.status).toBe(200);
  });

  it("should not be able to authenticate with invalid credentials", async () => {
    const user = await factory.create("User", {
      password: "Sa123456",
    });

    const response = await request(app).post("/session").send({
      email: user.email,
      password: "Sa123456",
    });
    expect(response.status).toBe(200);
  });

  it("should NOT be able to authenticate with invalid credentials", async () => {
    const user = await factory.create("User", {
      password: "Sa123456",
    });

    const response = await request(app).post("/session").send({
      email: user.email,
      password: "Sa123456",
    });
    expect(response.status).toBe(200);
  });

  it("should be able to return a JWT Token when authenticated", async () => {
    const user = await factory.create("User", {
      password: "Sa123456",
    });

    const response = await request(app).post("/session").send({
      email: user.email,
      password: "Sa123456",
    });
    expect(response.body).toHaveProperty("token");
  });

  it("should be able to access private routes when authenticated", async () => {
    const user = await factory.create("User", {
      password: "Sa123456",
    });

    const responseAuth = await request(app).post("/session").send({
      email: user.email,
      password: "Sa123456",
    });

    const { token } = responseAuth.body;

    const responseAcess = await request(app)
      .get("/dashboard")
      .set("Authorization", `${token}`);

    expect(responseAcess.status).toBe(200);
  });

  it("should NOT be able to access private routes without a JWT Token", async () => {
    const response = await request(app).get("/settings");

    expect(response.status).toBe(401);
  });

  it("should NOT be able to access a private route with a invalid JWT Token", async () => {
    const response = await request(app)
      .get("/settings")
      .set("Authorization", `Bearer 123456789`);

    expect(response.status).toBe(401);
  });
});
