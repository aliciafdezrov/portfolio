import {css} from "@emotion/css";

export const technologyContainer = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: center;
  min-width: 40vw;

  @media (max-width: 479px) {
    min-width: 80vw;
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    min-width: 30vw;
  }
`;

export const technologyLabel = css`
  display: flex;
  align-self: flex-start;
  flex: 1;
  margin-right: 1vw;
  font-size: 1rem;
  text-align: start;
`;

export const technologyProgress = css`
  align-self: center;
  flex: 10;
`;
