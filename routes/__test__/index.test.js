const TouristAttraction = require('../../models/TouristAttraction');
const app = require('../../app');
const request = require('supertest');


describe('Test API endpoints', () => {
    it('returns status code 201 if name is passed', async () => {
      const res = await request(app).post('/touristAttractions').send({ name: 'zoo', description:'amazing place to unwind' });
      
      expect(res.statusCode).toEqual(201);
    
    });

    it('returns status code 400 if name is missing', async () => {
      const res = await request(app).post('/touristAttractions').send({description:'amazing place to unwind'});
      
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual({"message": "TouristAttraction validation failed: name: Path `name` is required."})
    
    });
  });