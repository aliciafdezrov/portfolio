import {css} from "@emotion/css";

export const wrapper = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  scroll-behavior: smooth;
  margin: 0;
  height: 100%;
  width: 100%;
  background-color: #2c2c2c !important;
  overflow-x: hidden;
  font-family: 'Roboto Slab', serif;

  h4 {
    font-weight: bold;
  }
}

@media (min-width: 768px) {
  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;
