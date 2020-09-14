import styled from "styled-components";

export const Grid = styled.div`
  position: relative;
  border: 1px solid black;
  height: min(100vh, 100vw);
  width: min(100vh, 100vw);
  margin: auto;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  background-color: #7c9171;
  margin-top: calc((100vh - min(100vw, 100vh)) / 2);
`;

export const Div = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  grid-column: ${(props) => props.x};
  grid-row: ${(props) => props.y};
  border: none;
  background-color: #526348;
`;
