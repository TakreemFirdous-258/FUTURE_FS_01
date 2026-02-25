# Personal Portfolio Website 🌐

A modern, responsive personal portfolio website built to showcase my skills, projects, and professional profile.  
The website includes a fully functional contact form with real-time email notifications using a Node.js backend.

---

## 🚀 Features

- Clean and modern UI with dark theme
- Interactive sections: Home, Skills, Projects, Contact
- Fully responsive design
- Contact form with backend integration
- Real-time email notifications on form submission
- Smooth user experience and animations

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- Nodemailer (for email notifications)

---

## 📬 Contact Form Functionality

- Users can submit their email, mobile number, and message
- The backend processes the request
- The message is sent directly to my email using Nodemailer
- Success/error feedback is shown instantly on the UI

---

## 📂 Project Structure
FUTURE_FS_01/
│
├── backend/
│ ├── server.js
│ ├── package.json
│ └── .env
│
├── index.html
├── connect.html
├── projects.html
├── styles.css
├── script.js
└── README.md

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the repository 
```bash
git clone https://github.com/your-username/your-repo-name.git
```
### 2️⃣ Install backend dependencies
```bash
cd backend
npm install
```
### 3️⃣ Configure environment variables
Create a .env file inside backend:
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```
### 4️⃣ Start the backend server
```bash
node server.js
```
### 5️⃣ Open the frontend
Open index.html using Live Server or directly in the browser.

---

📌 Future Enhancements
  -Store messages in a database (MongoDB)
  -Auto-reply emails to users
  -Deploy backend to cloud (Render / Railway)
  -SEO optimization

---

👤 Author

   Takreem Firdoz
    -Aspiring Full-Stack Developer | AI & ML Enthusiast
