const request = require("supertest");
const server = require("../server");

describe("auth.routes.js", () => {
  describe("Register Route", () => {
    it("returns 200 on successful register", async () => {
      const expectedStatus = 200;
      const response = await request(server).post("/api/auth/register").send({
        firstName: "Alex",
        lastName: "Alex",
        email: "alex@api.com",
        password: "password1",
      })
      expect(response.status).toEqual(expectedStatus)
    })
  })

  
  describe("Login Route", () => {
    it("returns 404 on unknown User", async () => {
      const expectedStatus = 404;
      const response = await request(server)
        .post("/api/auth/login")
        .send({ email: "NotHere", password: "Test" })
      expect(response.status).toBe(expectedStatus);
    })

    it("returns 200 on Successful Login", async () => {
      const expectedStatus = 200;
      const response = await request(server)
        .post("/api/auth/login")
        .send({ email: "alex@api.com", password: "password1" })
      expect(response.status).toBe(expectedStatus)
    })
  })
})
