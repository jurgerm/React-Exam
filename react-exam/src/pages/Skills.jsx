import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Skill} from "../components/Skill";
import {useAuth} from "../hooks/useAuth";
import {SkillsApi} from "../services/skills-api";

export const Skills = () => {
    const [skills, setSkills] = useState();
    const {state} = useLocation();
    const {token} = useAuth();

    const fetchSkills = async () => {
        // fetch skills from api
        const p = await SkillsApi.all(token);

        // save fetched skills to local state
        setSkills(p);
    };

    const add = (skill) => {
        setSkills((prevState) => [...prevState, skill]);
    };


    const updateSkill = (id, update) => {
        setSkills((prevState) =>
            prevState.map((skill) => {
                if (skill._id === id) return {...skill, ...update};

                return skill;
            })
        );
    };

    // fetch skills list on component load
    useEffect(() => {
        fetchSkills();
    }, []);

    // check if skill obj was added, if yes, save it to the array
    useEffect(() => {
        if (!state) return;

        if (state.added) {
            add(state.added);
        }
    }, [state]);

    if (!skills) {
        return <span>loading...</span>;
    }

    return skills.map((skill) => (
        <Skill
            key={skill._id}
            skillId={skill._id}
            skill={skill}
                        onUpdate={(update) => {
                updateSkill(skill._id, update);
            }}
        />
    ));
};
