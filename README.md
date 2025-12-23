<<<<<<< HEAD
# madebysybarites
=======
# madebysybarites - Digital Agency Website

A modern, responsive website for madebysybarites - a digital agency specializing in web development, design, and digital solutions.

## 🚀 Live Demo

[https://code-dale.vercel.app](https://code-dale.vercel.app)

## 📋 Features

- **Modern UI/UX**: Built with Next.js 16 and Tailwind CSS 4
- **Responsive Design**: Fully responsive across all devices
- **Interactive Sections**:
  - Hero section with animated elements
  - Project showcase
  - Services overview
  - Client testimonials & achievements
  - FAQ section with expandable answers
  - Contact form
- **Smooth Navigation**: Floating navigation bar with smooth scrolling
- **Dark/Light Mode**: Theme toggle support with next-themes
- **Component Library**: Built with Radix UI components

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Motion (Framer Motion)
- **Package Manager**: pnpm

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sujay149/madebysybarites.git
cd madebysybarites
```

### 2. Install dependencies

Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

### 3. Run the development server

```bash
pnpm dev
```

Or with npm:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
madebysybarites/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   └── contact/             # Contact page
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   ├── hero-section.tsx     # Hero section
│   ├── services.tsx         # Services section
│   ├── faq-section.tsx      # FAQ section
│   ├── header.tsx           # Header navigation
│   ├── floating-nav.tsx     # Floating navigation
│   └── ...                  # Other components
├── lib/                     # Utility functions
├── public/                  # Static assets
├── styles/                  # Additional styles
└── package.json            # Dependencies
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Customization

### Colors & Theme

Modify Tailwind configuration in `tailwind.config.js` and global styles in `app/globals.css`.

### Content

- **Home Page**: Edit `app/page.tsx`
- **Contact Page**: Edit `app/contact/page.tsx`
- **Components**: Modify individual components in the `components/` directory

### Images

Place your images in the `public/` directory and reference them using absolute paths (e.g., `/image.png`).

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
pnpm build
pnpm start
```


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## 👥 Author

**Sujay**
- GitHub: [@Sujay149](https://github.com/Sujay149)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by madebysybarites Team
>>>>>>> 028eea2 (madebysybarites)
