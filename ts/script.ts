interface StudentData {
   name: { title: string; first: string; last: string };
   email: string;
   registered: { date: string };
   picture: { large: string; medium: string; thumbnail: string };
}

/**
	*   Class representing a student
*/
class Student {
   name: { first: string; last: string };
   email: string;
   registered: string;
   picture: { thumbnail: string };

   constructor(data: StudentData) {
      this.name = data.name;
      this.email = data.email;
      this.registered = data.registered.date;
      this.picture = data.picture;
   }

   // Method to generate HTML for a student card
   generateStudentHTML(): string {
      return `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${this.picture.thumbnail}" alt="Profile Picture of ${this.name.first} ${this.name.last}" />
               <h3>${this.name.first} ${this.name.last}</h3>
               <span class="email">${this.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${this.registered}</span>
            </div>
         </li>
      `;
   }
}

/**
	*   Class managing the list of students
*/
class StudentList {
   data: Student[];
   studentsPerPage: number;
   filteredData: Student[];
   currentPage: number;
   studentListElement: HTMLElement;
   linkListElement: HTMLElement;
   studentsPerPageSelect!: HTMLSelectElement;

   constructor(data: StudentData[], studentsPerPage: number = 9) {
      this.data = data.map(studentData => new Student(studentData));
      this.studentsPerPage = studentsPerPage;
      this.filteredData = this.data;
      this.currentPage = 1;
      
      this.studentListElement = document.querySelector('.student-list') as HTMLElement;
      this.linkListElement = document.querySelector('.link-list') as HTMLElement;

      this.renderPaginationOptions();
   }

   // Render the dropdown for students per page
   renderPaginationOptions(): void {
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
      const pageHeader = document.querySelector('.header')!;
      pageHeader.insertAdjacentHTML('afterend', optionsHtml);

      // Set the event listener for the dropdown
      this.studentsPerPageSelect = document.getElementById('students-per-page') as HTMLSelectElement;
      this.studentsPerPageSelect.addEventListener('change', () => {
         this.studentsPerPage = parseInt(this.studentsPerPageSelect.value);
         this.showPage(1); // Reset to the first page after changing the value
         this.addPagination();
      });
   }

   // Render the list of students based on the current page
   showPage(page = 1): void {
      const start = (page * this.studentsPerPage) - this.studentsPerPage;
      const end = (page * this.studentsPerPage);

      this.studentListElement.innerHTML = this.filteredData
         .slice(start, end)
         .map(student => student.generateStudentHTML())
         .join('');
   }

   // Add pagination buttons based on the filtered list
   addPagination(): void {
      const totalPages = Math.ceil(this.filteredData.length / this.studentsPerPage);
   
      // Clear existing pagination buttons
      this.linkListElement.innerHTML = '';
   
      // Prev Button
      const prevButton = `<li><button class="prev-btn" type="button" disabled>&laquo; Prev</button></li>`;
      this.linkListElement.insertAdjacentHTML('beforeend', prevButton);
   
      // Page Number Buttons
      for (let i = 1; i <= totalPages; i++) {
         const button = `<li><button type="button">${i}</button></li>`;
         this.linkListElement.insertAdjacentHTML('beforeend', button);
      }
   
      // Next Button
      const nextButton = `<li><button class="next-btn" type="button"${totalPages <= 1 ? 'disabled' : ''}>Next &raquo;</button></li>`;
      this.linkListElement.insertAdjacentHTML('beforeend', nextButton);
   
      // Activate the current page button
      const newActiveButton = Array.from(this.linkListElement.querySelectorAll('button'))
         .find(button => button.textContent == this.currentPage.toString());
      if (newActiveButton) {
         newActiveButton.classList.add('active');
      }
   
      // Enable/Disable prev and next buttons based on the current page
      (this.linkListElement.querySelector('.prev-btn') as HTMLButtonElement)!.disabled = this.currentPage === 1;
      (this.linkListElement.querySelector('.next-btn') as HTMLButtonElement)!.disabled = this.currentPage === totalPages;
   }

   // Handle pagination button click event
   handlePagination(): void {
      const totalPages = Math.ceil(this.filteredData.length / this.studentsPerPage);
    
      // Add event listener for the pagination buttons
      this.linkListElement.addEventListener('click', (e) => {
        const clickedButton = (e.target as HTMLElement).closest('button') as HTMLButtonElement;
        
         if (clickedButton) {
            const activeButton = this.linkListElement.querySelector('.active');

            if (clickedButton.classList.contains('prev-btn')) {
                // Handle "Prev" button
                if (this.currentPage > 1) {
                    this.currentPage--;
                }
            } else if (clickedButton.classList.contains('next-btn')) {
                // Handle "Next" button
                if (this.currentPage < totalPages) {
                    this.currentPage++;
                }
            } else if (!clickedButton.classList.contains('prev-btn') && !clickedButton.classList.contains('next-btn')) {
                // Handle regular page number button clicks
                this.currentPage = parseInt(clickedButton.innerHTML);
            }

            // Update active button
            if (activeButton) {
                activeButton.classList.remove('active');
            }

            // Set the active button based on the current page
            const newActiveButton = Array.from(this.linkListElement.querySelectorAll('button'))
            .find(button => button.textContent == this.currentPage.toString());

            if (newActiveButton) {
                newActiveButton.classList.add('active');
            }

            // Show students for the current page
            this.showPage(this.currentPage);

            // Enable/Disable prev and next buttons based on the current page
            (this.linkListElement.querySelector('.prev-btn') as HTMLButtonElement)!.disabled = this.currentPage === 1;
            (this.linkListElement.querySelector('.next-btn') as HTMLButtonElement)!.disabled = this.currentPage === totalPages;
         }
      });
   }

   // Filter students based on search input
   filterStudents(keyword: string): void {
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
   studentList: StudentList;
   inputElement: HTMLElement;

   constructor(studentList: StudentList) {
      this.studentList = studentList;
      this.render();
      this.inputElement = document.getElementById('search') as HTMLInputElement;
      this.handleSearch();
   }

   // Render the search bar HTML
   render(): void {
      const html = `
         <label for="search" class="student-search">
            <span>Search by name</span>
            <input id="search" placeholder="Search by name...">
            <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
         </label>
      `;
      const pageHeader = document.querySelector('.header')!;

      pageHeader.insertAdjacentHTML('beforeend', html);
   }

   // Handle the search functionality
   handleSearch(): void {
      this.inputElement.addEventListener('keyup', () => {
         const userInput = (this.inputElement as HTMLInputElement).value;
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
