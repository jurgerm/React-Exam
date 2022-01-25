import process from "process";

const API_URL = `${process.env.REACT_APP_BASE_URL}/v1/content/skills/`;

export class SkillsApi {

    static async all(token) {
        const res = await fetch(
            API_URL,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        return res.json();
    }

    static async add(skill, token) {
        if (!skill) throw new Error("No argument");

        const res = await fetch(
            API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(skill),
        });

        return res.json();
    }
}
