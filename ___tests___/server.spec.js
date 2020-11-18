const request = require('supertest');
const server = require('../server');

describe('server.js', () => {
  describe('index route', () => {
    it('index route test', async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get('/');
      expect(response.status).toEqual(expectedStatusCode);
    })
    it('should return a JSON object ', async () => {
      const expectedBody = { api: "water my plants is up and running!" }
      const response = await request(server).get('/')
      expect(response.body).toEqual(expectedBody)
    })
    it('should return a JSON object from the index route', async () => {
      const response = await request(server).get('/');
      expect(response.type).toEqual('application/json');
    })
  })
})