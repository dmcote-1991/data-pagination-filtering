interface StudentData {
  name: { title: string; first: string; last: string };
  email: string;
  registered: { date: string };
  picture: { large: string; medium: string; thumbnail: string };
}

/*
 * Class representing a student
*/
export class Student {
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
