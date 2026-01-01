# Hussain Lakhani Jewellers - Next.js Premium Website

## 🌟 A Legacy of Pure Gold Since 1965

A premium, heritage-driven jewellery website for Hussain Lakhani Jewellers, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Font Awesome 6
- **Fonts**: Playfair Display + Montserrat

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
jewelers/
├── .gitignore
├── next.config.js          # Next.js configuration
├── next-env.d.ts           # TypeScript declarations
├── package.json            # Dependencies
├── postcss.config.js       # PostCSS configuration
├── README.md               # This file
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── src/
    ├── app/
    │   ├── globals.css     # Global styles & Tailwind directives
    │   ├── layout.tsx      # Root layout
    │   └── page.tsx        # Homepage component
    └── public/             # Static assets
```

## 🎨 Design System

### Color Palette
- **Black**: #0a0a0a
- **Ivory**: #faf9f6
- **Gold**: #c9a227
- **Gold Light**: #d4c4a8
- **Gold Dark**: #a8861c

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Montserrat (Sans-serif)

## ✨ Features

### Implemented Sections
1. **Navigation**: Responsive navbar with scroll effects and mobile menu
2. **Hero Section**: Full-screen hero with parallax effect
3. **Trust Signals**: Google rating, location, and legacy badges
4. **Collections**: Four collection cards with hover animations
5. **About Us**: Three-generation legacy story
6. **Reviews Carousel**: Auto-rotating Google reviews with smooth transitions
7. **Contact Section**: Address, hours, phone, WhatsApp integration, and Google Maps
8. **Footer**: Quick links and social media icons

### Technical Features
- Server-Side Rendering (SSR) with Next.js App Router
- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll animations with Framer Motion
- Image optimization with next/image
- SEO-optimized metadata
- TypeScript for type safety
- Clean, maintainable code structure

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Brand Positioning

- **Category**: Luxury Gold & Bridal Jewellery
- **Audience**: High-net-worth families, bridal buyers, legacy clients
- **Emotion**: Trust, Prestige, Heritage, Exclusivity
- **Tone**: Calm, confident, royal — never loud or salesy

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  gold: {
    DEFAULT: '#c9a227',  // Your gold color
    dark: '#a8861c',     // Darker gold
    light: '#d4c4a8',    // Lighter gold
  },
}
```

### Updating Images
Images are sourced from Unsplash. Replace URLs in `src/app/page.tsx` with your actual product images.

### Contact Information
Update contact details in the Contact section of `src/app/page.tsx`:
- Phone number
- WhatsApp link
- Address
- Google Maps embed URL

## 📦 Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🎨 Design Philosophy

> "When a visitor opens the site, they should think: 'This is not just a shop. This is a name my family can trust.'"

The website successfully positions Hussain Lakhani Jewellers as an old-money, heritage luxury brand with calm confidence and generational trust.

## 📄 License

This project is created for Hussain Lakhani Jewellers.
All design elements are custom and proprietary.

## 🤝 Contributing

This is a completed website template. For customizations:
1. Fork the repository
2. Make your changes
3. Submit a pull request

---

**Hussain Lakhani Jewellers** - A Legacy of Pure Gold Since 1965

*Crafting trust, elegance, and timeless jewellery for generations in Karachi.*
# Jewellers-website
# Jewellers-website
