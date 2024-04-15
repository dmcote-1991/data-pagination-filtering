/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
const studentList = document.querySelector(`.student-list`);
const linkList = document.querySelector(`.link-list`);
const studentsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const start = (page * studentsPerPage) - studentsPerPage;
   const end = (page * studentsPerPage) - 1
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

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
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

linkList.addEventListener(`click`, (e)=> {
   const clickedButton = e.target.closest(`button`);
   const activeButton = linkList.querySelector(`.active`);
   if (clickedButton) {
      activeButton.classList.remove(`active`);
      clickedButton.classList.add(`active`);
      showPage(data, clickedButton.innerHTML);
   }
});

// Call functions
addPagination(data);
showPage(data, 1);
