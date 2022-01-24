import process from "process";

const AUTH_URL = process.env.REACT_APP_BASE_URL+"/auth";


export class Auth {
    static async register(username, password) {
        const res = await fetch(`${AUTH_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        return res.json();
    }

    static async login(username, password) {
        const res = await fetch(`${AUTH_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        return res.json();
    }
}
