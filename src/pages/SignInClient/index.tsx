import { ReactNode } from 'react';
import { FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Content, FormActions, Background, Form } from './styles';

import { Container } from './styles';



export function SignInClient() {
  return (
    <Container>
      <Background />
      <Content>
        <Form>
          <h1>Log In Dev</h1>
          <Input
            icon={FaCode}
            placeholder="Password"
            type="password"
            isPassword
          />
          <Button type="submit">
            Log In
          </Button>
          <FormActions>
            <Link to="/sign">Forgot your password?</Link>
            <Link to="/sign-up/dev">Create an account</Link>
          </FormActions>
        </Form>
      </Content>

    </Container>
  );
}
