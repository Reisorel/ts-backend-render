"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
// Schéma de l'arbre
var treeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    species: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    location: { type: String, required: true },
    plantedDate: { type: Date, required: true },
    lastPrunedDate: { type: Date, required: true },
    healthStatus: { type: String, required: true },
    notes: { type: String, required: false },
    imageUrl: { type: String, required: false }
});
// Modèle de l'arbre
var Tree = mongoose_1.default.model('Tree', treeSchema);
// Exportation du modèle
exports.default = Tree;
