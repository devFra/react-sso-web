import { Navigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
    const { user, isLoading } = useAuthentication();
    if ( isLoading ) return null;

    if (!user) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return children;
};