const Student = require('../models/student.model.js');

const seed = async () => {
  try {
    await Student.deleteMany();

    await Student.insertMany([
      { name: 'Ivan', age: 21, group: 'A-31', marks: [75, 90, 82] },
      { name: 'Anna', age: 22, group: 'A-31', marks: [88, 79, 91] },
      { name: 'Dmytro', age: 19, group: 'B-12', marks: [60, 70, 72] },
      { name: 'Artem', age: 23, group: 'C-11', marks: [95, 92, 88] },
      { name: 'Alina', age: 20, group: 'B-12', marks: [80, 87, 90] }
    ]);

    console.log('MongoDB seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seed;
