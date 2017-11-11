const request = require("supertest");
const server = require("../../src/server/server");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(server).get("/api/");
    expect(response.statusCode).toBe(200);
  });
});
