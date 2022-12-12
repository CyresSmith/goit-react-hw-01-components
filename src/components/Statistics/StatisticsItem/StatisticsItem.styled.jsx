import styled from '@emotion/styled';
import { getRandomHexColor } from '../../getRandomHexColor';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 112px;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

export const Percentage = styled.span`
  margin-top: 5px;
  font-size: 23px;
  font-weight: 400;
`;
