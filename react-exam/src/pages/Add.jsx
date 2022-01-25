import { SkillsApi } from "../services/skills-api";
import { SkillForm } from "../components/SkillForm";
import { Card, CardContent, CardFooter, CardFooterItem, Content } from "../ui/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Add = ({ className }) => {
  const skill = { title: "", description: "" };
  const [model, setModel] = useState(skill);
  const onModelUpdate = (update) => setModel(update);
  const navigate = useNavigate();

  const { token } = useAuth();

  const onSave = async () => {
    const res = await SkillsApi.add(model, token);
    if (res.errors) return console.warn("Bad payload");
    navigate("/", { state: { added: res } });
  };

  return (
    <Card>
      <CardContent>
        <Content>
          <SkillForm className={className} skill={skill} onUpdate={onModelUpdate} />
        </Content>
      </CardContent>

      <CardFooter>
        <CardFooterItem as="a" onClick={onSave}>
          Save
        </CardFooterItem>
      </CardFooter>
    </Card>
  );
};
