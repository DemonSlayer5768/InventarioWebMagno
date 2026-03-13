// Define la interfaz Routes
interface Routes {
  dashboard: string;
  login: string;
}

// Exporta la función useRoutes que devuelve un objeto de tipo Routes
export const useRoutes = (): Routes => {
  return {
    login: "/",
    dashboard: "/dashboard",
  };
};
