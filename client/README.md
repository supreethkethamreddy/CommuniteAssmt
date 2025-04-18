# ABC Company Website with CMS

This project contains a React-based website for ABC Company with a CMS (Content Management System) for managing website content.

## Features

- Main website with dynamic content
- CMS admin panel to edit the main heading
- Backend API for content management
- MongoDB database for content storage

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

## Configuration

Make sure MongoDB is running on your local machine or update the `.env` file with your MongoDB connection string.

## Running the Application

1. Start the backend server:
   ```
   npm run server
   ```

2. In a separate terminal, start the frontend development server:
   ```
   npm run dev
   ```

3. Access the website at: http://localhost:5173/
4. Access the CMS admin panel at: http://localhost:5173/cms

## How It Works

- The CMS page allows you to edit the main heading of the website
- Changes are saved to the MongoDB database
- The frontend retrieves the updated content from the API
- All changes are immediately reflected on the website

## Project Structure

- `/server` - Backend Express server and MongoDB models
- `/src` - Frontend React application
- `/src/CmsPage.jsx` - CMS admin panel component
