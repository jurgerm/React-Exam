import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMessagesContext } from "../hooks/MessagesContext";
import { useAuth } from "../hooks/useAuth";
import { Field } from "../organisms/Field";
import { StyButton } from "../atoms/StyButton";
import { Card, CardContent, CardHeader, CardHeaderTitle, Content } from "../ui/Card";

export const Login = () => {
  const navigate = useNavigate();
  const { login, logout, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { addMessage, removeMessage } = useMessagesContext();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        addMessage(`Enter your email`);
        return;
      }
      if (!password) {
        addMessage(`Enter your password`);
        return;
      }

      const res = await login(email, password);
      console.log({ res });
      if (res.error) {
        console.warn("Bad payload");
        addMessage(`ERROR: ${res.error}`);
        logout();
        return;
      }
      if (!res.token) {
        console.warn("No token");
        addMessage(`ERROR: Please, check your email address or password. `);
        logout();
        return;
      }
      removeMessage();

      navigate("/");
    }
    catch (err) {
      console.log({ err });
      addMessage(`ERROR: ${err}`);
      logout();
    }
  };

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <CardHeader>
        <CardHeaderTitle>Login form</CardHeaderTitle>
      </CardHeader>

      <CardContent>
        <Content>
          <Field name="email"
            type="email"
            placeholder="testas@testas.com"
            required
            onChange={onEmailChange}
          />
          <Field name="password"
            type="password"
            placeholder="testas123"
            required
            minLength={8}
            onChange={onPasswordChange}
          />

          <StyButton className="is-primary" type="submit" disabled={!email || !password}>
            Login
          </StyButton>

          <div style={{ color: "red" }}>{error}</div>
        </Content>
      </CardContent>
    </Card>
  );
};
