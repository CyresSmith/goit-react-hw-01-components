import styled from '@emotion/styled';

export const Statistics = styled.section`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0.7px 0.7px hsl(var(--shadow-color) / 0.41),
    -0.1px 2.1px 2.2px -1px hsl(var(--shadow-color) / 0.38),
    -0.3px 5.5px 5.9px -1.9px hsl(var(--shadow-color) / 0.35),
    -0.8px 13.7px 14.6px -2.9px hsl(var(--shadow-color) / 0.32);
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 23px;
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 30px;
  color: gray;
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  height: 75px;
`;
