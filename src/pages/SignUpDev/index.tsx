import { ReactNode, useCallback, useEffect, useState } from 'react';

import { Container, Content, Background, Form, FormActions } from './styles';
import { Input } from '../../components/Input';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Button } from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { CredentialsDev } from '../../components/Interfaces/CredentialsDev';
import { Store } from 'react-notifications-component';
import { api } from '../../services/api';


export function SignUpDevPage() {
  const navigate = useNavigate();
  const [model, setModel] = useState({
    name: '',
    email: '',
    password: '',
  });

  const updateModel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModel({
      ...model,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('model', model);
    try {
      const res = await api.post('/users', model);
      Store.addNotification({
        title: "Wonderful!",
        message: "successfully registered user!",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      navigate('/sign-in/dev');
      console.log('res', res);
    } catch (err) {
      Store.addNotification({
        title: "Error!",
        message: "Fail to authenticate user!",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      console.log(err);
    }
  }, [model, navigate]);

  return (
    <Container>
      <Background />
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Log In Dev</h1>
          <Input
            icon={FaUser}
            placeholder="name"
            type="text"
            name="name"
            value={model.name}
            onChange={updateModel}
          />
          <Input
            icon={FaEnvelope}
            placeholder="Email"
            type="email"
            name="email"
            value={model.email}
            onChange={updateModel}
          />
          <Input
            icon={FaLock}
            placeholder="Password"
            type="password"
            name="password"
            isPassword
            value={model.password}
            onChange={updateModel}
          />
          <Button type="submit">
            Register
          </Button>
          <FormActions>
            <Link to="/sign">Forgot your password?</Link>
            <Link to="/sign-in/dev">I have a account</Link>
          </FormActions>
        </Form>
      </Content>
    </Container>
  );
}
