⚙️ D-Folio: Dhiraj's Cyberpunk Portfolio
"Code. Create. Innovate."

A dynamic and visually stunning personal portfolio showcasing my expertise as a MERN Stack Developer. Designed with a sleek, high-tech, cyberpunk aesthetic, this site uses creative CSS and JavaScript to bring my skills and projects to life.

✨ Features
High-Tech & Immersive Design
Cyberpunk Theme: A cohesive dark theme utilizing neon accents (#64ffda - Teal) for a modern, futuristic feel.

Animated Hero Section: Features a mesmerizing Matrix-style rain effect, floating code snippets, and an interactive terminal window with a typing effect.

3D Profile Cube: A rotating cube element in the hero section to display profile image, code snippets, and stats.

Dynamic Navbar: A sleek, animated header with a scroll-triggered shrinking effect.

Interactive Showcases
Project Network: Projects are displayed as interactive nodes on a grid overlay. Clicking a node triggers a detailed, customizable modal popup for in-depth project exploration.

Skill Grid: A responsive skill matrix where hovering over a skill visually reveals a proficiency bar with a unique color scheme for different levels.

Certificates Carousel: An auto-sliding, responsive carousel to showcase professional credentials.

Development & Performance
Responsive Layout: Fully optimized for desktop, tablet, and mobile devices using CSS media queries.

Modern JavaScript: Utilizes native JavaScript for DOM manipulation, animations, and interactive elements without heavy frameworks.

Custom Animations: Smooth transitions and keyframe animations for an engaging user experience.

🛠️ Tech Stack
Category	Technology	Description
Frontend	HTML5, CSS3, JavaScript	Core structure, styling, and interactivity.
Aesthetics	Custom CSS (Variables & Animations)	Implementing the dark, neon cyberpunk aesthetic.
External	Font Awesome, Google Fonts (Poppins)	Icons and typography.
Libraries	ScrollReveal	For smooth scroll-based entrance animations.
🚀 Getting Started
This project is a static site and can be run easily in any modern web browser.

Prerequisites
You only need a web browser (like Chrome, Firefox, or Edge).

Installation
Clone the repository:

Bash

git clone https://github.com/FSDDhiraj/My-Projects/tree/main/InternShip-Project-Easybyte D-Folio
Navigate to the project directory:

Bash

cd D-Folio
Open in your browser:
Open the index.html file directly in your preferred web browser.

OR

Use a local development server (e.g., Live Server VS Code extension) for better asset loading and testing.

💡 Customization
1. Personal Information
Edit your name, resume link, and contact details in index.html.

Update your contact information in the <footer> section of index.html.

2. Projects (index.html & script.js)
HTML Structure (index.html): Update the node-container and create/modify the popup-overlay elements (#ecommerce-popup, #dashboard-popup, etc.) with your project details, images, descriptions, and links.

JavaScript Popups (script.js): The showPopup(projectId) function handles which modal to display. Ensure the projectId in your HTML nodes matches the ID of your popup.

3. Skills (index.html & style.css)
HTML Structure (index.html): Update the skill-cell elements with the desired data-skill, data-level (a number 1-100), and a new emoji/icon.

CSS Styling (style.css): The proficiency colors are defined in the :root and assigned using attribute selectors in the .skill-cell section:

CSS

.skill-cell[data-level="90"] { --level-width: 90%; --level-color: var(--accent); }
/* ... add/adjust more levels and colors here */
4. Theme Colors (style.css)
Modify the CSS variables in style.css to change the main color scheme:

CSS

:root {
  --primary: #0a192f;     /* Navy blue (Background) */
  --secondary: #112240;   /* Darker navy (Card Background) */
  --accent: #64ffda;      /* Teal (Neon Highlight/Primary Accent) */
  /* ... and other color variables */
}
📞 Contact
Feel free to reach out to me!

Email: dhirajsonavane9923@gmail.com

Phone: +91 8208292495

LinkedIn: [Your LinkedIn Profile]

GitHub: [Your GitHub Profile]

❤️ Coded with passion by Dhiraj Sonawane
(Built using HTML, CSS, and JavaScript.)
