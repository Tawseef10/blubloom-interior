# Blubloom Interior

A high-end digital showroom for a luxury interior design firm featuring biophilic aesthetics and interactive transformation tools.

## Features

- Modern, responsive design with biophilic aesthetics
- Interactive portfolio showcase
- Before/after transformation slider
- Smooth animations and transitions
- Mobile-friendly navigation
- Contact form integration

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling (via CDN)
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/blubloom-interior.git
   cd blubloom-interior
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set up environment variables:
   Create a `.env.local` file and add:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
blubloom-interior/
├── components/          # React components
│   ├── Contact.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Portfolio.tsx
│   ├── ScrollToTop.tsx
│   └── TransformationSlider.tsx
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── index.html          # HTML template
├── index.css           # Global styles
├── types.ts            # TypeScript type definitions
└── vite.config.ts      # Vite configuration
```

## License

This project is private and proprietary.
