# Book-Discovery-App
A Book Discovery Web App where users can: Search books by title/author View detailed book information

## What did you build?
A full-stack Book Discovery application that allows users to search and view book details using the Open Library public API.

## Why this approach?
The frontend and backend are separated to mirror real production systems. The backend owns all external API calls and error handling.

## Data Flow
User → React Frontend → Express Backend → Open Library API → Backend → Frontend

## How to run locally?

### Backend
cd backend
npm install
npm run dev

Runs on http://localhost:5000

### Frontend
cd frontend
npm install
npm run dev

Runs on http://localhost:5173
