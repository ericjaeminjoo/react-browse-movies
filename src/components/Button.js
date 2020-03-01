import styled from 'styled-components';

const Button = styled.button`
  border-radius: 5px;
  color: #d45d79;
  background-color: #f9eaea;
  cursor: pointer;
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  padding: 10.5px 22px;
  text-decoration: none;
  border: none;
  margin: 15px 0;
  font-weight: 500;
  transition: color 0.5s;

  &:hover {
    color: inherit;
  }
`;

export default Button;
