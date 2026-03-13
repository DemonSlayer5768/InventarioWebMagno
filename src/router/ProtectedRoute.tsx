import { Navigate } from "react-router-dom"
import type { ReactNode } from "react"

export default function ProtectedRoute({ children }: { children: ReactNode }) {

  const auth = localStorage.getItem("auth")

  if (!auth) {
    return <Navigate to="/" />
  }

  return children
}