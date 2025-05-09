const User = require('../../src/models/user.model.js');
const { getUserById } = require('../../src/services/user.service.js');
jest.mock('../../src/models/user.model.js');

describe('UserService.getUserById', () => {
  it('should return user by id', async () => {
    const mockUser = { id: '123', email: 'test@test.com' };
    User.findById.mockResolvedValue(mockUser);

    const user = await getUserById('123');
    expect(user).toEqual(mockUser);
  });

  it('should throw error if user not found', async () => {
    User.findById.mockResolvedValue(null);

    await expect(getUserById('456')).rejects.toThrow('User not found');
  });

  it('should throw error on db error', async () => {
    User.findById.mockRejectedValue(new Error('DB Error'));

    await expect(getUserById('789')).rejects.toThrow('DB Error');
  });
});
