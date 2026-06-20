# FitGuard Project

FitGuard is an AI-powered sports training and rehabilitation platform. It utilizes AI (via the Grok xAI API) to safely generate progressive 30-day training challenges and phased return-to-play recovery protocols based on athlete profiles and injury history.

---

## Architecture Overview

This project is fully Dockerized and structured into three **isolated** containers to separate concerns effectively:

1. 💻 **Frontend (`fitguard_frontend`)**: React application (Vite, TailwindCSS). Exposes the user interface on port **3000**.
2. ⚙️ **Backend (`fitguard_backend`)**: Node.js API server (Express.js). Exposes the API on port **5001**.
3. 🗄️ **Database (`fitguard_database`)**: MongoDB server. Stores persistent data securely in an isolated volume.

---

## Features

- **Authentication System**: Secure JWT token-based auth with automatic refresh token rotation.
- **Athlete Profiling**: Tracks sports type, age, height, and weight for tailored experiences.
- **Injury Logging**: Full injury tracking with automated muscle group frequency patterns aggregation.
- **AI-Powered Challenges**: Generates safe 30-day sports challenges using athlete profiles and past injuries to strengthen weaknesses and avoid re-injury.
- **AI Recovery Protocols**: Creates structured, phased return-to-play protocols tailored to specific injury logs and the user's broader medical history.

---

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) must be installed and running on your machine.
- No local installations of Node.js or MongoDB are required.

---

## How to Run the Project (Instructor Guide)

1. Open a terminal in the root directory of the project (where this README is located).
2. Run the following command to build the images and start all three isolated containers:

```bash
docker compose up --build
```

*(Note: The first run might take a few minutes as it downloads the necessary Docker images and installs `npm` dependencies inside the containers).*

3. Once the logs indicate that the servers have started, you can access the application at the following URLs:

- **Frontend (React UI)**: [http://localhost:3000](http://localhost:3000)
- **Backend API (Node.js)**: [http://localhost:5001](http://localhost:5001)

---

## How to Stop the Project

To stop the containers gracefully, you can press `Ctrl + C` in the terminal where they are running, or open a new terminal in the same directory and run:

```bash
docker compose down
```

---

## Deep Dive: Directory Structure

### 1. `fitguard-core/` (Backend)
- Built with **Node.js, Express, Mongoose**.
- Handles all business logic, AI prompt generation (communicating with Grok API), and authentication.
- Uses `bcryptjs` for hashing passwords and `express-validator` for strict input validation.

### 2. `fitguard-web/` (Frontend)
- Built with **React 19, Vite, and TailwindCSS**.
- Uses `zustand` for state management and `react-hook-form` with `zod` for form validation.
- Responsive design tailored for athletes and trainers.

### 3. `docker-compose.yml` (Orchestrator)
- Maps frontend port 3000 and backend port 5001 to your host machine.
- Manages the internal `fitguard-2_default` network so containers can communicate safely (e.g. backend reaches database via `mongodb://database:27017`).
- Sets up a Docker Volume (`mongo_data`) so database records are not lost when containers are stopped.
