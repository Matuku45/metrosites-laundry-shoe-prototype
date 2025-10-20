# metrosites-laundry-shoe-prototype


👟 Laundry & Shoe Repair
Local Laundry & Repair Service Website Prototype
1. Project Overview

The Laundry & Shoe Repair Website Prototype is a front-end project developed under the MetroSites Prototype System.

It is designed to represent a local laundry and repair service online, providing an interactive and visually appealing prototype for client review.
The system demonstrates pricing information, booking functionality, and contact options, while emphasizing clarity, simplicity, and user convenience.

2. Project Objective

To design a high-quality, responsive website interface that:

Displays pricing details for laundry and repair services.

Provides a booking form for clients to schedule services easily.

Offers a clear contact section with all relevant store information.

Enhances user experience through modular components and smooth interactions.

3. Deliverable Type
Deliverable	Type	Platform
Website Prototype	Front-End Only	Web (Responsive for Desktop, Tablet & Mobile)
4. Key Sections of the Prototype
Section	Description	Suggested Component Type (DaisyUI / Tailwind)
Home / Hero Section	Intro banner highlighting the service	Hero
Pricing Section	Lists service rates for laundry and shoe repair	Card, Table, Badge
Booking Form	Collects user details for service scheduling	Form, Input, Button, Select
Contact Section	Displays phone, email, address, and map (if needed)	Form, Alert, Card
Footer	Links, hours of operation, and social media	Footer
5. Tech Stack
Category	Tools & Technologies	Purpose
Frontend Framework	React JS (Vite + TypeScript)	Builds modular and reusable UI components
Routing	React Router DOM	Single-page navigation between sections
Styling	Tailwind CSS + DaisyUI	Responsive design, prebuilt components
UI Components	DaisyUI	Hero sections, cards, forms, buttons, alerts
Animations	Framer Motion	Smooth page transitions and interactive effects
Icons	Lucide React	Clean, modern iconography for UI clarity
Code Quality	ESLint, Prettier	Standardized, maintainable code
Version Control	Git, GitHub	Source code management and collaboration
Design Mockups	Figma / Adobe XD	Visual design and layout prototyping
Deployment / Hosting	Vercel, Netlify	Live prototype previews for client review
6. Project Folder Structure (Front-End Prototype)
laundry-shoe-repair/
│
├── public/                  # Static files (images, icons, banners)
│
├── src/
│   ├── assets/              # Graphics, service images, icons
│   ├── components/          # Reusable UI elements
│   │   ├── Navbar
│   │   ├── Hero
│   │   ├── PricingCard
│   │   ├── BookingForm
│   │   ├── ContactCard
│   │   └── Footer
│   │
│   ├── pages/               # Main pages
│   │   ├── Home
│   │   ├── Pricing
│   │   ├── Booking
│   │   └── Contact
│   │
│   ├── routes/              # Routing configuration
│   ├── styles/              # Tailwind/DaisyUI customizations
│   ├── utils/               # Helper functions/constants
│   ├── App.tsx              # Root app component
│   └── main.tsx             # Entry point rendering App
│
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind + DaisyUI config
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build config
└── README.md                # Project documentation

7. Component Architecture
Component	Purpose
Navbar	Top navigation linking Home, Pricing, Booking, Contact
Hero Section	Brand introduction with tagline and visual banner
PricingCard	Displays service types, rates, and promotions
BookingForm	Collects client info for scheduling laundry or repair
ContactCard	Shows phone, email, address, and optionally map
Footer	Brand info, links, and social media presence
Alerts / Badges	Highlights special offers or important messages
Animations	Subtle motion for smooth transitions and interactions
8. GitHub Repository Information
Project Name	Repository Name	Status
Laundry & Shoe Repair	metrosites-laundry-shoe-prototype	Active / In Development
9. Expected Outcome

The prototype will:

Showcase pricing clearly for each service.

Enable easy booking via a front-end form.

Provide a user-friendly contact section for inquiries.

Be fully responsive and visually aligned with MetroSites standards.

Serve as a presentation-ready model for client feedback and future backend integration.

Demonstrate MetroSites’ front-end capability using React, Tailwind CSS, DaisyUI, and Framer Motion.
<img width="499" height="599" alt="image" src="https://github.com/user-attachments/assets/4a1e12fa-f538-441a-bd5b-e4d05cda3e6c" />
