import { Outlet } from 'react-router-dom';
import Login from './Login';
import { useAuth } from "./AuthProvider";


const ProtectedRoute = () => {
    const { user } = useAuth()
    console.log("ProtectedRoute.tsx :: user from useAuth(): ", user);

    if (!user) {
        return <Login />;
    }

    return <Outlet />;
};

export default ProtectedRoute;