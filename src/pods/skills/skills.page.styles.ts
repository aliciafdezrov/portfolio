import {css} from "@emotion/css";

export const container = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  color: black;

  h4 {
    font-weight: bold;
  }
`;

export const card = css`
  text-align: center;
  padding: 5vh;
  background-color: snow;

  @media (max-width: 1024px) and (min-width: 768px) {
    padding: 0;

    h4 {
      padding-top: 5vh;
    }
`;

export const blocksContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 5vh;
`;
