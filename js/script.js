/**
	*   Class representing a student
*/
class Student {
   constructor(data) {
      this.name = data.name;
      this.email = data.email;
      this.registered = data.registered;
      this.picture = data.picture;
   }

   // Method to generate HTML for a student card
   generateStudentHTML() {
      return `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${this.picture.thumbnail}" alt="Profile Picture of ${this.name.first} ${this.name.last}" />
               <h3>${this.name.first} ${this.name.last}</h3>
               <span class="email">${this.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${this.registered.date}</span>
            </div>
         </li>
      `;
   }
}

/**
	*   Class managing the list of students
*/
class StudentList {
   constructor(data, studentsPerPage = 9) {
      this.data = data.map(studentData => new Student(studentData));
      this.studentsPerPage = studentsPerPage;
      this.filteredData = this.data;
      
      this.studentListElement = document.querySelector('.student-list');
      this.linkListElement = document.querySelector('.link-list');

      this.renderPaginationOptions();
   }

   // Render the dropdown for students per page
   renderPaginationOptions() {
      const optionsHtml = `
         <div class="pagination-options">
            <label for="students-per-page">Students per page:</label>
            <select id="students-per-page">
               <option value="9">9</option>
               <option value="15">15</option>
               <option value="21">21</option>
            </select>
         </div>
      `;

      // Insert the dropdown HTML into the DOM after the header
      const pageHeader = document.querySelector('.header');
      pageHeader.insertAdjacentHTML('afterend', optionsHtml);

      // Set the event listener for the dropdown
      this.studentsPerPageSelect = document.getElementById('students-per-page');
      this.studentsPerPageSelect.addEventListener('change', () => {
         this.studentsPerPage = parseInt(this.studentsPerPageSelect.value);
         this.showPage(1); // Reset to the first page after changing the value
         this.addPagination();
      });
   }

   // Render the list of students based on the current page
   showPage(page = 1) {
      const start = (page * this.studentsPerPage) - this.studentsPerPage;
      const end = (page * this.studentsPerPage);

      this.studentListElement.innerHTML = this.filteredData
         .slice(start, end)
         .map(student => student.generateStudentHTML())
         .join('');
   }

   // Add pagination buttons based on the filtered list
   addPagination() {
      const totalPages = Math.ceil(this.filteredData.length / this.studentsPerPage);

      this.linkListElement.innerHTML = '';

      for (let i = 1; i <= totalPages; i++) {
         const button = `<li><button type="button">${i}</button></li>`;

         this.linkListElement.insertAdjacentHTML('beforeend', button);
      }

      this.linkListElement.querySelector('button').classList.add('active');
   }

   // Handle pagination button click event
   handlePagination() {
      this.linkListElement.addEventListener('click', (e) => {
         const clickedButton = e.target.closest('button');
         const activeButton = this.linkListElement.querySelector('.active');

         if (clickedButton) {
            activeButton.classList.remove('active');
            clickedButton.classList.add('active');
            
            this.showPage(parseInt(clickedButton.innerHTML));
         }
      });
   }

   // Filter students based on search input
   filterStudents(keyword) {
      this.filteredData = this.data.filter(student => {
         const studentName = `${student.name.first} ${student.name.last}`.toLowerCase();

         return studentName.includes(keyword.toLowerCase());
      });

      this.showPage(1);
      this.addPagination();
   }
}

/**
	*   Class for the Seach Bar
*/
class SearchBar {
   constructor(studentList) {
      this.studentList = studentList;
      this.render();
      this.inputElement = document.getElementById('search');
      this.handleSearch();
   }

   // Render the search bar HTML
   render() {
      const html = `
         <label for="search" class="student-search">
            <span>Search by name</span>
            <input id="search" placeholder="Search by name...">
            <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
         </label>
      `;
      const pageHeader = document.querySelector('.header');

      pageHeader.insertAdjacentHTML('beforeend', html);
   }

   // Handle the search functionality
   handleSearch() {
      this.inputElement.addEventListener('keyup', () => {
         const userInput = this.inputElement.value;
         this.studentList.filterStudents(userInput);
      });
   }
}

// Initialize the student list and search bar
document.addEventListener('DOMContentLoaded', () => {
   const studentList = new StudentList(data);
   studentList.showPage(1);
   studentList.addPagination();
   studentList.handlePagination();

   new SearchBar(studentList);
});
