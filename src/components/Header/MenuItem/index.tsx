import { ComponentType, ReactNode } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container } from './styles';

interface IProps {
  title: string;
  icon: ComponentType<IconBaseProps>
  action(): void;
}

export function MenuItem(props: IProps) {
  const { action, title, icon: Icon } = props;
  return (
    <Container title={title} onClick={action}>
      <Icon />
    </Container>
  );
}
