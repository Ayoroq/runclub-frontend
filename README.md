# Runners & Cyclers - Frontend

A modern React application for the Runners & Cyclers community platform, connecting fitness enthusiasts through organized running and cycling events.

*This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum.*

## Features

- **User Authentication**: Secure login/signup with session-based authentication
- **Role-Based Access**: Admin and member roles with different permissions
- **Responsive Design**: Mobile-first design with CSS modules
- **Protected Routes**: Authentication-required pages with automatic redirects
- **Modern UI**: Clean, accessible interface with smooth animations

## Tech Stack

- **React 19** - Latest React with modern hooks and patterns
- **React Router 7** - Client-side routing with nested routes
- **Vite** - Fast build tool and development server
- **CSS Modules** - Scoped styling for components
- **GSAP** - High-performance animations
- **Lottie** - Vector animations and micro-interactions

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd runclub-frontend
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.example .env
```

4. Configure environment variables
```env
VITE_BACKEND_URL=http://localhost:3000
```

5. Start development server
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Navbar.jsx
│   └── *.module.css
├── context/            # React Context providers
│   └── AuthContext.jsx
├── pages/              # Route components
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Dashboard.jsx
│   └── *.module.css
├── routes/             # Route configuration
│   └── routes.jsx
├── App.jsx             # Main app component
└── main.jsx           # Application entry point
```

## Authentication Flow

The app uses session-based authentication with the following flow:

1. User submits login/signup form
2. Frontend sends credentials to backend API
3. Backend validates and creates session
4. Frontend stores authentication state in React Context
5. Protected routes check auth status before rendering

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_BACKEND_URL` | Backend API base URL | `http://localhost:3000` |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.