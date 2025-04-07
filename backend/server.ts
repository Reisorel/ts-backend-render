import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import adminRoutes from './routes/indexRoutes';
import path from "path";

dotenv.config(); // Charge .env

const app: Express = express(); // Crée une application Express
connectDB(); // Connexion à MongoDB

// Middleware
app.use(cors());
app.use(express.json());


// ⬇️ Route API admin centralisée ici
app.use('/api/admin', adminRoutes);

// Serveur les fichiers frontend après les routes d'API
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Catch-all pour TOUTES les autres routes non-API et frontend
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port http://localhost:${PORT}`);
});
