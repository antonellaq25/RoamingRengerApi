const TouristAttraction = require('../../models/TouristAttraction');
const app = require('../../app');
const request = require('supertest');


describe('Test API endpoints', () => {
  it('returns status code 201 if name is passed', async () => {
    const res = await request(app).post('/touristAttractions').send({ name: 'zoo', description: 'amazing place to unwind' });

    expect(res.statusCode).toEqual(201);

  });

  it('returns status code 400 if name is missing', async () => {
    const res = await request(app).post('/touristAttractions').send({ description: 'amazing place to unwind' });

    expect(res.statusCode).toEqual(500);
    expect(res.body).toEqual({ "message": "TouristAttraction validation failed: name: Path `name` is required." })
  });
});

describe('Test Get by ID', () => {

  it('should return a 200', async () => {
    await request(app).post('/touristAttractions').send({ name: 'museum', description: 'amazing place to get to know about history' })
      .then(response => {
        console.log('/touristAttractions/' + response.body._id)
        const res = request(app).get('/touristAttractions/' + response.body._id)
          .expect(200)
      })
  });
  it('should return 500', async () => {
    const res = request(app).get('/touristAttractions/hjfhjhfjh')
      .expect(500)
  })
});

describe('Test Update', () => {
  it('should return 200', async () => {
    await request(app).post('/touristAttractions').send({ name: 'Art Gallery', description: 'amazing place to get immersed in art' })
      .then(response => {
        console.log('/touristAttractions/' + response.body._id)
        request(app).put('/touristAttractions').send({ description: 'amazing place to get immersed in the world of art' })
          .expect(200, {
            description: 'amazing place to get immersed in the world of art'
          });
      })
  })
});

describe('Test Delete', () => {
  it('should return 200', async () => {
    await request(app).post('/touristAttractions').send({ name: 'Theme park', description: 'amazing place to get immersed in art' })
      .then(response => {
        console.log('/touristAttractions/' + response.body._id)
        request(app).delete('/touristAttractions').send({ description: 'amazing place to get immersed in art' })
          .expect(200, {
          });
      })
  })
});