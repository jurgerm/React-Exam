import { SkillsApi } from "../services/skills-api";
import { SkillForm } from "../components/SkillForm";
import {
  Card, CardContent,
  CardHeader, CardHeaderTitle,
  Content,
  CardFooter, CardFooterItem
} from "../ui/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { StyButton } from "../atoms/StyButton";
import { useMessagesContext } from "../hooks/MessagesContext";

export const Add = ({ className }) => {
  const skill = { title: "", description: "" };
  const [model, setModel] = useState(skill);
  const onModelUpdate = (update) => setModel(update);
  const navigate = useNavigate();

  const { addMessage } = useMessagesContext();

  const { token } = useAuth();

  const onSave = async () => {
    try {
      addMessage('Saving new skill');
      const res = await SkillsApi.add(model, token);
      console.log({ res });
      if (res.err) {
        console.warn("Bad payload");
        addMessage(`ERROR: ${res.err}`);
        return;
      }
      // this message will be displayed because next page clears messages and shows own.
      addMessage(`New skill was added "${skill.title}"`);

      navigate("/");

    }
    catch (err) {
      console.log({ err });
      addMessage(`ERROR: ${err}`);
      setModel([]);
    }
  };

  return (
    <Card>

      <CardHeader>
        <CardHeaderTitle>Add new skill</CardHeaderTitle>
      </CardHeader>

      <CardContent>
        <Content>
          <SkillForm className={className} skill={skill} onUpdate={onModelUpdate} />
        </Content>
      </CardContent>

      <CardFooter>
        <CardFooterItem>
          <StyButton onClick={onSave}>
            Save
          </StyButton>
        </CardFooterItem>
      </CardFooter>
    </Card>
  );
};
