import { Button } from '../../../../components/Button';
import { Container } from './styles';

interface HeaderProps {
  title: string;
  action(): void;
  buttonText: string;
}

export function PageHeader({ title, action, buttonText }: HeaderProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button onClick={action}>{buttonText}</Button>
    </Container>
  );
}
