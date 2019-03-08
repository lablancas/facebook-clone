import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bolder;
  text-transform: uppercase;
  color: grey;
  margin: 20px 5px;
  font-size: 0.8em;
  .footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 275px;
    a {
      color: darkblue;
      font-weight: bold;
      margin: 8px 2px;
    }
  }
`;
