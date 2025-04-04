"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var db_1 = require("./config/db");
var indexRoutes_1 = require("./routes/indexRoutes");
dotenv_1.default.config(); // Charge .env
var app = (0, express_1.default)(); // Crée une application Express
(0, db_1.default)(); // Connexion à MongoDB
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ⬇️ Route API admin centralisée ici
app.use('/api/admin', indexRoutes_1.default);
// Route catch-all corrigée
app.get("/", function (req, res) {
    res.send("Bienvenue sur le serveur backend 🏄🏻‍♂️");
});
// Lancement du serveur
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("\u2705 Server is running on http://localhost:".concat(PORT));
});
