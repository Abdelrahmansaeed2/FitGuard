require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const errorHandler = require('./src/middleware/errorHandler');

const requiredEnv = ['JWT_SECRET', 'JWT_REFRESH_SECRET'];
const missingEnv = requiredEnv.filter(key => !process.env[key]);
if (missingEnv.length > 0) {
  console.error(`[Environment Error]: Missing critical variables: ${missingEnv.join(', ')}`);
  process.exit(1);
}

if (!process.env.OPENAI_API_KEY) {
  console.warn('[Warning]: OPENAI_API_KEY is not defined. AI progressive sports challenges and recovery plans generation will fail.');
}

connectDB();

const app = express();

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    const isLocalhost = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
    const isFrontendUrl = origin === process.env.FRONTEND_URL;

    if (isLocalhost || isFrontendUrl) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS policy'));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const injuryRoutes = require('./src/routes/injuryRoutes');
const challengeRoutes = require('./src/routes/challengeRoutes');
const recoveryRoutes = require('./src/routes/recoveryRoutes');
const notificationRoutes = require('./src/routes/notificationRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/injuries', injuryRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/recovery', recoveryRoutes);
app.use('/api/notifications', notificationRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    data: { uptime: process.uptime() },
    message: 'FitGuard Backend is healthy and running'
  });
});

app.use((req, res, next) => {
  const error = new Error(`Cannot find endpoint ${req.method} ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[Server Started]: FitGuard server running on port ${PORT}`);
});
