const request = require("supertest");
const server = require("./server");
const db = require("../data/db-config");
const { truncate } = require("../data/db-config");
const testUser = { username: "testUsername", password: "testPassword" };

describe("server.js", () => {
  describe("Grab initial server", () => {
    it("Should return status 200", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
    it("Should return text/html", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("text/html");
    });
  });
});
