import { useEffect, useState } from "react";
import { Field } from "../organisms/Field";

export const SkillForm = ({ skill, onUpdate, className, disabled }) => {
    const [title, setTitle] = useState(skill.title);
    const [description, setDescription] = useState(skill.description);


    const changeTitle = (e) => {
        setTitle(e.target.value);
    };

    const changeDescription = (e) => {
        setDescription(e.target.value);
    };


    useEffect(() => {
        onUpdate({
            title,
            description
        });
    }, [title, description]);

    return (
        <form className={className || ""}>
            <Field name="Title" type="input" defaultValue={title} disabled={disabled} onChange={changeTitle} />
            <Field name="Description" type="textarea" defaultValue={description} disabled={disabled} onChange={changeDescription} />
        </form>
    );
};
