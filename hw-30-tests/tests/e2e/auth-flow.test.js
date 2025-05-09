const request = require('supertest');
const app = require('../../src/app.js');

describe('Auth flow (register -> login -> profile)', () => {
  let token;

  it('should register and login user', async () => {
    await request(app).post('/api/auth/register').send({
      email: 'user@test.com',
      password: '123456',
    });

    const loginRes = await request(app).post('/api/auth/login').send({
      email: 'user@test.com',
      password: '123456',
    });

    expect(loginRes.statusCode).toBe(200);
    expect(loginRes.body.token).toBeDefined();
    token = loginRes.body.token;
  });

  it('should access profile with token', async () => {
    const res = await request(app)
      .get('/api/auth/profile')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.user.email).toBe('user@test.com');
  });

  it('should fail to access profile without token', async () => {
    const res = await request(app).get('/api/auth/profile');
    expect(res.statusCode).toBe(401);
  });
});
