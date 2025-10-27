Zerodha Clone

A comprehensive full-stack trading platform inspired by Zerodha’s Kite, designed to replicate essential stock trading functionalities such as user authentication, live market data visualization, order placement, and portfolio management.
---

## 🚀 Features
- User Registration and Login (JWT Authentication)
- Real-time / Simulated Market Data
- Stock Search and Detailed View
- Buy & Sell Order Placement
- User Portfolio and Transaction History
- Responsive UI (React)
- Secure REST APIs (Spring Boot + JWT)
---
💻 Tech Stack: React, Node.js, Express.js, MySQL, JWT, CSS, BootStrap

🎯 Purpose: Academic and portfolio project (non-commercial use)
---
Folder Structure

ZerodhaClone/
│
├── backend/                # 🧩 Backend - Node.js (Express) server
│   ├── src/
│   │   ├── routes/         # API route handlers
│   │   ├── controllers/    # Business logic
│   │   ├── models/         # Database models (MySQL / Sequelize)
│   │   ├── middleware/     # Authentication & security middleware
│   │   └── server.js       # Entry point
│   ├── package.json
│   ├── .env
│   └── README.md
│
├── frontend/               # 💻 Frontend - React client (user-facing app)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # User pages (Home, Stocks, Portfolio, etc.)
│   │   ├── assets/         # Images, icons, logos
│   │   └── App.jsx         # Root component
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
├── dashboard/              # 🧮 Admin Dashboard - React panel
│   ├── src/
│   │   ├── components/     # Dashboard UI components
│   │   ├── pages/          # Admin pages (User list, Orders, etc.)
│   │   ├── assets/         # Dashboard-specific assets
│   │   └── App.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
└── README.md               # 📘 Main project documentation
