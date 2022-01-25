import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Skill } from "../components/Skill";
import { useAuth } from "../hooks/useAuth";
import { SkillsApi } from "../services/skills-api";
import { useMessagesContext } from "../hooks/MessagesContext";

export const Skills = () => {
    const [skills, setSkills] = useState();
    const { state } = useLocation();
    const { token } = useAuth();

    const { addMessage, removeMessage } = useMessagesContext();

    const fetchSkills = async () => {

        addMessage("Loading list of skils");
        // fetch skills from api
        try {
            const visiskilsai = await SkillsApi.all(token);

            if (visiskilsai.error)
            {
                addMessage(`ERROR: ${visiskilsai.error}`);
                setSkills([]);
                return;
            }
            // save fetched skills to local state
            setSkills(visiskilsai);

            removeMessage();

            console.log({ visiskilsai })
            if (!visiskilsai || visiskilsai.length === 0) {
                addMessage("There are no skills in list.");
            }
        }
        catch (err) {
            console.log({err});
            addMessage(`ERROR: ${err}`);
            setSkills([]);
        }
    };

    // fetch skills list on component load
    useEffect(() => {
        fetchSkills();
    }, []);

    // check if skill obj was added, if yes, save it to the array
    // useEffect(() => {
    //     if (!state) return;

    //     if (state.added) {
    //         add(state.added);
    //     }
    // }, [state]);

    if (!skills) {
        return <span>aaaaa</span>;
    }
    console.log(skills);

    return skills.map((skill) => (
        <Skill
            key={skill.id}
            skillId={skill.id}
            skill={skill}
        />
    ));
};