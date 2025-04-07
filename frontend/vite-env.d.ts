/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL_DEV: string;
  readonly VITE_API_URL_PROD: string;
  // Ajoute d'autres variables ici si besoin
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
