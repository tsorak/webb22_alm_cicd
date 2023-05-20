const request = require("supertest");

const app = require("../../src/server.js");

describe("GET /", () => {
  test("/ returns 200", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body).toStrictEqual({ message: "Hello, world!" });
  });
});
