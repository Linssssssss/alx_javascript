function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }

  var students = [];

  for (var i = 0; i < numberOfStudents; i++) {
    var seatNumber = studentSeat(i + 1); // Add 1 to start seat numbering from 1
    students.push(seatNumber());
  }

  return students;
}

// Create the closure classRoom with 10 students
var classRoom = createClassRoom(10);

// Test the classRoom variable by displaying the array
console.log(classRoom); // This will display an array with seat numbers from 1 to 10
