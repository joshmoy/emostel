import styled from "styled-components";

export const NavDiv = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7%;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08); */
  z-index: 1010;

  .logo-div {
    width: 50px;
    height: 50px;
  }

  .logo-div img {
    width: 100%;
    height: 100%;
  }

  .nav-div {
    display: flex;
    justify-content: space-between;
    width: 15%;
  }
`;
