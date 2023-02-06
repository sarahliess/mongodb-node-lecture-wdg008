const Student = require("../models/Student");

const getAllStudents = async (req, res) => {
  try {
    const allStudents = await Student.find();
    res.status(200).json(allStudents);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getSingleStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    res.status(200).json(student);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const createStudent = async (req, res) => {
  //BEISPIEL:
  //    {
  //   "title": "Test 2",
  //   "student": "63dbbf66d07cb418648617be" // ObjectId von Cookie Doe
  // }

  const { name, first_name, email, articles } = req.body;
  try {
    const newStudent = await Student.create({
      name,
      first_name,
      email,
      articles,
    });
    res
      .status(201)
      .send(`New student ${newStudent.first_name} has been created`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, first_name, email } = req.body;
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, first_name, email },
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedStudent = await Student.findByIdAndDelete(id);
    res
      .status(200)
      .send(`Student ${deletedStudent.first_name} has been deleted`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getAllArticlesOfStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const studentArticles = await Student.findById(id).populate("articles");
    res.status(200).json(studentArticles);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getAllArticlesOfStudent,
};
