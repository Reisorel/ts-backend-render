"use strict";
//backend/seeds/indexSeeds.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Charge .env
const db_1 = __importDefault(require("../config/db"));
const treeSeeds_1 = __importDefault(require("./treeSeeds"));
const runSeeds = async () => {
    try {
        await (0, db_1.default)(); // Connexion à MongoDB
        console.log("📡 Connected to MongoDB");
        await (0, treeSeeds_1.default)(); // Exécute les seeds pour les arbres
        console.log("🌱 Seeds executed successfully");
    }
    catch (error) {
        console.error("❌ Error executing seeds:", error);
    }
    finally {
        process.exit(0); // Quitte le processus Node.js
    }
};
runSeeds();
