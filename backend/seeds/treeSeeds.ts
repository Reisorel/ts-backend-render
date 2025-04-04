// backend /seeds/treeSeeds.ts
import Tree from "../models/tree";

const treeSeeds = async (): Promise<void> => {
  await Tree.deleteMany(); // Supprime tous les projets existants

  const trees = [
    {
      name: "Chêne",
      species: "Quercus robur",
      age: 50,
      height: 20,
      location: "Parc central",
      plantedDate: new Date("1973-04-15"),
      lastPrunedDate: new Date("2022-06-10"),
      healthStatus: "Bon",
      notes: "Aucun problème de santé",
      imageUrl: "https://example.com/images/oak.jpg",
    },
    {
      name: "Érable",
      species: "Acer saccharum",
      age: 30,
      height: 15,
      location: "Jardin botanique",
      plantedDate: new Date("1993-08-20"),
      lastPrunedDate: new Date("2021-11-05"),
      healthStatus: "Moyen",
      notes: "Besoin d'une taille",
      imageUrl: "https://example.com/images/maple.jpg",
    },
    {
      name: "Pin",
      species: "Pinus sylvestris",
      age: 20,
      height: 10,
      location: "Forêt de la ville",
      plantedDate: new Date("2003-03-12"),
      lastPrunedDate: new Date("2020-09-15"),
      healthStatus: "Bon",
      notes: "Aucun problème de santé",
      imageUrl: "https://example.com/images/pine.jpg",
    },
    {
      name: "Saule pleureur",
      species: "Salix babylonica",
      age: 15,
      height: 8,
      location: "Bord de la rivière",
      plantedDate: new Date("2008-07-25"),
      lastPrunedDate: new Date("2022-04-01"),
      healthStatus: "Mauvais",
      notes: "Problèmes d'insectes",
      imageUrl: "https://example.com/images/weeping-willow.jpg",
    },
  ];

  await Tree.insertMany(trees);
  console.log(`🌳 ${trees.length} trees added sucessfully !`);
};

export default treeSeeds;
