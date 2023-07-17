import React, { useState } from 'react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = () => {
        setIsLogin(true);
    }

    const handleLogout = () => {
        setIsLogin(false);
    }

    return (
        <>
            {!isLogin ? 
                <div>
                    <h1>Please Log in</h1>
                    <button onClick={handleLogin}>Login</button>
                </div>
             :
                <div>
                    <p>Welcome</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            }
        </>
    )
}

export default Login;
