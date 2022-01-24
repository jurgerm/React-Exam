import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Field } from "../organisms/Field";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardHeaderTitle, Content } from "../ui/Card";

export const Login = () => {
  const navigate = useNavigate();
  const { login, error } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) return;

    const res = await login(username, password);

    if (res.error) {
      return;
    }

    navigate("/");
  };

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <CardHeader>
        <CardHeaderTitle>Login</CardHeaderTitle>
      </CardHeader>

      <CardContent>
        <Content>
          <Field onChange={onUsernameChange} name="username" required />
          <Field onChange={onPasswordChange} name="password" type="password" required minLength={8} />

          <Button className="is-primary" type="submit" disabled={!username || !password}>
            Login
          </Button>

          <div style={{ color: "red" }}>{error}</div>
        </Content>
      </CardContent>
    </Card>
  );
};
