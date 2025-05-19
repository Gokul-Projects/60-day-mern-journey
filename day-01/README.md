# 🚀 Day 01 – DevConnect (User Auth API)

## 📌 Goal
Build the user module for DevConnect – a mini LinkedIn clone. Focused on:
- Setting up Express backend
- MongoDB connection
- JWT-based authentication
- Secure password handling

---

## 🛠 Tech Stack
- Node.js
- Express
- MongoDB + Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

---

## ✅ What I Built

### 🧩 Features
- [x] User registration (name, email, password, bio)
- [x] Login with JWT authentication
- [x] Protected route to fetch logged-in user details (`/me`)
- [x] Password hashed using bcrypt (Mongoose pre-save hook)
- [x] JWT token signed and verified via middleware

### 🗂 Folder Structure
backend/
├──src
    ├── controllers/
    ├── routes/
    ├── models/
    ├── middlewares/
    ├── config/
    ├── utils/
    ├── app.ts
    ├── server.ts


---

## 🧠 DSA Progress

### ✅ Problems Solved
- Two Sum
- Best Time to Buy and Sell Stock

Located in:  
`/day-01/code/dsa/two-sum.ts`  
`/day-01/code/dsa/best-time-to-buy-and-sell-stock.ts`

---

## 📁 Repo Path
/day-01/
├── code/
│ ├── backend/ ← Express app
│ └── dsa/ ← TypeScript DSA solutions
└── README.md ← this file
