interface Name {
  title: string;
  first: string;
  last: string;
}

interface Registered {
  date: string;
  age: number;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

// Interface for the student data structure
export interface IStudentData {
  name: Name;
  email: string;
  registered: Registered;
  picture: Picture;
}

/*
 * Class representing student data
*/
export class StudentData {
  name: Name;
  email: string;
  registered: Registered;
  picture: Picture;

  constructor(name: Name, email: string, registered: Registered, picture: Picture) {
    this.name = name;
    this.email = email;
    this.registered = registered;
    this.picture = picture;
  }

  getFullName(): string {
    return `${this.name.title} ${this.name.first} ${this.name.last}`;
  }

  getRegistrationDate(): string {
    return this.registered.date;
  }

  getThumbnailPicture(): string {
    return this.picture.thumbnail;
  }
}

/*
 * Array of student data
*/
export const studentData: StudentData[] = [
  new StudentData(
    { title: "Miss", first: "Ethel", last: "Dean" },
    "ethel.dean@example.com",
    { date: "12-15-2005", age: 15 },
    {
      large: "https://randomuser.me/api/portraits/women/25.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
    }
  ),
  new StudentData(
    { title: "Mrs", first: "Lorraine", last: "Lynch" },
    "lorraine.lynch@example.com",
    { date: "02-24-2006", age: 14 },
    {
      large: "https://randomuser.me/api/portraits/women/88.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Gregory", last: "Vargas" },
    "gregory.vargas@example.com",
    { date: "03-20-2013", age: 7 },
    {
      large: "https://randomuser.me/api/portraits/men/23.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/23.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/23.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Lawrence", last: "Martin" },
    "lawrence.martin@example.com",
    { date: "06-10-2007", age: 13 },
    {
      large: "https://randomuser.me/api/portraits/men/50.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/50.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
    }
  ),
  new StudentData(
    { title: "Ms", first: "Stacey", last: "Wells" },
    "stacey.wells@example.com",
    { date: "09-22-2004", age: 16 },
    {
      large: "https://randomuser.me/api/portraits/women/21.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Terrance", last: "Newman" },
    "terrance.newman@example.com",
    { date: "06-28-2007", age: 13 },
    {
      large: "https://randomuser.me/api/portraits/men/56.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/56.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/56.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Morris", last: "Burton" },
    "morris.burton@example.com",
    { date: "02-09-2016", age: 4 },
    {
      large: "https://randomuser.me/api/portraits/men/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    }
  ),
  new StudentData(
    { title: "Ms", first: "Terra", last: "Franklin" },
    "terra.franklin@example.com",
    { date: "12-24-2008", age: 12 },
    {
      large: "https://randomuser.me/api/portraits/women/22.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Ted", last: "Bradley" },
    "ted.bradley@example.com",
    { date: "11-29-2017", age: 3 },
    {
      large: "https://randomuser.me/api/portraits/men/99.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/99.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/99.jpg",
    }
  ),
  new StudentData(
    { title: "Mrs", first: "Celina", last: "Griffin" },
    "celina.griffin@example.com",
    { date: "07-02-2006", age: 14 },
    {
      large: "https://randomuser.me/api/portraits/women/79.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/79.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/79.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Duane", last: "Soto" },
    "duane.soto@example.com",
    { date: "09-15-2002", age: 18 },
    {
      large: "https://randomuser.me/api/portraits/men/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/53.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Ray", last: "Vargas" },
    "ray.vargas@example.com",
    { date: "12-03-2007", age: 13 },
    {
      large: "https://randomuser.me/api/portraits/men/59.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/59.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/59.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Douglas", last: "Torres" },
    "douglas.torres@example.com",
    { date: "11-06-2011", age: 9 },
    {
      large: "https://randomuser.me/api/portraits/men/68.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/68.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg",
    }
  ),
  new StudentData(
    { title: "Ms", first: "Mia", last: "Snyder" },
    "mia.snyder@example.com",
    { date: "05-27-2014", age: 6 },
    {
      large: "https://randomuser.me/api/portraits/women/54.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/54.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/54.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Mario", last: "Freeman" },
    "mario.freeman@example.com",
    { date: "02-14-2012", age: 8 },
    {
      large: "https://randomuser.me/api/portraits/men/30.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/30.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/30.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Herman", last: "Griffin" },
    "herman.griffin@example.com",
    { date: "11-04-2009", age: 11 },
    {
      large: "https://randomuser.me/api/portraits/men/16.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/16.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/16.jpg",
    }
  ),
  new StudentData(
    { title: "Ms", first: "Marian", last: "Williamson" },
    "marian.williamson@example.com",
    { date: "02-14-2010", age: 10 },
    {
      large: "https://randomuser.me/api/portraits/women/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Victor", last: "Rodriquez" },
    "victor.rodriquez@example.com",
    { date: "10-03-2006", age: 14 },
    {
      large: "https://randomuser.me/api/portraits/men/49.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/49.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
    }
  ),
  new StudentData(
    { title: "Miss", first: "Beverley", last: "Gregory" },
    "beverley.gregory@example.com",
    { date: "02-12-2006", age: 14 },
    {
      large: "https://randomuser.me/api/portraits/women/72.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/72.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/72.jpg",
    }
  ),
  new StudentData(
    { title: "Mrs", first: "Nellie", last: "Schmidt" },
    "nellie.schmidt@example.com",
    { date: "10-28-2011", age: 9 },
    {
      large: "https://randomuser.me/api/portraits/women/59.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Carlos", last: "Gibson" },
    "carlos.gibson@example.com",
    { date: "08-30-2014", age: 6 },
    {
      large: "https://randomuser.me/api/portraits/men/67.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/67.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/67.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Kevin", last: "Hamilton" },
    "kevin.hamilton@example.com",
    { date: "12-26-2004", age: 16 },
    {
      large: "https://randomuser.me/api/portraits/men/11.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Flenn", last: "Torres" },
    "flenn.torres@example.com",
    { date: "03-09-2011", age: 9 },
    {
      large: "https://randomuser.me/api/portraits/men/95.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/95.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/95.jpg",
    }
  ),
  new StudentData(
    { title: "Ms", first: "Sue", last: "Kim" },
    "sue.kim@example.com",
    { date: "06-20-2011", age: 9 },
    {
      large: "https://randomuser.me/api/portraits/women/62.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/62.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/62.jpg",
    }
  ),
  new StudentData(
    { title: "Mrs", first: "Bella", last: "Fields" },
    "bella.fields@example.com",
    { date: "05-08-2009", age: 11 },
    {
      large: "https://randomuser.me/api/portraits/women/8.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg",
    }
  ),
  new StudentData(
    { title: "Miss", first: "Valerie", last: "West" },
    "valerie.west@example.com",
    { date: "05-18-2006", age: 14 },
    {
      large: "https://randomuser.me/api/portraits/women/36.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/36.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Douglas", last: "Pearson" },
    "douglas.pearson@example.com",
    { date: "07-18-2005", age: 15 },
    {
      large: "https://randomuser.me/api/portraits/men/5.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/5.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
    }
  ),
  new StudentData(
    { title: "Ms", first: "Dolores", last: "Daniels" },
    "dolores.daniels@example.com",
    { date: "02-22-2019", age: 1 },
    {
      large: "https://randomuser.me/api/portraits/women/9.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/9.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
    }
  ),
  new StudentData(
    { title: "Mrs", first: "Billie", last: "Knight" },
    "billie.knight@example.com",
    { date: "02-16-2010", age: 10 },
    {
      large: "https://randomuser.me/api/portraits/women/37.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/37.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/37.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Luke", last: "Neal" },
    "luke.neal@example.com",
    { date: "06-29-2015", age: 5 },
    {
      large: "https://randomuser.me/api/portraits/men/17.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Billy", last: "Gray" },
    "billy.gray@example.com",
    { date: "07-09-2007", age: 13 },
    {
      large: "https://randomuser.me/api/portraits/men/43.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/43.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/43.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Roy", last: "Evans" },
    "roy.evans@example.com",
    { date: "10-24-2010", age: 10 },
    {
      large: "https://randomuser.me/api/portraits/men/65.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Shane", last: "Baker" },
    "shane.baker@example.com",
    { date: "12-28-2011", age: 9 },
    {
      large: "https://randomuser.me/api/portraits/men/51.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/51.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/51.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Tom", last: "Sims" },
    "tom.sims@example.com",
    { date: "05-07-2015", age: 5 },
    {
      large: "https://randomuser.me/api/portraits/men/47.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Travis", last: "Brooks" },
    "travis.brooks@example.com",
    { date: "11-23-2008", age: 12 },
    {
      large: "https://randomuser.me/api/portraits/men/16.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/16.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/16.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Karl", last: "Shaw" },
    "karl.shaw@example.com",
    { date: "07-16-2007", age: 13 },
    {
      large: "https://randomuser.me/api/portraits/men/8.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Anthony", last: "Miller" },
    "anthony.miller@example.com",
    { date: "03-31-2004", age: 16 },
    {
      large: "https://randomuser.me/api/portraits/men/4.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/4.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/4.jpg",
    }
  ),
  new StudentData(
    { title: "Miss", first: "Elizabeth", last: "Jimenez" },
    "elizabeth.jimenez@example.com",
    { date: "06-08-2003", age: 17 },
    {
      large: "https://randomuser.me/api/portraits/women/4.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Marc", last: "Payne" },
    "marc.payne@example.com",
    { date: "05-22-2004", age: 16 },
    {
      large: "https://randomuser.me/api/portraits/men/89.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/89.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/89.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Jon", last: "Berry" },
    "jon.berry@example.com",
    { date: "10-10-2016", age: 4 },
    {
      large: "https://randomuser.me/api/portraits/men/22.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/22.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
    }
  ),
  new StudentData(
    { title: "Miss", first: "Natalie", last: "Arnold" },
    "natalie.arnold@example.com",
    { date: "06-25-2019", age: 1 },
    {
      large: "https://randomuser.me/api/portraits/women/16.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/16.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/16.jpg",
    }
  ),
  new StudentData(
    { title: "Mr", first: "Allen", last: "Thompson" },
    "allen.thompson@example.com",
    { date: "08-14-2010", age: 10 },
    {
      large: "https://randomuser.me/api/portraits/men/48.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/48.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/48.jpg",
    }
  )
];
