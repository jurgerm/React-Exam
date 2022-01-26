//import process from "process";
const { REACT_APP_BASE_URL } = process.env;

//const AUTH_URL = process.env.REACT_APP_BASE_URL+"/v1/auth/";
//const AUTH_URL = "https://autumn-delicate-wilderness.glitch.me/v1/auth";
//const AUTH_URL = `${process.env.REACT_APP_BASE_URL}/v1/auth/`;
console.log(REACT_APP_BASE_URL);


export class Auth {
    static async register(email, password) {
        const res = await fetch(`${REACT_APP_BASE_URL}/v1/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        console.log(res);
        return res.json();

    }

    static async login(email, password) {
        const res = await fetch(`${REACT_APP_BASE_URL}/v1/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        return res.json();
    }
}
