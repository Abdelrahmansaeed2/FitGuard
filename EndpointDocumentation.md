# FitGuard API Documentation

Base URL (dev): http://localhost:5000
All protected routes require: Authorization: Bearer <token>
All responses follow: { success, data, message }

---

## Auth

### POST /api/auth/register
Body: { name, email, password, sport, age, weight, height }
Response: { token, refreshToken, user }

### POST /api/auth/login
Body: { email, password }
Response: { token, refreshToken, user }

### POST /api/auth/logout
Protected: No
Body: { refreshToken }

### POST /api/auth/refresh-token
Body: { refreshToken }
Response: { token }

---

## Profile

### GET /api/user/profile
Protected: Yes
Response: { user object }

### PUT /api/user/profile
Protected: Yes
Body: any of { name, sport, age, weight, height }
Response: { updated user }

---

## Injuries

### POST /api/injuries
Protected: Yes
Body: { muscleGroup, injuryType, severity, dateOccurred, notes }
Severity values: "mild" | "moderate" | "severe"

### GET /api/injuries
Protected: Yes
Response: { injuries[] } — all injuries, sorted newest first

### GET /api/injuries/:id
Protected: Yes

### PUT /api/injuries/:id
Protected: Yes
Body: any injury fields + recoveryStatus ("active" | "recovered")

### DELETE /api/injuries/:id
Protected: Yes

### GET /api/injuries/patterns
Protected: Yes
Response: [{ muscleGroup, count, severities[] }] sorted by count desc
— used by frontend for the recurring injury dashboard

---

## Challenges

### POST /api/challenges/generate
Protected: Yes
Body: { difficulty }
Difficulty values: "beginner" | "intermediate" | "advanced"
— AI generates 30-day plan using full injury history as context
Response: { challenge with days[] }

### GET /api/challenges
Protected: Yes
Response: { challenges[] }

### GET /api/challenges/active
Protected: Yes
Response: { challenge } or null

### PUT /api/challenges/:id/day/:dayNumber/complete
Protected: Yes
Body: none
— marks that day as completed, sets completedAt

### PUT /api/challenges/:id/abandon
Protected: Yes

---

## Recovery

### POST /api/recovery/generate
Protected: Yes
Body: { injuryLogId }
— AI generates phased recovery protocol for that injury
— uses full injury history as context
Response: { protocol with phases[] }

### GET /api/recovery
Protected: Yes
Response: { protocols[] }

### GET /api/recovery/active
Protected: Yes
Response: { protocol } or null

### PUT /api/recovery/:id/phase/:phaseNumber/complete
Protected: Yes
— marks that phase as completed, auto-advances currentPhase

---

## Notifications

### GET /api/notifications
Protected: Yes
Response: { notifications[] } sorted newest first

### PUT /api/notifications/:id/read
Protected: Yes

### PUT /api/notifications/read-all
Protected: Yes

### DELETE /api/notifications/:id
Protected: Yes

---

## Exercises

### POST /api/exercises
Protected: Yes
Body: { title, description, sets, reps, duration, notes }
Response: { success, data: { exercise }, message }

### GET /api/exercises
Protected: Yes
Response: { success, data: [ exercises ], total, message }

### GET /api/exercises/:id
Protected: Yes
Response: { success, data: { exercise }, message }

### PUT /api/exercises/:id
Protected: Yes
Body: any of { title, description, sets, reps, duration, completed, notes }
Response: { success, data: { exercise }, message }

### DELETE /api/exercises/:id
Protected: Yes
Response: { success, data: {}, message }