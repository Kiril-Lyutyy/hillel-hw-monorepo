const request = require('supertest');
const app = require('../../src/app');
const User = require('../../src/models/user.model.js');
const Order = require('../../src/models/order.model.js');

describe('GET /users/:id/orders/count', () => {
  it('should return correct count', async () => {
    const user = await User.create({ email: 'order@test.com', password: '123456' });
    await Order.create({ userId: user._id });
    await Order.create({ userId: user._id });

    const res = await request(app).get(`/api/users/${user._id}/orders/count`);
    expect(res.body.count).toBe(2);
  });

  it('should return 0 if no orders', async () => {
    const user = await User.create({ email: 'empty@test.com', password: '123456' });
    const res = await request(app).get(`/api/users/${user._id}/orders/count`);
    expect(res.body.count).toBe(0);
  });

  it('should return 404 if user not found', async () => {
    const res = await request(app).get('/api/users/609c12345678901234567890/orders/count');
    expect(res.status).toBe(404);
  });
});
