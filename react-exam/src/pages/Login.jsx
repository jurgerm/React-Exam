import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Field } from "../organisms/Field";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardHeaderTitle, Content } from "../ui/Card";

export const Login = () => {
  const navigate = useNavigate();
  const { login, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    const res = await login(email, password);

    if (res.error) {
      return;
    }

    navigate("/");
  };

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <CardHeader>
        <CardHeaderTitle>Login form: Please provide  e-mail and password</CardHeaderTitle>
      </CardHeader>

      <CardContent>
        <Content>
          <Field onChange={onEmailChange} name="email" placeholder="testas@testas.com" required />
          <Field onChange={onPasswordChange} name="password" type="password" placeholder="testas123" required minLength={8} />

          <Button className="is-primary" type="submit" disabled={!email || !password}>
            Login
          </Button>

          <div style={{ color: "red" }}>{error}</div>
        </Content>
      </CardContent>
    </Card>
  );
};
