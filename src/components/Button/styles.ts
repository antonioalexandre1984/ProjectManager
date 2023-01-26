import styled from 'styled-components';

export const Container = styled.button`
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
cursor: pointer;
width: 300px;
height: 42px;
border: 0;
border-radius: 4px;
background: #00e676;
color: #fff;
font-size: 20px;
font-weight: bold;
transition: background-color 0.2s;

&:hover {
  background: #00c853;
  color: #31263e;
}
`;
