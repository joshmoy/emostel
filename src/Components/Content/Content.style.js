import styled from "styled-components";

export const ContentDiv = styled.div`
  padding: 0 7%;
  margin-top: 50px;
  h3 {
    font-size: 40px;
    text-align: center;
  }
  .desc {
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
  }
`;

export const ChildrenDiv = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
`;
