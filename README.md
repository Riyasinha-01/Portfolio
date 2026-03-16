# Riya Sinha — Portfolio Website

A modern, elegant personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/          ← Add your profile photo here as "riya.jpg"
│   └── resume/          ← Add your resume PDF here as "Riya_Sinha_Resume.pdf"
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         Sticky nav with hamburger menu
│   │   ├── Hero.jsx           Landing section with photo + bio
│   │   ├── About.jsx          About me section
│   │   ├── Skills.jsx         Technical + soft skills
│   │   ├── Projects.jsx       Project cards
│   │   ├── Certificates.jsx   Certification cards
│   │   ├── Achievements.jsx   Highlight cards
│   │   ├── Education.jsx      Vertical timeline
│   │   ├── Resume.jsx         Resume download section
│   │   ├── Contact.jsx        Contact links + form
│   │   └── Footer.jsx         Minimal footer
│   │
│   ├── data/
│   │   ├── skills.js          Edit skills here
│   │   ├── projects.js        Edit projects here
│   │   ├── certificates.js    Edit certs here
│   │   └── achievements.js    Edit achievements here
│   │
│   ├── styles/
│   │   └── global.css         Tailwind base + custom utilities
│   │
│   ├── App.jsx                Root component
│   └── main.jsx               Entry point
│
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

---

## 🖼️ Adding Your Profile Photo

1. Place your photo at: `public/images/riya.jpg`
2. In `src/components/Hero.jsx`, replace the placeholder `<div>` with:
```jsx
<img src="/images/riya.jpg" alt="Riya Sinha" className="w-full h-full object-cover" />
```

## 📄 Adding Your Resume

1. Place your PDF at: `public/resume/Riya_Sinha_Resume.pdf`
2. The download button in `Resume.jsx` is already wired to this path.

## ✏️ Editing Content

All content lives in `src/data/` — just edit those JS files:
- **skills.js** → technical & soft skills
- **projects.js** → project cards
- **certificates.js** → certification cards
- **achievements.js** → achievement highlights

Contact info is in `src/components/Contact.jsx` and `src/components/Footer.jsx`.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Icons | Icon library |
| Google Fonts | Typography (Plus Jakarta Sans + Playfair Display) |
