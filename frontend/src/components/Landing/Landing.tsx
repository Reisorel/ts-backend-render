import { useState, useEffect } from "react";
import type { JSX } from "react";
// const API_BASE_URL = 'http://localhost:3000';
// const API_BASE_URL = 'https://ts-backend-render.onrender.com';
import API_BASE_URL from '../../../config/api';


import "./Landing.css";

type Tree = {
  _id: string;
  name: string;
  species: string;
};

type TreesResponse = Tree[]; // <--- juste un tableau

export default function Landing(): JSX.Element {
  const [trees, setTrees] = useState<Tree[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrees = async () => {
      console.log("🚀 [fetchTrees] Lancement du fetch...");

      const url = `${API_BASE_URL}/api/admin/trees`;
      console.log("🌍 [fetchTrees] URL appelée :", url);

      try {
        const response = await fetch(url);

        console.log("📬 [fetchTrees] Réponse reçue :", response);

        if (!response.ok) {
          console.error("❌ [fetchTrees] Réponse non OK :", response.status, response.statusText);
          throw new Error(`Erreur HTTP ${response.status}`);
        }

        const data: TreesResponse = await response.json();
        console.log("📦 [fetchTrees] Données JSON récupérées :", data);

        if (Array.isArray(data)) {
          setTrees(data);
          console.log("🌲 [fetchTrees] Arbres mis à jour :", data.length);
        } else {
          console.warn("⚠️ [fetchTrees] Données reçues mais non conformes (pas un tableau)");
          setTrees([]);
        }

      } catch (err) {
        const message = err instanceof Error ? err.message : "Erreur inconnue";
        console.error("🔥 [fetchTrees] Erreur attrapée :", message);
        setError(message);
      }
    };

    fetchTrees();
  }, []);



  return (
    <div className="landing-container">
      <h1 className="title">This is the landing !</h1>

      <p>Nombre d'arbre : {trees.length}</p>

      <h1>Liste d'arbre :</h1>
      <div>
        {error && <p className="error">{error}</p>}
        {!error && trees.length === 0 && <p>Aucun arbre trouvé.</p>}
        {trees.map((tree) => (
          <div key={tree._id} className="tree">
            <h2>{tree.name}</h2>
            <p>Espèce : {tree.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
