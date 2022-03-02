import {css} from "@emotion/css";

export const container = css`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: auto;
  row-gap: 10px;
  grid-template-areas:
    "title title title title"
    ". main main ."
    ". contact avatar .";
  max-width: 100vw;
  padding: 5vh;
  color: #f1f1f1;

  @media (min-width: 768px) {
    a {
      font-size: 0.8rem;
    }
  }
`;

export const title = css`
  grid-area: title;

  h4 {
    font-weight: bold;
    text-align: center;
    padding-bottom: 3vh;
  }
`;

export const contact = css`
  grid-area: contact;
  width: 100%;
  align-content: center;
  align-self: center;

  caption {
    font-weight: bold;
    padding-bottom: 3vh;
    font-size: 1em;
    text-align: start;
  }

  tr {
    height: 50px
  }
`;

export const main = css`
  grid-area: main;
`;

export const styleCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding-left: 2vw;
`;

export const titleStyle = css`
  white-space: nowrap;
  font-weight: 500;
  margin-left: 1vw;
  text-align: start;

  a {
    color: #ffffff;
  }
`;

export const dataItem = css`
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  width: auto !important;
`;

export const listIcon = css`
  color: darkgrey;
  font-size: 1.5em;
`;

export const avatar = css`
  grid-area: avatar;
  vertical-align: middle;
  padding-left: 2vw;

  img {
    width: 20vw;
    border-radius: 50%;
  }

  @media (max-width: 479px) {
    vertical-align: middle;
    padding-top: 2vh;
    align-self: center;

    img {
      width: 80vw;
      height: 40vh;
      border-radius: 50%;
    }
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    padding-top: 2vh;

    img {
      width: 40vw;
      height: 30vh;
      border-radius: 50%;
    }
  }
`;
