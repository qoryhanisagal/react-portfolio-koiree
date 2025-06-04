# Koiree's Portfolio Website

A full-stack developer portfolio built using **React**, **TailwindCSS**, **DaisyUI**, and a **Django** backend. This project showcases front-end skills, UI animations, and component-based architecture with potential integration to a Python-powered backend API.

---

## ✨ Tech Stack

### 🖥️ Frontend

- **React 19** (via Vite)
- **TailwindCSS v4**
- **DaisyUI v5** (component library)
- **React Router DOM**
- **Font Awesome** (icons)

### 🧠 Backend (to be integrated)

- **Python 3.12**
- **Django 5.x**
- **Django REST Framework** (optional for API)

---

## 📁 Project Structure

```bash
react-portfolio-koiree/
├── client/                   # React frontend
│   ├── src/
│   │   ├── assets/           # Images & static files
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page-level components
│   │   ├── App.jsx           # Root component with routes
│   │   ├── index.css         # Tailwind + DaisyUI styles
│   │   └── main.jsx          # React DOM root
│   ├── tailwind.config.js   # Tailwind + DaisyUI themes
│   └── vite.config.js       # Vite config
├── server/                   # Django backend (to be added)
│   └── manage.py
└── README.md


⸻

🚀 Getting Started

1. Clone the Repository

git clone https://github.com/your-username/react-portfolio-koiree.git
cd react-portfolio-koiree

2. Frontend Setup (React)

cd client
npm install
npm run dev

3. Backend Setup (Django)

cd server
python -m venv env
source env/bin/activate
pip install django djangorestframework
django-admin startproject backend .
python manage.py runserver

⚠️ You may need to configure CORS settings to allow your React frontend to communicate with the Django backend.

⸻

🌈 Theming

This project uses a custom DaisyUI theme named descoteaux. You can switch between light/dark modes or extend with additional themes via the tailwind.config.js.

⸻

📸 Screenshots

Add screenshots of your Hero section, responsive design, or dark mode toggle here.

⸻

🧪 Testing

Basic frontend testing can be performed by verifying navigation, responsiveness, and theme toggling. You can also add:
	•	Unit tests for components using React Testing Library
	•	API connection testing once backend is integrated

⸻

📚 License

MIT License

⸻

🙋🏽‍♀️ Author

Koiree Descoteaux
Aspiring Full Stack Developer | LinkedIn | Portfolio

---

```
