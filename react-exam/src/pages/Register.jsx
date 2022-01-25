import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field } from "../organisms/Field";
import { Auth } from "../services/auth";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardHeaderTitle, Content } from "../ui/Card";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    const res = await Auth.register(email, password);

    if (res.error) {
      setError(res.error);
      return;
    }
    setError(null);
    navigate("/login");
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

          <Button className="is-primary" type="submit" disabled={!email || !password}>
            Register
          </Button>

          <div style={{ color: "red" }}>{error}</div>
        </Content>
      </CardContent>
    </Card>
  );
};
