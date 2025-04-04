//backend/seeds/indexSeeds.ts

import dotenv from 'dotenv';
dotenv.config(); // Charge .env
import connectDB from '../config/db';

import treeSeeds from './treeSeeds';

const runSeeds = async (): Promise<void> => {
  try {
    await connectDB(); // Connexion à MongoDB
    console.log("📡 Connected to MongoDB");

    await treeSeeds(); // Exécute les seeds pour les arbres

    console.log("🌱 Seeds executed successfully");
  } catch (error) {
    console.error("❌ Error executing seeds:", error);
  } finally {
    process.exit(0); // Quitte le processus Node.js
  }
};

runSeeds();
