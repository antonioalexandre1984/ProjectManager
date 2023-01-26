import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const Container = styled.div`
width: 100%;
max-width: 80rem;
margin: 0 auto;
height: 100vh;
display: flex;
align-items: stretch;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
max-width: 700px;
`;

export const Form = styled.form`
margin-top: 20px;
padding: 40px;
border: 1px solid #373737;
background: #373737;
border-radius: 4px;
box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;

h1{
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
}
`;

export const FormActions = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;

a{
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s;
  font-size:14px;
}
`;

export const Background = styled.div`
flex: 1;
background: url(${logo}) no-repeat center;
`;
