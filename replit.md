# Overview

This is a modern portfolio website for Talha Rehman, an Information Technology undergraduate and aspiring ML engineer. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, showcasing the developer's projects, skills, certifications, and providing contact functionality. The portfolio features an interactive, animated design with sections for about information, project showcases, skills visualization, certifications, CV download, and contact details.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom design system including color variables and animations
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Animations**: Framer Motion for smooth transitions and interactive animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Theme System**: Custom theme provider supporting dark/light modes with localStorage persistence

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Setup**: TSX for TypeScript execution in development
- **Static Serving**: Custom Vite integration for serving React frontend in development
- **API Structure**: RESTful endpoints for health checks, contact form, and CV download tracking
- **Storage**: In-memory storage implementation with interface for future database integration
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions
- **Development**: In-memory storage using Map data structures for user management
- **Database Schema**: Drizzle ORM with PostgreSQL schema definitions for users table
- **Database Configuration**: Neon Database serverless PostgreSQL for production
- **Migrations**: Drizzle Kit for database schema management and migrations

## Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL session store (configured but not actively used)
- **User Schema**: Basic user model with username/password fields using Drizzle ORM
- **Validation**: Zod schemas for input validation and type safety

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM for type-safe database operations
- **UI Framework**: Radix UI for accessible component primitives
- **Animation**: Framer Motion for smooth animations and transitions
- **Fonts**: Google Fonts (Inter, JetBrains Mono, Orbitron) for typography
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Build Tool**: Vite with React plugin for fast development and building
- **TypeScript**: Full TypeScript support across frontend and backend
- **Linting/Formatting**: TypeScript compiler for type checking
- **Development Features**: Replit-specific plugins for cartographer and runtime error overlay

### Styling and Design
- **CSS Framework**: Tailwind CSS with custom configuration
- **Color System**: CSS custom properties for theming with dark/light mode support
- **Component Variants**: Class Variance Authority for component styling variants
- **Utilities**: clsx and tailwind-merge for conditional styling

### External Services
- **Image Assets**: Unsplash for background images in hero section
- **Email Integration**: Placeholder for future email service integration for contact form
- **Analytics**: Placeholder for CV download tracking and user analytics