"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
dotenv_1.default.config(); // Charge .env
const app = (0, express_1.default)(); // Crée une application Express
(0, db_1.default)(); // Connexion à MongoDB
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ⬇️ Route API admin centralisée ici
app.use('/api/admin', indexRoutes_1.default);
// Route catch-all corrigée
app.get("/", (req, res) => {
    res.send("Bienvenue sur le serveur backend 🏄🏻‍♂️");
});
// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
