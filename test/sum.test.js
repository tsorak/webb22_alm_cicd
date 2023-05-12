const request = require("supertest");

const app = require("../src/server.js");

describe("GET /sum", () => {
  test("400 by default", async () => {
    const response = await request(app).get("/sum");

    expect(response.statusCode).toBe(400);
    expect(response.type).toBe("application/json");
    expect(response.body).toStrictEqual({
      error: "Parameters 'a' and 'b' must be valid numbers."
    });
  });
  test("400 with invalid a", async () => {
    const response = await request(app).get("/sum?a=foo&b=2");

    expect(response.statusCode).toBe(400);
    expect(response.type).toBe("application/json");
    expect(response.body).toStrictEqual({
      error: "Parameters 'a' and 'b' must be valid numbers."
    });
  });
  test("400 with invalid b", async () => {
    const response = await request(app).get("/sum?a=1&b=bar");

    expect(response.statusCode).toBe(400);
    expect(response.type).toBe("application/json");
    expect(response.body).toStrictEqual({
      error: "Parameters 'a' and 'b' must be valid numbers."
    });
  });

  test("200 with valid a and b", async () => {
    const response = await request(app).get("/sum?a=1&b=2");

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body).toStrictEqual({ sum: 3 });
  });
});
