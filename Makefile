.PHONY: help build up down logs shell-backend shell-frontend fresh migrate superuser test clean

help:
	@echo "E-Commerce Docker Commands"
	@echo ""
	@echo "Usage: make [command]"
	@echo ""
	@echo "Commands:"
	@echo "  make up              - Build and start all services"
	@echo "  make down            - Stop all services"
	@echo "  make build           - Build images only"
	@echo "  make logs            - View logs"
	@echo "  make logs-backend    - View backend logs only"
	@echo "  make logs-frontend   - View frontend logs only"
	@echo "  make shell-backend   - Access backend shell"
	@echo "  make shell-frontend  - Access frontend shell"
	@echo "  make fresh           - Fresh build and start (removes volumes)"
	@echo "  make migrate         - Run database migrations"
	@echo "  make superuser       - Create Django superuser"
	@echo "  make test            - Run all tests"
	@echo "  make test-backend    - Run backend tests"
	@echo "  make test-frontend   - Run frontend tests"
	@echo "  make clean           - Remove containers and images"
	@echo "  make status          - Show service status"
	@echo "  make ps              - List running containers"

up:
	docker-compose up --build

down:
	docker-compose down

build:
	docker-compose build

logs:
	docker-compose logs -f

logs-backend:
	docker-compose logs -f backend

logs-frontend:
	docker-compose logs -f frontend

shell-backend:
	docker-compose exec backend bash

shell-frontend:
	docker-compose exec frontend sh

fresh:
	docker-compose down -v
	docker-compose build --no-cache
	docker-compose up

migrate:
	docker-compose exec backend python manage.py migrate

superuser:
	docker-compose exec backend python manage.py createsuperuser

test:
	@echo "Running backend tests..."
	docker-compose exec backend python manage.py test
	@echo ""
	@echo "Running frontend tests..."
	docker-compose exec frontend npm run test

test-backend:
	docker-compose exec backend python manage.py test

test-frontend:
	docker-compose exec frontend npm run test

clean:
	docker-compose down -v
	docker system prune -f

status:
	docker-compose ps

ps:
	docker-compose ps

restart:
	docker-compose restart

restart-backend:
	docker-compose restart backend

restart-frontend:
	docker-compose restart frontend
