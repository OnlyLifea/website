# Overview

This is a full-stack web application called "Ugly's Script" - a premium script executor platform designed for gaming script enthusiasts. The application serves as a landing page and community hub for script execution tools, featuring modern UI design with animated elements and a dark theme aesthetic. The platform emphasizes performance, reliability, and community engagement with Discord integration and user statistics.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Tailwind CSS** with custom design system using CSS variables for consistent theming
- **Framer Motion** for smooth animations and interactive elements
- **shadcn/ui** component library built on Radix UI primitives for accessible UI components
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and API data fetching

The frontend follows a component-based architecture with reusable UI components stored in `client/src/components/ui/`. Custom page components and features are organized in separate directories with clear separation of concerns.

## Backend Architecture  
- **Express.js** server with TypeScript for API endpoints and middleware
- **In-memory storage** implementation with interface-based design for easy database migration
- **Session-based architecture** using connect-pg-simple for PostgreSQL session storage
- **Modular route registration** system with centralized error handling
- **Development/Production environment** configuration with Vite integration in dev mode

The backend uses a storage interface pattern that currently implements in-memory storage but is designed to easily switch to database persistence.

## Database Schema
- **PostgreSQL** ready with Drizzle ORM for type-safe database operations
- **User entity** with username/password fields and UUID primary keys
- **Schema validation** using Drizzle-Zod for runtime type checking
- **Migration system** configured through Drizzle Kit for database version control

The database schema is minimal but extensible, designed around user management with room for additional features.

## Development Tooling
- **TypeScript** configuration supporting both client and server code with path mapping
- **ESLint/Prettier** implied through modern React setup
- **Hot reload** development environment with Vite's fast refresh
- **Build system** using ESBuild for server bundling and Vite for client bundling

# External Dependencies

## Database & ORM
- **Neon Database** serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM** for type-safe database operations with PostgreSQL dialect
- **connect-pg-simple** for PostgreSQL-backed session storage

## UI & Styling
- **Radix UI** component primitives for accessible UI building blocks
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Lucide React** for consistent iconography
- **Font Awesome** for additional icon support
- **Google Fonts** (Inter) for typography

## Animation & Interaction
- **Framer Motion** for page transitions and micro-interactions
- **Embla Carousel** for touch-friendly carousel components
- **React Hook Form** with Zod resolvers for form validation

## Development & Build
- **Vite** development server with React plugin and runtime error overlay
- **Replit** integration plugins for development environment
- **ESBuild** for server-side bundling and optimization

## State Management
- **TanStack React Query** for server state and API communication
- **Zustand** (implied by modern React patterns) for client state management

The application is architected for scalability with clear separation between presentation, business logic, and data layers. The use of TypeScript throughout ensures type safety, while the modular component architecture supports maintainability and reusability.