import styled from "styled-components";

export const Icondiv = styled.div`
  display: flex;
  align-items: center;
  padding: 35px 30px 35px 20px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-10px);
  }

  span {
    width: 30px;
    height: 30px;
    margin-right: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Icondiv2 = styled.div`
  display: block;
  text-align: center;
  padding: 35px 40px;
  transition: 0.5s;
  -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.08);
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-10px);
  }

  div {
    width: 50px;
    height: 50px;
    margin: 0 auto 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
