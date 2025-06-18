# 🚀 Task Manager Backend

Welcome to the **Task Manager Backend** repository!  
This is the server-side code that powers the Task Manager Application.  
Built using **Node.js**, **Express**, and **MongoDB** for a fast and secure experience.

---

## 📚 Features

- User Registration and Login (JWT Authentication)
- Password Encryption (bcrypt)
- Create, Read, Update, Delete (CRUD) for Tasks
- Protected Routes for authenticated users
- Error Handling & Validations
- Easy to deploy on Render, Railway, etc.

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens)
- bcrypt.js
- dotenv
- CORS Middleware

---

## 🛠️ Getting Started

### 1. Clone the Repository
git clone https://github.com/Gormi-Mareedu/task-manager-backend.git

### 2. Navigate into the project
cd task-manager-backend

### 3. Install Dependencies
npm install

### 4. Create .env File
Create a .env file at the root and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

### 5. Start the Server
npm start

Server will run at: http://localhost:5000

### 🔥 API Endpoints
Method	Endpoint	          Description
POST	  /api/auth/register	Register a new user
POST	  /api/auth/login	    Authenticate user
GET	    /api/tasks	        Fetch all tasks (Protected)
POST	  /api/tasks	        Create a new task
PUT	    /api/tasks/:id	    Update an existing task
DELETE	/api/tasks/:id	    Delete a task

🚨 Task routes require a valid JWT Token.

### 📂 Folder Structure

task-manager-backend/

├── controllers/

│   ├── authController.js

│   └── taskController.js

├── models/

│   ├── User.js

│   └── Task.js

├── routes/

│   ├── authRoutes.js

│   └── taskRoutes.js

├── middleware/

│   └── authMiddleware.js

├── config/

│   └── db.js

├── .env

├── server.js

├── package.json

└── README.md

### 🌎 Deployment
- Hosted easily on Render or Railway
- Add environment variables before deploying
- Use Build Command: npm install && npm run build (if needed)

### 🤝 Contributing
Pull requests are welcome!
For major changes, please open an issue first to discuss what you would like to change.

### 📄 License
This project is licensed under the MIT License.

💫 Thank you for visiting!
