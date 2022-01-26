import { useEffect, useState } from "react";
import { Skill } from "../components/Skill";
import { useAuth } from "../hooks/useAuth";
import { SkillsApi } from "../services/skills-api";
import { useMessagesContext } from "../hooks/MessagesContext";

export const Skills = () => {
    const [skills, setSkills] = useState();
    const { token } = useAuth();

    const { addMessage, removeMessage } = useMessagesContext();

    const fetchSkills = async () => {

        addMessage("Loading list of skils");
        // fetch skills from api
        try {
            const allSkills = await SkillsApi.all(token);

            if (allSkills.error)
            {
                addMessage(`ERROR: ${allSkills.error}`);
                setSkills([]);
                return;
            }
            // save fetched skills to local state
            setSkills(allSkills);

            removeMessage();

            console.log({ allSkills })
            if (!allSkills || ( allSkills && allSkills.length === 0)) {
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

    if (!skills || (skills && skills.length === 0 ) ) {
        return <span> ¯\_(ツ)_/¯ </span>;
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