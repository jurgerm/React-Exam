import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field } from "../organisms/Field";
import { Auth } from "../services/auth";
import { StyButton } from "../atoms/StyButton";
import { Card, CardContent, CardHeader, CardHeaderTitle, Content } from "../ui/Card";
import { useMessagesContext } from "../hooks/MessagesContext";
import { useAuth } from "../hooks/useAuth";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addMessage } = useMessagesContext();
  const { logout } = useAuth();

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
      const res = await Auth.register(email, password);

      if (res.error) {
        console.warn("Bad payload");
        addMessage(`ERROR: ${res.error}`);
        logout();
        return;
      }

      addMessage("Registration is succesfull. Now You can login using these credentials.");

      navigate("/login");

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
        <CardHeaderTitle>Registration form: Please enter e-mail and password </CardHeaderTitle>
      </CardHeader>

      <CardContent>
        <Content>
          <Field onChange={onEmailChange} name="email" required />

          <Field onChange={onPasswordChange} name="password" type="password" required minLength={8} />

          <StyButton type="submit" disabled={!email || !password}>
            Register
          </StyButton>
        </Content>
      </CardContent>
    </Card>
  );
};
