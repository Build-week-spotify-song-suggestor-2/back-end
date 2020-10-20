const request = require("supertest");
const server = require("./server");
const db = require("../data/db-config");
const { truncate } = require("../data/db-config");

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
  it("Should return Welcome To The Spotify Song Suggester API!", async () => {
    const res = await request(server).get("/");
    expect(res.text).toEqual("Welcome To The Spotify Song Suggester API!");
  });
  it("Should register new users", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "testUsername", password: "testPassword" })
      .set("Accept", "application/json");
    expect(res.status).toBe(201);
  });
  it("Should login existing users", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "testUsername", password: "testPassword" });
    expect(res.status).toBe(200);
  });
  it("Should update users", async () => {
    const res = await request(server)
      .put("/api/auth/update")
      .send({ username: "Username", password: "password" });
    expect(res.status).toBe(201);
  });
});
