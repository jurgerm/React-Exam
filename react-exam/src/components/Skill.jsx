import { useState } from "react";
import { SkillsApi } from "../services/skills-api";
import { SkillForm } from "./SkillForm";
import { Card, CardContent, CardFooter, CardFooterItem, Content } from "../ui/Card";

import { StyButton } from "../atoms/StyButton";

export const Skill = ({ skillId, skill }) => {
    const [saveEnabled, setSaveEnabled] = useState(false);
    const { title, description } = skill;
    const [model, setModel] = useState({ title, description });

    const toggleSaveEnabled = () => {
        setSaveEnabled(!saveEnabled);
    };

    const details = (
        <div className="details">
            <div className="fullname">
                Card: {title}
            </div>

            <div className="fullname">
                {description}
            </div>

        </div>
    );

    return (
        <Card>
            <CardContent>
                <Content>
                    {details}
                </Content>
            </CardContent>
        </Card>
    );
};
