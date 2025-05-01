# 🏥 DrApolloClone

A full-stack doctor listing application built with **Next.js** (frontend) and **Express.js + MongoDB** (backend). This project demonstrates doctor data management, filtering, pagination, and SEO optimization — perfect for a healthcare listing platform.

---

## ✨ Features

### 🔧 Backend (Express.js + MongoDB)
- ✅ **Add Doctor API**
  - Route: `POST /api/doctor/addDoctor`
  - Adds a new doctor with fields: `name`, `gender`, `image`, `rating`, `location`, `experience`, `specialization`.
  - Validates numeric inputs (e.g., rating, experience).

- ✅ **Doctor Listing with Filters**
  - Route: `GET /api/doctor/list-doctor-with-filter`
  - Supports query parameters:
    - `page` – Pagination (default 1)
    - `limit` – Results per page (default 5)
    - `experienceMin`
    - `feesMax` *(optional)*
    - `ratingMin`
  - Returns paginated and filtered list of doctors based on input.

---

### 💻 Frontend (Next.js)
- ✅ **Doctor Listing Page**
  - Doctors displayed with pagination and clean card layout.
  - Integrated with backend filter API using dynamic query strings.

- ✅ **Filter Functionality**
  - Filters: `Experience Min`, `Fees Max`, `Rating Min`.
  - Frontend inputs update query string and fetch filtered results from backend.

- ✅ **Add Doctor Modal**
  - A beautifully designed modal with input form to add a new doctor.
  - Inputs: `Name`, `Gender`, `Location`, `Specialization`, `Rating`, `Experience`, `Image URL`.
  - Automatically sends data to backend API and updates list on success.

- ✅ **SEO Optimization**
  - Page includes meta `title` and `description`.
  - URL query parameters are clean and SEO-friendly (`?page=2&experienceMin=5` etc.).

---

## 📦 Tech Stack

| Frontend | Backend | Database |
|----------|---------|----------|
| Next.js  | Express.js | MongoDB |
| Tailwind CSS | CORS | Mongoose |

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/DrApolloClone.git
cd DrApolloClone
cd Backend
npm install
cd ../frontend
npm install
npm run dev
