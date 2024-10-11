// Class Imports
import { StudentList } from './StudentList.js';
import { SearchBar } from './SearchBar.js';
import { Student } from './Student.js';

// Import student data
import { studentData } from './StudentData.js';

/*
 * Initialize the student list and search bar once the DOM content is fully loaded
*/
document.addEventListener('DOMContentLoaded', () => {
   // Create an array of Student instances from the student data
   const students = studentData.map(data => new Student(data));

   // Initialize the StudentList with the student instances
   const studentList = new StudentList(students);
   studentList.showPage(1); // Display the first page of students
   studentList.addPagination(); // Set up pagination controls
   studentList.handlePagination(); // Attach event handlers for pagination

   // Initialize the SearchBar with the student list for filtering functionality
   new SearchBar(studentList);
});
