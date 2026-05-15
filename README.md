# Task management dashboard

A simple and responsive Task management dashboard built using React and Tailwind CSS.

This application helps users create, manage, update, and track daily tasks easily.

## Features

- Create new tasks
- Edit existing tasks
- Delete tasks with confirmation
- Mark tasks as Complete / Pending
- Search tasks by title or description
- Filter tasks by status and priority
- List View and Card View toggle
- Task count dashboard (Total, Pending, Completed)
- Data saved in localStorage
- Fully responsive design

## Tech Stack

- React.js
- Tailwind CSS
- Formik
- Yup
- LocalStorage

## Setup instructions

### 1. Clone the repository

git clone https://github.com/govind3/task_application.git

### 2. Go to project folder

cd task_application

### 3. Install dependencies

npm install

### 4. Start development server

npm run dev

### Live Demo

https://licious-task.netlify.app/

## Screenshots

### Dashboard View

![Dashboard View](./public/screenshots/Dashboard.png)

### Table View

![Table View](./public/screenshots/Dashboard.png)

### Card View

![Card View](./public/screenshots/Card%20view.png)

### Mobile Responsive View

![Mobile View](./public/screenshots/Mobile%20Screen.png)

## Design decisions

- Used Tailwind CSS for fast and clean UI development
- Used Formik + Yup for form handling and validation
- Used localStorage for data persistence after refresh
- Added List and Card views for better user experience
- Kept component structure clean and reusable
