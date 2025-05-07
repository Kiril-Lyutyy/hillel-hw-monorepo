const Student = require('../models/student.model.js');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

exports.updateStudentAge = async (req, res) => {
  const { id } = req.params;
  const { age } = req.body;
  const student = await Student.findByIdAndUpdate(id, { age }, { new: true });
  res.json(student);
};

exports.deleteByGroup = async (req, res) => {
  const { group } = req.params;
  const result = await Student.deleteOne({ group });
  res.json(result);
};

exports.studentsOlderThan = async (req, res) => {
  const students = await Student.find({ age: { $gt: 20 } });
  res.json(students);
};

exports.studentsWithHighMarks = async (req, res) => {
  const students = await Student.find({ marks: { $elemMatch: { $gt: 85 } } });
  res.json(students);
};

exports.studentsNameStartsWithA = async (req, res) => {
  const students = await Student.find({ name: { $regex: '^A', $options: 'i' } });
  res.json(students);
};

exports.sortByAgeDesc = async (req, res) => {
  const students = await Student.find().sort({ age: -1 });
  res.json(students);
};

exports.averageMarks = async (req, res) => {
  const result = await Student.aggregate([
    {
      $project: {
        name: 1,
        avgMark: { $avg: '$marks' }
      }
    }
  ]);
  res.json(result);
};

exports.groupCount = async (req, res) => {
  const result = await Student.aggregate([
    {
      $group: {
        _id: '$group',
        count: { $sum: 1 }
      }
    }
  ]);
  res.json(result);
};

exports.totalAvgMark = async (req, res) => {
  const result = await Student.aggregate([
    {
      $unwind: '$marks'
    },
    {
      $group: {
        _id: null,
        overallAvg: { $avg: '$marks' }
      }
    }
  ]);
  res.json(result[0]);
};
