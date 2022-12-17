import styled from 'styled-components';
import { getRandomHexColor } from '../../getRandomHexColor';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${p => p.theme.space[4]};
  padding-bottom: ${p => p.theme.space[4]};
  width: 112px;
  background-color: ${p => p.theme.colors.secondary};

  :not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.background};
  }
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.light};
  color: ${p => p.theme.colors.accent};
`;

export const Percentage = styled.span`
  margin-top: ${p => p.theme.space[3]};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.accent};
`;
