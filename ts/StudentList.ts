import { Student } from './Student.js';

/*
 * Class managing the list of students
*/
export class StudentList {
  data: Student[]; // Array of Student instances
  studentsPerPage: number;
  filteredData: Student[]; // Array of filtered Student instances
  currentPage: number;
  studentListElement: HTMLElement;
  linkListElement: HTMLElement; // Element for pagination links
  studentsPerPageSelect!: HTMLSelectElement;

  constructor(data: Student[], studentsPerPage: number = 9) {
     this.data = data; // Assign student data
     this.studentsPerPage = studentsPerPage; // Assign number of students per page
     this.filteredData = this.data; // Initialize filtered data to all students
     this.currentPage = 1; // Start on the first page
     
     this.studentListElement = document.querySelector('.student-list') as HTMLElement;
     this.linkListElement = document.querySelector('.link-list') as HTMLElement;

     this.renderPaginationOptions();
  }

  /* Render the dropdown for students per page */
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
        this.studentsPerPage = parseInt(this.studentsPerPageSelect.value); // Update the students per page value
        this.showPage(this.currentPage); // Redisplay the current page
     });
  }

  /* Display students for the specified page */
  showPage(page: number): void {
    this.currentPage = page; // Update the current page
    this.studentListElement.innerHTML = ''; // Clear the current student list
    
    // Calculate the start and end indices for the students to display
    const startIndex = (page - 1) * this.studentsPerPage; 
    const endIndex = startIndex + this.studentsPerPage; 
    const studentsToShow = this.filteredData.slice(startIndex, endIndex); // Get the students for the current page

    // Generate HTML for each student and insert into the student list element
    studentsToShow.forEach(student => {
       this.studentListElement.insertAdjacentHTML('beforeend', student.generateStudentHTML()); // Insert student HTML
    });
 }

  /* Add pagination buttons based on the filtered list */
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

  /* Handle pagination button click event */
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

  /* Filter students based on search input */
  filterStudents(keyword: string): void {
     this.filteredData = this.data.filter(student => {
        const studentName = `${student.name.first} ${student.name.last}`.toLowerCase();

        return studentName.includes(keyword.toLowerCase());
     });

     this.showPage(1); // Show first page of filtered results
     this.addPagination(); // Update the pagination controls
  }
}
