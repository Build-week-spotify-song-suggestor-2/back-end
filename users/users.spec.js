const request = require("supertest");
const server = require("../api/server");
const db = require("./users-model");

describe("server.js", () => {
  describe("Grab all users", () => {
    it("Should return status 200", async () => {
      const res = await request(server).get("/"); // wait for passed request and then returns the resolved value
      expect(res.status).toBe(200);
    });
    it("Should return text/html", async () => {
      const res = await request(server).get("/"); // wait for passed request and then returns the resolved value
      expect(res.type).toBe("text/html");
    });
  });
  describe("Grab users by ID", () => {
    it("Should grab users by ID", async () => {
      const res = await request(server).get("/api/users/1"); // wait for passed request and then returns the resolved value
      expect(res.body.id).toBe(1);
    });
  });
});
