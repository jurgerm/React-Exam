import {useState} from "react";
import {AuthContext} from "../hooks/useAuth";
import {Auth} from "../services/auth";

// extract email from jwt
const getEmail = (token) => {
    let email = null;

    if (token) {
        const tokenPayload = token.split(".")[1];
        const decodedPayload = atob(tokenPayload);
        const parsedPayload = JSON.parse(decodedPayload);
        email = parsedPayload.email;
    }

    return email
}

export const AuthProvider = ({children}) => {
    const token = sessionStorage.getItem("token");

    const [state, setState] = useState({
        token,
        email: getEmail(token),
        error: null,
    });


    const login = async (user, password) => {
        const res = await Auth.login(user, password);

        if (res.error) {
            console.error(res.error);

            setState({error: res.error, token: null});

            return {error: res.error};
        }

        setState(({error: null, token: res.token, email: getEmail(res.token)}));
        sessionStorage.setItem("token", res.token);

        return {token: res.token};
    };

    const logout = () => {
        setState({
            token: null,
            error: null,
            email: null
        })

        sessionStorage.removeItem("token");
    };

    const value = {...state, login, logout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
