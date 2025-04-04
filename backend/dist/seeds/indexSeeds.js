"use strict";
//backend/seeds/indexSeeds.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Charge .env
const db_1 = __importDefault(require("../config/db"));
const treeSeeds_1 = __importDefault(require("./treeSeeds"));
const runSeeds = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_1.default)(); // Connexion à MongoDB
        console.log("📡 Connected to MongoDB");
        yield (0, treeSeeds_1.default)(); // Exécute les seeds pour les arbres
        console.log("🌱 Seeds executed successfully");
    }
    catch (error) {
        console.error("❌ Error executing seeds:", error);
    }
    finally {
        process.exit(0); // Quitte le processus Node.js
    }
});
runSeeds();
