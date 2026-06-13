import { useContext, createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";

interface AuthContextType {
    user: any;
    setUser: Dispatch<SetStateAction<any>>;
    loginAction: () => Promise<void>;
    logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any>(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);


    const loginAction = async () => {

        try {
            const response = await fetch('/auth/googleAuthURL', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            

            const data = await response.json();
            if (data.google_auth_url) {
                window.location.href = data.google_auth_url;
            }
        } catch (error) {
            console.error(error);
        }
    };

    const logOut = async () => {
        console.log("AuthProvider.js :: Logged out eee");

        fetch('/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then((response) => {
                console.log("response from /auth/logout");
                if (response.ok) {
                    console.log("AuthProvider.js :: Logged out");
                    localStorage.removeItem('user');
                    setUser(null);
                    window.location.replace('/');
                }
            })
            .catch((error) => {
                console.log("Authrovider ERROR", error);
            });
    };

    return (
        <AuthContext.Provider value={{ user, setUser, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
