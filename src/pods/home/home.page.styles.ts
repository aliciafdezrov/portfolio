import {css} from "@emotion/css";

export const image = css`
  filter: blur(8px);
  -webkit-filter: blur(8px);
`;

export const content = css`
  background-color: rgba(0, 0, 0, 0.4);
  border: 3px solid #f1f1f1;
  padding: 20px;
  width: fit-content;
  position: absolute;

  h1, h4 {
    color: white;
    font-weight: bold;
  }
`;

export const title = css`
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 4em;
  margin: 0.67em 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const subtitle = css`
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 2em;
  margin: 1.33em 0;

"@media (max-width: 768px)": {
  font-size: 1rem;
}
`;
