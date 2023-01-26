import styled, { css } from 'styled-components';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<InputProps>`
display: flex;
flex-direction: row;
align-items: center;
border: 2px solid #44355b;
background: #000;
border-radius: 4px;
width: 300px;
height: 42px;
padding: 10px 15px;
margin-bottom: 10px;

svg{
  margin-right: 10px;
  color: #a5a5a5;
}

${(props) => props.isFocused && css`
  svg{
    color: #00e676;
  }
  border-color: #00e676;
`}

${(props) =>
    props.isFilled &&
    css`
    svg{
      color: #00e676;
    };
`}

input{
  flex: 1;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 0;
  color: #fff;
  font-size: 16px;
  padding-left: 15px;

  &::placeholder{
    color: #a5a5a5;
  }

  &:focus{
    cursor: pointer;
  }
}

`;
