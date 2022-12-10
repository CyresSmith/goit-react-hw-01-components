import styled from '@emotion/styled';

export const Statistics = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 23px;
  height: 35px;
  font-weight: 500;
  margin-top: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  height: 75px;
`;

export const Item = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

export const Label = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: grey;
`;

export const Percentage = styled.span`
  margin-top: 5px;
  font-size: 18px;
  font-weight: 500;
`;
