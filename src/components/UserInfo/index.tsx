import { ReactNode, useCallback } from 'react';
import { UseUser } from '../hooks/UseUser';

import { Container, Avatar } from './styles';

export function UserInfo() {
  const { user } = UseUser();
  /*   const formattedName = useCallback(() => {
      const name = user.name.split(' ');
      if (name.length > 1) {
        return `${name[0].charAt(0)}${name[1].charAt(0)}`.toUpperCase();
      }
      return `${name[0].charAt(0)}${name[0].charAt(1)}`.toUpperCase();
    }, [user]); */

  const formattedName = useCallback(() => {
    const name = user.name.split(' ');
    if (name.length > 1) {
      return `${name[0].charAt(0)}${name[1].charAt(0)}`.toUpperCase();
    }
    return `${name[0].charAt(0)}${name[0].charAt(1)}`.toUpperCase();
  }, [user]);

  return (
    <Container>
      <Avatar>{formattedName()}</Avatar>
      <span>{user.name}</span>
    </Container>
  );
}
