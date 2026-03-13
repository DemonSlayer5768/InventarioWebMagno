"use client";

import type React from "react";
import { useState } from "react";
import { CircleUser, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// import { useRoutes } from "@/Hooks/useRoutes";
// import { useAuth } from "@/Hooks/useAuth";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const routes = useRoutes();
  // const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor, llena todos los datos");
      return;
    }

    // try {
    //   await login(email, password);
    // } catch (error: unknown) {
    //   if (error instanceof Error) {
    //     setError(error.message || "Error al iniciar sesión");
    //   } else {
    //     setError("Error al iniciar sesión");
    //   }
    // }
  };

  return (
    <div className="h-full w-full">
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-xl  bg-white">
          <div className="p-8">
            <div className="flex justify-center">
              <CircleUser className="text-gray-800 text-7xl" />
            </div>

            <h2 className="mb-6 text-center text-3xl p-4 font-bold text-gray-800">
              Iniciar Sesión
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-800"
                >
                  Correo
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="Ingresa tu Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 w-full h-12 rounded-md cursor-pointer text-gray-900 "
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-800"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 w-full h-12 rounded-md  cursor-pointer text-gray-900 "
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium  text-blue-600 hover:text-blue-500"
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              {error && (
                <p className="text-center text-sm text-red-500">{error}</p>
              )}
              <Button
                type="submit"
                variant="default"
                className="w-full h-10 rounded-md "
              >
                Iniciar Sesión
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
