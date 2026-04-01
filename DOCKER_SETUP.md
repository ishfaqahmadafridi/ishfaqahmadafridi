# Docker Setup Guide

## Project Structure
```
ishfaqahmadafridi/
├── Frontend/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── [all frontend files]
├── backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── requirements.txt
│   └── [all backend files]
├── docker-compose.yml
├── .env.docker
└── DOCKER_SETUP.md (this file)
```

## Prerequisites
- Docker (version 20.10+)
- Docker Compose (version 1.29+)
- No need to install Node.js or Python locally

## Quick Start

### 1. Build and Run All Services
```bash
docker-compose up --build
```

This command will:
- Build the Frontend image (React + Vite)
- Build the Backend image (Django + REST API)
- Start both services
- Run database migrations automatically

### 2. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000/api
- **Django Admin**: http://localhost:8000/admin

### 3. Useful Commands

#### View logs
```bash
docker-compose logs -f
# Frontend logs only
docker-compose logs -f frontend
# Backend logs only
docker-compose logs -f backend
```

#### Stop services
```bash
docker-compose down
```

#### Rebuild images
```bash
docker-compose build --no-cache
```

#### Run migrations
```bash
docker-compose exec backend python manage.py migrate
```

#### Create superuser
```bash
docker-compose exec backend python manage.py createsuperuser
```

#### Run tests
```bash
docker-compose exec backend python manage.py test
docker-compose exec frontend npm run test
```

#### Shell access
```bash
# Access backend shell
docker-compose exec backend bash

# Access frontend container
docker-compose exec frontend sh
```

## Services Overview

### Frontend Service
- **Image**: Node.js 18-Alpine
- **Port**: 5173
- **Build Tool**: Vite
- **Framework**: React + TypeScript
- **Volumes**: 
  - Source code mounted for live reload
  - node_modules isolated
- **Environment**: 
  - VITE_API_URL points to backend container

### Backend Service
- **Image**: Python 3.11-Slim
- **Port**: 8000
- **Framework**: Django + Django REST Framework
- **Database**: SQLite (development)
- **Volumes**:
  - Source code mounted
  - Database file persisted
- **Features**:
  - Automatic migrations on startup
  - CORS enabled for frontend
  - JWT authentication

## Networking
- Services communicate via internal network `ecommerce-network`
- Frontend can reach backend as `http://backend:8000`
- Backend allows requests from frontend automatically

## Environment Variables

### Development (.env.docker)
```
DEBUG=True
SECRET_KEY=your-secret-key-change-in-production
ALLOWED_HOSTS=localhost,127.0.0.1,backend,0.0.0.0
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000,http://frontend:5173
VITE_API_URL=http://backend:8000
```

### Production
- Keep SECRET_KEY secure and strong
- Set DEBUG=False
- Update ALLOWED_HOSTS with your domain
- Use PostgreSQL instead of SQLite
- Use environment-specific .env files

## Troubleshooting

### Port Already in Use
```bash
# Check what's using the ports
netstat -ano | findstr :5173
netstat -ano | findstr :8000

# Or use different ports in docker-compose.yml
```

### Database Issues
```bash
# Reset database
docker-compose down -v
docker-compose up --build
```

### Frontend Not Loading
```bash
# Check frontend logs
docker-compose logs frontend

# Rebuild frontend
docker-compose build --no-cache frontend
```

### Backend API Errors
```bash
# Check backend logs
docker-compose logs backend

# Check migrations
docker-compose exec backend python manage.py showmigrations
```

## Deployment

### Docker Hub
```bash
docker build -t your-username/ecommerce-frontend:1.0 ./Frontend
docker build -t your-username/ecommerce-backend:1.0 ./backend
docker push your-username/ecommerce-frontend:1.0
docker push your-username/ecommerce-backend:1.0
```

### Cloud Deployment (AWS, GCP, Azure)
- Use container orchestration services
- Update docker-compose.yml for production
- Use managed services instead of SQLite
- Set up proper environment variables

## Security Checklist
- [ ] Change SECRET_KEY in production
- [ ] Set DEBUG=False in production
- [ ] Use PostgreSQL for production
- [ ] Set ALLOWED_HOSTS correctly
- [ ] Use HTTPS in production
- [ ] Keep images updated
- [ ] Scan images for vulnerabilities: `docker scan image_name`

## Next Steps
1. Test the setup: `docker-compose up`
2. Create Django superuser for admin panel
3. Add seed data if needed
4. Configure environment variables for production
5. Set up CI/CD pipeline with Docker

## Support
For issues or questions, check:
- Docker logs: `docker-compose logs`
- Django error logs in the backend container
- Browser console for frontend errors
