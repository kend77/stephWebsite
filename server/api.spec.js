const request = require('supertest');
const { expect } = require('chai')


const app = require('../server')

describe('GET /api/:folder', () => {
  it('responds with directory information in the form of an array', () => {
    return request(app)
      .get('/api/schumacher')
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('array')
      })
  })
  it('returns data as strings of file names in the form of "1.jpg", "2.jpg"', () => {
    return request(app)
    .get('/api/schumacher')
    .expect(200)
    .then(res => {
      expect(res.body[0]).to.be.an('string')
      expect(res.body[0]).to.be.equal('1.jpg')
    })
  })
})
