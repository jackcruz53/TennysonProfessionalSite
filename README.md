# Tennyson Professional Site

A personal professional website built with React, TypeScript, and Material-UI, featuring a responsive design and smooth transitions.

## Features

- Responsive layout with animated navigation
- Interactive skills word cloud
- Professional experience timeline
- Contact information
- Dark theme with custom styling
- Smooth page transitions
- CI/CD with GitHub Actions
- Automated linting and type checking

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v16 or higher)
- npm (v8 or higher)

## Installation

1. Clone the repository:
```bash
git clone git@github.com:jackcruz53/TennysonProfessionalSite.git
cd TennysonProfessionalSite
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # Reusable components
│   ├── Layout.tsx
│   ├── LoadingScreen.tsx
│   └── Navbar.tsx
├── pages/          # Page components
│   ├── Home.tsx
│   ├── Career.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
└── App.tsx         # Main application component
```

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The pipeline:
- Runs on push to main and pull requests
- Checks code formatting
- Runs ESLint
- Verifies TypeScript types
- Builds the project

## Technologies Used

- React 18
- TypeScript
- Vite
- Material-UI
- React Router
- D3.js (for word cloud)
- ESLint
- Prettier
- GitHub Actions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Contact

Jack Tennyson - [Your Email or Contact Info]

Project Link: [https://github.com/jackcruz53/TennysonProfessionalSite](https://github.com/jackcruz53/TennysonProfessionalSite)
