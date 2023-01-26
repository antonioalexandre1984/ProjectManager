import { ReactNode, useCallback } from 'react';

import { Container, EntryCard, EntryCardItem } from './styles';
import logo from '../../assets/logo.png';
import { FaCode, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


export function StartPage() {
  const navigate = useNavigate();

  const signInDev = useCallback(() => {
    navigate('/sign-in/dev');
  }, [navigate]);

  const signInClient = useCallback(() => {
    navigate('/sign-in/client');
  }, [navigate]);


  return (
    <Container>
      <img src={logo} alt='' />
      <EntryCard>
        <EntryCardItem
          onClick={signInDev}
        >
          <FaCode size={50} />
          <span>Entrar como dev</span>
        </EntryCardItem>
        <EntryCardItem
          onClick={signInClient}
          color="#fff"
          background="#111"
        >
          <FaUsers size={50} />
          <span>Entrar como Cliente</span>
        </EntryCardItem>
      </EntryCard>
    </Container>
  );
}
