
const pageHeader = document.querySelector(`.header`);
const studentList = document.querySelector(`.student-list`);
const linkList = document.querySelector(`.link-list`);
const studentsPerPage = 9;


// Renders a search bar to the page.
function renderSearchbar() {
   const html = `
      <label for="search" class="student-search">
         <span>Search by name</span>
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>
   `;
   pageHeader.insertAdjacentHTML(`beforeend`, html);
}
renderSearchbar();

const searchInput = document.getElementById(`search`);

/**
	*   Provides functionality to the search bar.
	*   When a key is typed into the search bar, the page will load the student names that include the user's input and adjust the pagination buttons.
*/
searchInput.addEventListener(`keyup`, ()=> {
   const newData = [];
   const userInput = searchInput.value.toLowerCase();
   for (let i=0; i<data.length; i++) {
      const studentName = `${data[i].name.first} ${data[i].name.last}`.toLowerCase();
      if (studentName.includes(userInput)) {
         newData.push(data[i]);
      }
   }
   if(newData.length > 0) {
      showPage(newData, 1);
      addPagination(newData);
   } else {
      const html = `<h3>No results found</h3>`;
      studentList.innerHTML = html;
      linkList.innerHTML = ``;
   }
});

/**
	*   Renders student cards to the corresponding portion of an array of objects to the current page.
	*   @param {variable} list - An array of objects.
	*   @param {number} page - The page number.
*/
function showPage(list, page) {
   const start = (page * studentsPerPage) - studentsPerPage;
   const end = (page * studentsPerPage) - 1;
   studentList.innerHTML = ``;
   for (let i=0; i<list.length; i++){
      if (i >= start && i <= end) {
         const html = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture of ${list[i].name.first} ${list[i].name.last}" />
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>
         `;
         studentList.insertAdjacentHTML(`beforeend`, html);
      }
   }
}

/**
	*   Determines the number of pagination buttons and renders them to the page.
   *   Gives the "active" class to the first pagination button.
	*   @param {variable} list - An array of objects.
*/
function addPagination(list) {
   const numberOfButtons = Math.ceil(list.length / studentsPerPage);
   linkList.innerHTML = ``;
   for (let i=1; i<numberOfButtons+1; i++) {
      const html = `
         <li>
            <button type="button">${i}</button>
         </li>
      `;
      linkList.insertAdjacentHTML(`beforeend`, html);
   }
   linkList.querySelector(`button`).classList.add(`active`);
}

/**
	*   Provides functionality to the pagination buttons.
	*   When a pagination button is clicked, it will take on the "active" class and display the corresponding page.
*/
linkList.addEventListener(`click`, (e)=> {
   const clickedButton = e.target.closest(`button`);
   const activeButton = linkList.querySelector(`.active`);
   if (clickedButton) {
      activeButton.classList.remove(`active`);
      clickedButton.classList.add(`active`);
      showPage(data, clickedButton.innerHTML);
   }
});

addPagination(data);
showPage(data, 1);