
// modules/students.js
// Local module to manage student data

let students =  [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
    ];

// Function to get a list of students
exports.getStudents = () => {
    return students;
}

exports.addStudent = (student) => {
    // Logic to add a student (this is just a placeholder)
    students.push(student);
    console.log(`Student ${student.name} added.`);
}

//module.exports = { getStudents, addStudent };