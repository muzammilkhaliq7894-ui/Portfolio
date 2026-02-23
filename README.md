# Muzammil's Portfolio Website

A modern, professional portfolio website showcasing Muzammil's expertise in AI Engineering and Data Science.

## Features

- ✨ **Modern Design**: Clean, minimalist layout with blue and white color scheme
- 🎬 **Smooth Animations**: Typing effect, fade-ins, slide-ups, and hover effects
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ♿ **Accessibility**: Semantic HTML and accessible components
- ⚡ **Performance**: Fast loading with optimized assets
- 🎯 **SEO Optimized**: Meta tags and semantic markup

## Tech Stack

- **React** 18.2 - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/       # React components
│   ├── Header.tsx   # Navigation header
│   ├── Hero.tsx     # Landing section
│   ├── About.tsx    # About section
│   ├── Skills.tsx   # Skills showcase
│   ├── Services.tsx # Services offered
│   ├── Projects.tsx # Portfolio projects
│   ├── Contact.tsx  # Contact form
│   └── Footer.tsx   # Footer
├── hooks/           # Custom React hooks
│   ├── useTypewriter.ts
│   └── useIntersectionObserver.ts
├── utils/           # Utility functions
│   ├── constants.ts # App constants
│   └── data.ts      # Portfolio data
├── types.ts         # TypeScript types
├── App.tsx          # Main App component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Content Sections

### Hero Section
- Professional profile introduction with typing animation
- Call-to-action buttons for portfolio and contact

### About Section
- Educational background (BSCS from Sir Syed University)
- Final Year Project (SafeTrip) details
- Professional summary

### Skills Section
- AI & Machine Learning
- Data Analysis & Business Intelligence
- Programming Languages
- Tools & Platforms
- Soft Skills
- Interactive proficiency bars

### Services Section
- AI & Machine Learning Solutions
- Business Intelligence Services
- Data Solutions & Analytics

### Projects Section
- SafeTrip - AI-based trip planning
- Price Prediction Model
- Intelligent Chatbot System
- Business Intelligence Dashboard
- Classification & Regression Projects
- Management Systems

### Contact Section
- Contact information (email, phone)
- Social media links
- Contact form with validation

## Customization

### Update Contact Information

Edit `src/utils/constants.ts`:
```typescript
export const CONTACT_EMAIL = 'your@email.com'
export const CONTACT_PHONE = '+92-XXX-XXXXXXX'
```

### Update Portfolio Data

Edit `src/utils/data.ts`:
- `skills` - Add or modify skills
- `services` - Add or modify services
- `projects` - Add or modify projects

### Update Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0066cc',
  secondary: '#00a3ff',
}
```

## Performance Optimizations

- Intersection Observer for lazy animations
- Smooth scrolling for navigation
- Optimized animations using CSS
- Responsive images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT - Feel free to use this template for your own portfolio

## Contact

For inquiries:
- Email: muzammilkhaliq7894@gmail.com

