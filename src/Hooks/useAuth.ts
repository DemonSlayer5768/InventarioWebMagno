// import { useState, useEffect } from "react";
// import { useRouter } from "next/router"; // Asegúrate de tener Next.js instalado para usar useRouter

// export function useAuth() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter(); // Inicializa el router

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoading(false);
//   }, []);

//   async function login(email: string, password: string) {
//     try {
//       const response = await fetch("/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error);

//       setUser(data);
//       localStorage.setItem("user", JSON.stringify(data));

//       // 🔹 Redirigir a la página principal
//       router.push("/users");

//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }

//   function logout() {
//     setUser(null);
//     localStorage.removeItem("user");
//   }

//   return { user, login, logout, loading };
// }
