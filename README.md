# 🛍️ IA Collection - E-Commerce Platform

<div align="center">
  <img src="https://user-images.githubusercontent.com/55389276/140866485-8fb1c876-9a8f-4d6a-98dc-08c4981eaf70.gif" alt="Coding" width="400">
  
  [![Profile Views](https://komarev.com/ghpvc/?username=ishfaqahmadafridi&label=Profile%20views&color=0e75b6&style=flat)](https://github.com/ishfaqahmadafridi)
</div>

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Contact](#contact)

## 🎯 Overview

**IA Collection** is a modern, full-stack e-commerce platform built with React, Redux Toolkit, and Django REST Framework. The platform offers a seamless shopping experience with features like user authentication, product browsing, cart management, order tracking, and an admin dashboard.

## ✨ Features

### User Features
- 🎨 **Animated Landing Page** - First-time visitor experience with typing animations
- 🔐 **User Authentication** - Secure JWT-based login and registration
- 👤 **Profile Management** - Update profile information, change password, upload profile picture
- 🛒 **Shopping Cart** - Add, remove, and manage products with real-time updates
- 🔍 **Real-time Search** - Instant product search across all categories
- 📦 **Order Tracking** - Track order status and history
- 🌓 **Dark/Light Theme** - Toggle between themes for better UX
- 📱 **Responsive Design** - Fully responsive across all devices

### Admin Features
- 📊 **Admin Dashboard** - Comprehensive analytics and insights
- 📈 **Sales Analytics** - Daily sales tracking and revenue reports
- 🛍️ **Product Management** - Add, edit, delete products
- 📦 **Order Management** - View and update order statuses
- 👥 **User Management** - Manage customer accounts
- 📋 **Activity Logs** - Track admin actions and user activities

### Product Categories
- 👔 Men's Fashion (Clothing & Footwear)
- 👗 Women's Fashion (Clothing & Footwear)
- 👶 Kids Fashion (Boys & Girls)
- 💄 Cosmetics (Makeup & Skincare)
- 🌸 Fragrances
- 🎁 Special Sale Items

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Description |
|------------|---------|-------------|
| **React** | 19.1.0 | Latest React with concurrent features |
| **TypeScript** | 5.9.3 | Static type checking |
| **Redux Toolkit** | 2.11.2 | Modern state management |
| **React Router** | 7.6.2 | Client-side routing |
| **Tailwind CSS** | 4.2.1 | Utility-first CSS framework |
| **Vite** | 6.3.5 | Next-generation build tool |
| **Axios** | 1.13.6 | HTTP client for API calls |
| **React Icons** | 5.5.0 | Popular icon library |

### Backend
| Technology | Description |
|------------|-------------|
| **Django 4+** | Python web framework |
| **Django REST Framework** | Powerful API development |
| **SQLite** | Lightweight database |
| **SimpleJWT** | JWT authentication |
| **CORS Headers** | Cross-origin resource sharing |

### Dev Tools
| Tool | Version | Purpose |
|------|---------|---------|
| **ESLint** | 9.25.0 | Code linting |
| **PostCSS** | 8.5.8 | CSS transformations |
| **Autoprefixer** | 10.4.27 | CSS vendor prefixes |

### Architecture
- **Component-Based Architecture** - Modular, reusable components
- **Redux Slices** - Organized state management
- **Async Thunks** - API integration
- **Container/Presentational Pattern** - Separation of concerns
- **TypeScript Integration** - Type-safe development

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn

### Frontend Setup

1. Clone the repository
```bash
git clone https://github.com/ishfaqahmadafridi/ishfaqahmadafridi.git
cd ishfaqahmadafridi
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to backend directory
```bash
cd backend
```

2. Create virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies
```bash
pip install django djangorestframework django-cors-headers djangorestframework-simplejwt
```

4. Run migrations
```bash
python manage.py migrate
```

5. Create superuser (optional)
```bash
python manage.py createsuperuser
```

6. Seed database (optional)
```bash
python seed_data.py
```

7. Start Django server
```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000`

## 📁 Project Structure

```
ishfaqahmadafridi/
├── backend/                    # Django backend
│   ├── store_api/             # Main API app
│   │   ├── admin_views/       # Admin-specific views
│   │   ├── models.py          # Database models
│   │   ├── serializers.py     # DRF serializers
│   │   ├── views.py           # API views
│   │   └── urls.py            # API routes
│   ├── store_backend/         # Django settings
│   ├── manage.py
│   └── db.sqlite3
├── src/
│   ├── api/                   # API client & services
│   ├── assets/                # Images & static data
│   ├── components/            # React components
│   │   ├── admin/            # Admin panel components
│   │   ├── auth/             # Authentication components
│   │   ├── cart/             # Shopping cart
│   │   ├── header/           # Header & navigation
│   │   ├── profile/          # User profile (23 sub-components)
│   │   ├── redux/            # Redux slices & store
│   │   │   ├── slices/
│   │   │   │   ├── auth/    # Auth state
│   │   │   │   ├── cart/    # Cart state
│   │   │   │   ├── profile/ # Profile state
│   │   │   │   └── ui/      # UI state
│   │   │   └── store.js
│   │   └── ...               # Other feature components
│   ├── lib/                  # Utility functions
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 📸 Screenshots

### Landing Page
*First-time visitor experience with animated welcome text*
> Add screenshot here

### Home Page
*Browse featured products and categories*
> Add screenshot here

### Product Catalog
*View products by category with filters*
> Add screenshot here

### Shopping Cart
*Manage cart items with real-time updates*
> Add screenshot here

### User Profile
*Manage account settings and profile picture*
> Add screenshot here

### Admin Dashboard
*Analytics and management interface*
> Add screenshot here

### Search Dialog
*Real-time product search across all categories*
> Add screenshot here

## 📚 API Documentation

### Authentication Endpoints
```
POST /api/register/          - Register new user
POST /api/login/             - Login user
POST /api/token/refresh/     - Refresh JWT token
```

### Product Endpoints
```
GET  /api/products/          - Get all products
GET  /api/products/:id/      - Get product by ID
POST /api/products/          - Create product (Admin)
PUT  /api/products/:id/      - Update product (Admin)
DELETE /api/products/:id/    - Delete product (Admin)
```

### Profile Endpoints
```
GET  /api/profile/           - Get user profile
PUT  /api/profile/update/    - Update profile
POST /api/profile/change-password/ - Change password
POST /api/profile/upload-image/    - Upload profile image
```

### Admin Endpoints
```
GET  /api/admin/dashboard/   - Dashboard stats
GET  /api/admin/analytics/   - Sales analytics
GET  /api/admin/orders/      - Manage orders
GET  /api/admin/activities/  - Activity logs
```

## 🎨 Key Features Implementation

### Profile Management (23 Modular Components)
- Split into atomic components following single responsibility principle
- Redux integration for centralized state management
- Async thunks for API calls
- Auto-clearing success/error messages

### Search Functionality
- Real-time filtering as user types
- Searches across all product categories
- Modal dialog interface
- Optimized with useMemo and useEffect

### Cart System
- Redux-based cart state
- Persistent storage with localStorage
- Real-time quantity updates
- Animated cart badge

### Authentication Flow
- JWT token-based authentication
- Protected routes
- Automatic token refresh
- Secure localStorage management

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 About Me

<h3 align="left">Hi 👋, I'm Ishfaq Ahmad</h3>
<p align="left">A passionate Full Stack Web Developer from Pakistan</p>

- 🌱 Currently learning **DSA, Advanced React Patterns, System Design**
- 📫 Reach me at **ishfaqahmadafridi380@gmail.com**

### Connect with me:
<p align="left">
<a href="https://dev.to/ishfaqahmadafridi" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="ishfaqahmadafridi" height="30" width="40" /></a>
<a href="https://linkedin.com/in/ishfaq ahmad" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ishfaq ahmad" height="30" width="40" /></a>
<a href="https://fb.com/ishfaq ahmad" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="ishfaq ahmad" height="30" width="40" /></a>
<a href="https://instagram.com/afridi.ishfaqahmad" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="afridi.ishfaqahmad" height="30" width="40" /></a>
</p>

### Languages and Tools:
<p align="left">
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/></a>
<a href="https://redux.js.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/></a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/></a>
<a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://vitejs.dev/logo.svg" alt="vite" width="40" height="40"/></a>
<a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"><img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" width="40" height="40"/></a>
<a href="https://www.python.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a>
<a href="https://eslint.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg" alt="eslint" width="40" height="40"/></a>
</p>

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React community for amazing tools and libraries
- Django REST Framework for robust API development
- Tailwind CSS for utility-first styling
- All contributors and supporters

---

<div align="center">
  <p>Made with ❤️ by Ishfaq Ahmad</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
