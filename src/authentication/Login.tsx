import {useAuth} from "./AuthProvider";

import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function Login() {

    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        
        if (auth.user) {
            navigate('/', { replace: true });
            return;
        }

        const params = new URLSearchParams(window.location.search)
        const code = params.get("code")

        console.log("Login.js :: code from URL: ", code);

        if (!code) {
            return;
        }

        fetch('/auth/authorization', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: code
            })
        }).then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(`Error: ${response.status}`);
            }
        })
            .then((data) => {
                auth.setUser(data.user_info);

                console.log("Login.js :: user info from /auth/authorization: ", data.user_info);

                navigate('/', {replace: true});

            })
            .catch((error) => {
                console.error("Error:", error.message);
            });

    }, []);

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="row w-100 m-0">
                    <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                        <div className="d-flex  mx-auto">
                            <button className="nebula-button" onClick={() => auth.loginAction()}>

                                <svg className="google-icon" viewBox="0 0 48 48">
                                    <path fill="#EA4335"
                                          d="M24 9.5c3.54 0 6.64 1.22 9.11 3.22l6.78-6.78C35.87 2.39 30.39 0 24 0 14.6 0 6.45 5.38 2.56 13.22l7.9 6.13C12.36 13.01 17.74 9.5 24 9.5z"/>
                                    <path fill="#4285F4"
                                          d="M46.5 24c0-1.64-.15-3.22-.43-4.75H24v9h12.7c-.55 2.95-2.2 5.45-4.7 7.11l7.2 5.6C43.78 36.69 46.5 30.91 46.5 24z"/>
                                    <path fill="#FBBC05"
                                          d="M10.46 28.35c-.48-1.45-.76-2.98-.76-4.35s.28-2.9.76-4.35l-7.9-6.13C.92 16.65 0 20.21 0 24s.92 7.35 2.56 10.48l7.9-6.13z"/>
                                    <path fill="#34A853"
                                          d="M24 48c6.39 0 11.77-2.11 15.7-5.74l-7.2-5.6c-2 1.35-4.56 2.14-8.5 2.14-6.26 0-11.64-3.51-13.54-8.35l-7.9 6.13C6.45 42.62 14.6 48 24 48z"/>
                                </svg>

                                <span>A quiet place to arrive</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;