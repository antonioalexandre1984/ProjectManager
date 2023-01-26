import logo from '../../assets/logo.png';
import { MenuItem } from './MenuItem';
import { Container, Logo, Menu } from './styles';
import { FaCube, FaHome, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { UseUser } from '../hooks/UseUser';
import { UserInfo } from '../UserInfo';

export function Header() {
  const navigate = useNavigate();
  const { signOutDev } = UseUser();
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Menu>
        <MenuItem
          title="Home"
          icon={FaHome}
          action={() => navigate('/dashboard')}
        />
        <MenuItem
          title="Clientes"
          icon={FaUsers}
          action={() => navigate('/clients')}
        />
        <MenuItem
          title="Projects"
          icon={FaCube}
          action={() => navigate('/projects')}
        />
        <MenuItem
          title="Exit"
          icon={FaSignOutAlt}
          action={signOutDev}
        />
        <UserInfo />
      </Menu>
    </Container>
  );
}
