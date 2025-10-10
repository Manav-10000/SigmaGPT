SigmaGPT: Full-Stack AI Chat Application

Project Overview
SigmaGPT is a modern, full-stack application engineered as a Full-Stack LLM Application.
The project demonstrates a monolithic architecture connecting a responsive React client to a robust Node.js/Express API, powered by persistent MongoDB storage and integrated with the OpenAI LLM service.
This application is built to showcase end-to-end expertise in AI service integration, data modeling, and developing production-ready web services.

Key Features
•	Advanced AI Integration: Communicates with the OpenAI API to utilize the powerful `gpt-4o-mini` model for real-time, contextual response generation.
•	Persistent Chat History: Seamlessly saves and retrieves individual chat threads (including message history) to MongoDB, allowing users to resume conversations across sessions.
•	RESTful API Design: Implements dedicated API endpoints for thread creation, retrieval, deletion, and real-time chat updates.
•	Dynamic State Management: Features a dynamic sidebar that updates automatically with new and modified threads, managed on the frontend using React's Context API.
•	Code Formatting: Automatically applies syntax highlighting to code blocks received from the AI, improving readability.

Technology Stack

Frontend (Client)
•	React.js (Vite): Core library used for building the user interface, managing state, and rendering dynamic chat and sidebar components.
•	CSS: Used for responsive UI component design and application styling.
•	React Context: Employed for efficient, application-wide state management (threads, current prompt, and replies).

Backend (API)
•	Node.js & Express.js: Provides a robust and scalable server environment, handling API requests and serving as the orchestration layer.
•	OpenAI API (`gpt-4o-mini`): Integrated for generating all conversational content and AI responses.

Data & Persistence
•	MongoDB (Atlas): The cloud-hosted NoSQL database used for persistent storage.
•	Mongoose: Object Data Modeling (ODM) library providing schema-based validation and interaction with MongoDB.

Supporting Libraries
•	`react-markdown` & `rehype-highlight`: Responsible for safely parsing and rendering Markdown and applying syntax highlighting to code blocks on the client.
•	`react-spinners`: Provides visually appealing loading indicators during API calls.

Getting Started

1. Prerequisites
•	Node.js (LTS version)
•	npm or Yarn
•	MongoDB Atlas Account (for database URI)
•	OpenAI API Key

2. Environment Variables

Create a file named .env inside your backend/ directory to securely store your sensitive keys.

# MongoDB Connection String (Atlas recommended)
MONGODB_URI="mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>"
# OpenAI API Key (Required for chat functionality)
OPENAI_API_KEY="sk-************************************"


3. Running the Application
This repository follows a monolithic structure. Start the backend first, then the frontend.

A. Backend Setup (API Server)

# 1. Navigate to the backend directory
cd backend

# 2. Install dependencies (Express, Mongoose, OpenAI, etc.)
npm install

# 3. Start the API server (runs on http://localhost:8080)
nodemon server.js


B. Frontend Setup (React Client)

# 1. Navigate to the project root directory
cd .. 

# 2. Install dependencies
npm install

# 3. Start the React development server (runs on http://localhost:5173 by default)
npm run dev


Future Enhancements

The current version focuses on core functionality and persistence. Planned features include:

•	User Authentication (JWT): Implement secure login/registration using JWT and manage user-specific threads for multi-user functionality.

•	Streaming Responses (UX): Migrate the API calls to support real-time, token-by-token display of the AI response using server-sent events or websockets, greatly enhancing the user experience.

•	Multimodality Support (AI/Vision): Expand the application to handle and process image inputs alongside text, leveraging the LLM's vision features.

•	Token/Cost Management (Operations): Implement backend logic to track and display the token usage and estimated cost for each thread, demonstrating operational awareness.

•	API Testing Suite (Quality): Integrate unit and integration testing frameworks (e.g., Jest or Supertest) for all backend API endpoints to ensure reliability and maintainability.
