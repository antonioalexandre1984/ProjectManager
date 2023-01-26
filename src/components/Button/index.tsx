import { ReactNode, ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
}

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


export function Button({ children, ...rest }: IButtonProps) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}
