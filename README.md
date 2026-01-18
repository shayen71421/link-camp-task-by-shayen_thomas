# LINK CAMP '25 Website

A responsive landing page for **LINK CAMP 2025**

## Overview

This project is a modern, animated landing page built for LINK CAMP 2025, an event organized by IEEE LINK. The website features:

- **Hero Section** - Image slider with crossfade transitions showcasing event highlights
- **About Section** - Information about the event and its objectives
- **Schedule Section** - Event timeline and agenda details
- **Registration Section** - Registration form and guidelines for participants
- **Footer Section** - Contact information and social links

Additional features include:
- Responsive design optimized for all screen sizes
- Animated UI elements using Framer Motion

> **Note:** This project was developed as part of the Web Development Task for IEEE LINK Team Call 2026.

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Setup and Run Instructions

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shayen-thomas/link-camp-task-by-shayen_thomas.git
   cd link-camp-task-by-shayen_thomas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── loading.js
│   ├── not-found.jsx
│   └── page.js
├── components/
│   └── Navbar/
│       └── LinkCampNavbar.jsx
└── sections/
    └── HomePage/
        ├── LinkCampAboutSection.jsx
        ├── LinkCampFooterSection.jsx
        ├── LinkCampHeroSection.jsx
        ├── LinkCampRegistrationSection.jsx
        └── LinkCampScheduleSection.jsx
```

## License

This project is created for IEEE LINK Team Call 2026.

---

**Author:** Shayen Thomas
