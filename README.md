# Ali's Portfolio Website

A modern, animated portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and Swiper.js.

## Features

- 🎨 **Beautiful Design** - Blue/Purple gradient theme with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes with persistence
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎭 **Smooth Animations** - Framer Motion powered animations
- 🎪 **Project Carousel** - Swiper.js for beautiful project showcases
- 🔍 **Project Filtering** - Filter projects by category
- 📮 **Contact Form** - Get in touch easily

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Swiper.js** - Carousel
- **Lucide React** - Icons
- **React Router** - Navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5174](http://localhost:5174) in your browser

### Build for Production

```bash
npm run build
npm run preview
```

## Customization Guide

### 1. Personal Information

Update your personal details in these files:

**[src/utils/constants.js](src/utils/constants.js)**
- Update app name, description, and social links

**[src/data/socialLinks.js](src/data/socialLinks.js)**
- Update your social media URLs

### 2. Projects

Edit **[src/data/projects.js](src/data/projects.js)** to add/modify your projects:

```javascript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Short description',
  longDescription: 'Detailed description',
  image: 'https://your-image-url.com/image.jpg',
  tech: ['React', 'Tailwind CSS'],
  category: 'Frontend',
  liveUrl: 'https://your-live-site.com',
  githubUrl: 'https://github.com/yourusername/repo',
  featured: true // Show on homepage
}
```

**Tips:**
- Use high-quality images (recommended: 800x600px)
- Mark 2-3 best projects as `featured: true`
- Update project categories if needed

### 3. Skills

Edit **[src/data/skills.js](src/data/skills.js)** to update your skills:

```javascript
{
  name: 'React',
  category: 'Frontend',
  icon: 'Component' // Lucide icon name
}
```

**Available icon names:** Visit [lucide.dev](https://lucide.dev) to find icon names

### 4. About Section

Edit **[src/components/home/About.jsx](src/components/home/About.jsx)**:
- Update profile image URL
- Modify bio text
- Update experience highlights

### 5. Hero Section

Edit **[src/components/home/Hero.jsx](src/components/home/Hero.jsx)**:
- Change your name
- Update title/role
- Modify description

### 6. Colors & Theme

Edit **[tailwind.config.js](tailwind.config.js)** to change colors:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Your primary color
  },
  secondary: {
    500: '#a855f7', // Your secondary color
  },
}
```

### 7. Contact Information

Edit **[src/pages/Contact.jsx](src/pages/Contact.jsx)**:
- Update email, phone, and location

### 8. Resume

Add your resume PDF to **public/resume.pdf**

### 9. Favicon & Meta Tags

- Add your favicon to **public/**
- Update **index.html** with your meta tags

## Project Structure

```
src/
├── components/
│   ├── common/         # Navbar, Footer, ThemeToggle, etc.
│   ├── home/           # Hero, About, Skills, FeaturedProjects
│   ├── projects/       # ProjectCard, ProjectFilter
│   └── contact/        # ContactForm, SocialLinks
├── context/            # ThemeContext
├── data/               # projects.js, skills.js, socialLinks.js
├── hooks/              # Custom hooks
├── layouts/            # MainLayout
├── pages/              # Home, Projects, Contact
├── utils/              # Utilities and helpers
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repo for auto-deployment

### Other Platforms

- Build command: `npm run build`
- Output directory: `dist`

## Tips for Best Results

1. **Images**: Use optimized images (WebP format recommended)
2. **Content**: Write clear, concise descriptions
3. **Projects**: Showcase your best 4-6 projects
4. **Resume**: Keep it updated
5. **Social Links**: Link to active profiles
6. **Testing**: Test on different devices and browsers

## Need Help?

- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)
- **Swiper.js**: [swiperjs.com](https://swiperjs.com/)
- **React Router**: [reactrouter.com](https://reactrouter.com/)

## License

This portfolio template is free to use. Customize it and make it your own!

---

Built with ❤️ using modern web technologies
