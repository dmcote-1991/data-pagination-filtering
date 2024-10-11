# Data-Pagination-Filtering

## Overview

The Student List Application is a web-based project that displays a list of students with their details. It features dynamic pagination, allowing users to select the number of students displayed per page and search for specific students by name. This application is built using HTML, CSS, and TypeScript.

## Features

- **Dynamic Pagination**: Users can select how many students to display per page (9, 15, or 21).
- **Search Functionality**: Users can search for students by name, dynamically filtering the displayed list.
- **Responsive Design**: The application is designed to work well on both desktop and mobile devices.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari).
- Basic knowledge of HTML, CSS, and TypeScript (optional).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dmcote-1991/data-pagination-filtering.git

2. Navigate to the project directory:
   ```bash
   cd data-pagination-filtering

3. Compile the TypeScript files:
   ``` bash
   tsc

4. Open `index.html` in your web browser.

### Usage

1. **View Student List**: The application will display a list of students with their names, emails, and join dates.
2. **Search for a Student**: Use the search bar to filter students by name.
3. **Change Students per Page**: Select the desired number of students to display from the dropdown menu.
4. **Navigate Pagination**: Use the pagination buttons to navigate through multiple pages of students.

## Project Structure

```bash
/student-list
├── index.html 
├── css
│   ├── reset.css 
│   └── styles.css 
├── img
│   └── icn-search.svg
├── dist/  # Compiled JavaScript files 
│  ├── app.js 
│  ├── SearchBar.js 
│  ├── Student.js 
│  ├── StudentData.js 
│  └── StudentList.js 
├── ts
│   ├── app.ts
│   ├── SearchBar.ts
│   ├── Student.ts
│   ├── StudentData.ts
│   └── StudentList.ts 
├── package-lock.json
├── package.json
├── README.md 
├── .gitignore
└── tsconfig.json
```

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request. Any improvements, bug fixes, or additional features are welcome!

## Acknowledgments

- [Student Data Source](https://randomuser.me/) for providing the sample student data.
