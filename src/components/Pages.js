import styled from 'styled-components';

const Pages = styled.div`
  display: flex;
  justify-content: space-around;
  align-item: center;
  margin: 25px;

  .next-button,
  .previous-button {
    border-radius: 5px;
    color: #d45d79;
    background-color: #f9eaea;
    cursor: pointer;
    font-size: 1.6rem;
    padding: 8px 21px;
    text-decoration: none;
    border: none;
    margin: 0 9px;
    font-weight: 500;
    transition: color 0.5s;

    &:hover {
      color: inherit;
    }
  }
`;

export default Pages;
