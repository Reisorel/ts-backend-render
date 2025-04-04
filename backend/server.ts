import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import adminRoutes from './routes/indexRoutes';

dotenv.config(); // Charge .env

const app: Express = express(); // Crée une application Express
connectDB(); // Connexion à MongoDB

// Middleware
app.use(cors());
app.use(express.json());

// ⬇️ Route API admin centralisée ici
app.use('/api/admin', adminRoutes);

// Route catch-all corrigée
app.get("/", (req: Request, res: Response): void => {
  res.send("Bienvenue sur le serveur backend 🏄🏻‍♂️");
});

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
