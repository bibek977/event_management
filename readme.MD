# Event Management Calendar App

A calendar-based event management application with a **Django backend** and a **JavaScript frontend**. Users sign in with a custom authentication system and manage events through a calendar interface.

## Features

> Replace this list with the features you actually built, then delete this note.

- Custom user authentication (`users` app)
- [Create, edit, and delete events]
- [Calendar view of events]
- [Any other feature: reminders, categories, user-specific events]

## Tech Stack

| Layer | Tools |
|---|---|
| Backend | Python, Django |
| Frontend | JavaScript, Node.js ([framework, e.g. React + Vite]) |
| Authentication | Custom user model (Django) |
| Database | [SQLite / PostgreSQL] |

## Project Structure

```
event_management/
├── backend/     # Django project (API, authentication, database models)
├── frontend/    # JavaScript frontend
└── readme.MD
```

## Getting Started

### Requirements

- Python 3.x
- Node.js and npm

### 1. Clone the repository

```bash
git clone https://github.com/bibek977/event_management.git
cd event_management
```

### 2. Backend setup

```bash
cd backend
python -m venv venv
```

Activate the virtual environment:

```bash
# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate
```

Install the requirements:

```bash
pip install -r requirements.txt
```

The project uses a custom user model, so create the migrations for the `users` app first, then migrate:

```bash
python manage.py makemigrations users
python manage.py migrate
```

### 3. Frontend setup

```bash
cd ../frontend
npm install
```

## Running the Project

Start the backend:

```bash
cd backend
python manage.py runserver
```

Start the frontend (in a second terminal):

```bash
cd frontend
npm run dev
```

## Author

Bibek Bhattarai | [GitHub](https://github.com/bibek977) | [LinkedIn](https://www.linkedin.com/in/bibek-bhattarai-6914351a2)
