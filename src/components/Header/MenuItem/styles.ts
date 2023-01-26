import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.li`
border-radius: 7px;
padding: 12px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
transition: all 0.2s ease-in-out;

  svg{
    font-size:1rem;
  }

  &:hover{
    background-color: ${shade(0.2, "#31263e")
  }
  };
`;
