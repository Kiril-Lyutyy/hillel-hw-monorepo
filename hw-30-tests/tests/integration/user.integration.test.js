const request = require('supertest');
const app = require('../../src/app.js');

describe('POST /api/auth/register', () => {
  it('should register user and return 201', async () => {
    const res = await request(app).post('/api/auth/register').send({
      email: 'user@test.com',
      password: '123456',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('User registered');
  });

  it('should return 409 if user already exists', async () => {
    await request(app).post('/api/auth/register').send({
      email: 'user@test.com',
      password: '123456',
    });

    const res = await request(app).post('/api/auth/register').send({
      email: 'user@test.com',
      password: '123456',
    });

    expect(res.statusCode).toBe(409);
  });
});
