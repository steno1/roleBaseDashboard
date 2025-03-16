🎯 Role-Based Dashboard (React + TypeScript)
A modular Role-Based Dashboard application built with React + TypeScript, featuring:

Protected routes based on user roles (Admin, Editor, Viewer)
Clean folder structure
Simple responsive UI
State management with React Context API
Authentication simulation
Normal CSS (No Tailwind, no external CSS frameworks)

🚀 Features

🔐 Role-Based Access Control (RBAC)
Admin, Editor, and Viewer roles with different permissions and UI components.

🎨 Clean & Responsive UI
Normal CSS styling and mobile-friendly.

⚛️ React + TypeScript
Strongly typed, modern React project structure.

🛡️ Protected Routes
Unauthorized users are redirected to login or home based on their role.

📁 Project Structure


src/
├── components/
│   ├── Dashboard.tsx
│   └── Navbar.tsx
├── context/
│   └── AuthContext.tsx
├── pages/
│   ├── Home.tsx
│   ├── Login.tsx
│   └── NotFound.tsx
├── routes/
│   └── ProtectedRoute.tsx
├── App.tsx
├── main.tsx
└── index.css

🛠️ Getting Started
1️⃣ Clone the repository:

git clone https://github.com/steno1/roleBaseDashboard.git
cd role-based-dashboard
2️⃣ Install dependencies:

npm install
3️⃣ Start the development server:

npm run dev

📝 Tech Stack
React
TypeScript
React Router
Context API
Vite
Normal CSS 


🙌 Contributing
Feel free to fork, open issues, or submit pull requests if you'd like to improve or extend the project!

