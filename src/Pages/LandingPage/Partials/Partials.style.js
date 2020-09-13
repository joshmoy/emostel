import styled from "styled-components";

export const QuoteDiv = styled.div`
  background-image: linear-gradient(90deg, #41b3a1, #85cdc9);
  width: 100%;
  padding: 10%;
  text-align: center;

  p {
    font-size: 40px;
    line-height: 70px;
    color: #fff;
  }

  span {
    font-size: 70px;
    color: #e37d5f;
  }

  .author-div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .author {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    font-size: 30px;
    margin-top: 20px;
    border: 2px solid #e37d5f;
    width: 350px;

    span {
      font-size: 40px;
      margin-right: 10px;
    }
  }
`;

export const Missiondiv = styled.div`
  padding: 3% 7%;
  h3 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 30px;
  }

  .box-3 {
    background-color: #c38d9d;
    padding: 40px;
    margin-top: 50px;
    color: #fff;

    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 20px;
      grid-row-gap: 30px;
      list-style-type: circle !important;
    }

    h4 {
      margin-bottom: 20px;
    }

    li {
      line-height: 26px;
    }
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    color: #fff;

    h4 {
      margin-bottom: 10px;
    }

    p {
      line-height: 26px;
    }

    .box-1 {
      background-color: #e37d5f;
      padding: 40px;
    }

    .box-2 {
      background-color: #e8a97c;
      padding: 40px;
    }
  }
`;
