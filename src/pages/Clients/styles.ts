import styled from 'styled-components';

interface ActionsButtonProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

export const ClientsPageContainer = styled.div`
width: 100%;
max-width: 1280px;
display: flex;
flex-direction: column;
margin: 0 auto;
gap:3rem;
`;

export const TableContainer = styled.table`
width: 100%;
border-spacing: 0 0.75rem;

td{
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 1rem 2rem;
  border: 0;
  background: #373737;

  &:first-child{
    border-radius: 6px 0 0 6px;
  }

  &:last-child{
    border-radius: 0 6px 6px 0;
  }

}
`;

export const ActionsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
`;

export const ActionsButton = styled.button<ActionsButtonProps>`
cursor: pointer;
border: none;
padding: 0.5rem 1rem;
display: flex;
align-items: center;
border-radius: 0.25rem;
transition: all 0.2s;

background: ${({ color }) => color};

svg{
  color: #fff;
}

&:active{
  transform: scale(0.9);
}

`;




