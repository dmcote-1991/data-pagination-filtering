import { StudentList } from './StudentList.js';

/*
 * Class for the Seach Bar
*/
export class SearchBar {
  studentList: StudentList;
  inputElement: HTMLInputElement;

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

  // Handle the search functionality with debouncing
  handleSearch(): void {
    const debounce = (func: Function, delay: number) => {
      let timeoutId: number;
      return (...args: any[]) => {
         clearTimeout(timeoutId);
         timeoutId = window.setTimeout(() => func(...args), delay);
      };
    };

    const onSearch = debounce(() => {
      const userInput = this.inputElement.value;
      this.studentList.filterStudents(userInput);
    }, 300);

    this.inputElement.addEventListener('keyup', onSearch);
  }
}
