import { ReactNode } from 'react';
import { AdminLayout } from '../AdminLayout';
import { UseUser } from '../hooks/UseUser';

import { Container } from './styles';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { user } = UseUser();


  return (
    <Container>
      <>
        {user ? <AdminLayout>{children}</AdminLayout> : <>{children}</>};
      </>
    </Container>
  );
}
