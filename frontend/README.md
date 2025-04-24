# 🐝 Job Hive - MERN Stack Job Portal

Job Hive is a full-stack job portal application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides a seamless platform where recruiters can create companies and post job openings, while students can browse and apply for jobs. A chatbot is also integrated to assist users, deployed via Vercel.

## 🚀 Features

- ✨ Modern frontend with React.js and Tailwind CSS
- 🔒 Role-based access: Recruiter & Student
- 🏢 Recruiters can:
  - Register and log in
  - Create and manage companies
  - Post, update, and delete job listings
- 🎓 Students can:
  - Register and log in
  - Browse and apply for jobs
- 💬 Chatbot integrated and deployed via Vercel for user assistance
- 🌐 RESTful APIs built with Express and MongoDB
- 📂 Structured folder setup with `frontend/` and `backend/` directories

## 🧠 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Token)
- **Chatbot:** Vercel-hosted AI chatbot
- **Deployment:** Vercel (frontend + chatbot), Render/Heroku (backend)

## 📁 Folder Structure

```bash
JobHive/
├── frontend/        # React app
├── backend/         # Node.js + Express API
├── README.md
🛠️ Setup Instructions
Prerequisites
Node.js (v16+)

MongoDB Atlas account

Vercel account (for chatbot)

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/job-hive.git
cd job-hive
2. Setup Backend
bash
Copy
Edit
cd backend
npm install
# Create a `.env` file with the following:
# PORT=5000
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_secret_key
npm run dev
3. Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
npm start
4. Deploy Chatbot (Optional)
Go to your chatbot Vercel dashboard

Link the chatbot repo

Deploy and copy the chatbot widget iframe or script

Paste it into your frontend app (e.g., in App.js or a dedicated component)



👥 Roles
Recruiter
Can create a company

Can post, update, and delete job listings

Can manage applicants

Student
Can browse job listings

Can apply to jobs

Gets chatbot assistance

📌 Future Improvements
Resume upload and parsing

Interview scheduling

Real-time notifications

Admin panel

🙌 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

📄 License
This project is open-source under the MIT License.

Made with 💻 by Ritik Parmar

yaml
Copy
Edit

---

Let me know if you want to include the chatbot’s link, screenshots, API documentation, or anything else specific!






