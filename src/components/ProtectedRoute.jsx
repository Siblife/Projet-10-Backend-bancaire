import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Ce composant protège une route :
// - Si l'utilisateur est connecté, il affiche la page demandée
// - Sinon, il redirige vers /login
export default function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
}
