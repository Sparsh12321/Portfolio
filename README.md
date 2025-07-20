# 🚀 Sparsh Jain — Portfolio Website

Welcome to the source code of my personal portfolio website!  
This project is a modern, fully responsive portfolio built to showcase my skills, projects, and journey as a **Full Stack Developer** with a special interest in **AI/ML** and interactive technologies.

> Clean UI. Smooth animations. Fully functional. Built with love & code.

---

## ✨ Highlights

- 🎨 **Dark & Light Mode** with persistent theme memory  
- 📱 **Responsive Layout** for all screen sizes  
- 💼 **Project Showcase** with live demos and GitHub links  
- 💌 **Working Contact Form** powered by EmailJS  
- 🌌 **Animated Star Background** for a visual pop  
- ⚙️ **Framer Motion** powered transitions  
- 🧠 **Built using modern tech** — React + Vite + Tailwind CSS

---

## 🧰 Tech Stack

| Category     | Tools |
|--------------|-------|
| Frontend     | React, JavaScript (ES6+), Vite |
| Styling      | Tailwind CSS, Framer Motion, Lucide Icons |
| Forms/Email  | EmailJS |
| Code Quality | ESLint, Prettier |
| Hosting      | GitHub Pages / Vercel (your choice) |

---

## 📂 Website Sections

### 🏠 Hero  
Intro, social links, call-to-action buttons, and profile image.

### 🧠 Skills  
Categorized tech skills with hover effects and animations.

### 💼 Experience  
Timeline format showcasing roles, tech used, and companies.

### 🎓 Education  
Institutions, grades, degrees, and key academic highlights.

### 🚀 Projects  
Paginated gallery with project previews, tech stack, and links.

### 📬 Contact  
Validated form with EmailJS + social/contact links.

---

## 💡 Notable Features

- **Theme Toggle**  
  Light/dark switch with `localStorage` + animation transitions.

- **EmailJS Integration**  
  No backend required! Secure `.env` setup for template IDs and keys.

- **Scroll-Based Animations**  
  Built using Framer Motion with scroll and hover triggers.

- **Responsive Navbar**  
  Hamburger menu for mobile and section highlighting on scroll.

- **Dynamic Star Background**  
  Subtle, animated canvas effect for visual appeal.

---

## ⚙️ Setup Guide

```bash
# 1. Clone the repo
git clone https://github.com/Sparsh12321/portfolio-website.git
cd portfolio-website

# 2. Install dependencies
npm install

# 3. Create environment file for EmailJS
touch .env

# Add the following:
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# 4. Start development server
npm run dev

# 5. Build for production
npm run build
