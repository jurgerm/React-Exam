import {useState} from "react";
import {SkillsApi} from "../services/skills-api";
import {SkillForm} from "./SkillForm";
import {Card, CardContent, CardFooter, CardFooterItem, Content} from "../ui/Card";

import { StyButton } from "../atoms/StyButton";

export const Skill = ({skillId, skill, onDelete, onUpdate}) => {
    const [saveEnabled, setSaveEnabled] = useState(false);
    const {title, description} = skill;
    const [model, setModel] = useState({title, description});

    const toggleSaveEnabled = () => {
        setSaveEnabled(!saveEnabled);
    };

    const details = (
        <div className="details">
            <div className="fullname">
                Full name: {title} {description}
            </div>

                     <SkillForm
                skill={skill}
                disabled={!saveEnabled}
                onUpdate={(update) => {
                    setModel(update);
                }}
            />
        </div>
    );

    return (
        <div className="mb-3">
            <Card>
                <CardContent>
                    <Content>{details}</Content>
                </CardContent>

                <CardFooter>
                    <CardFooterItem
                        as={saveEnabled ? "a" : "span"}
                        onClick={async () => {
                            if (!saveEnabled) return;

                            await SkillsApi.update(skillId, model);
                            onUpdate(skillId, model);
                        }}
                    >

                        Add butonas
                        <StyButton className="is-primary" type="submit" >
                            Add
                        </StyButton>

                    </CardFooterItem>

                   

                   
                </CardFooter>
            </Card>
        </div>
    );
};
