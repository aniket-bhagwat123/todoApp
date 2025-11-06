import express from 'express';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());

// routes
app.use("/api", authRoutes);

export default app;