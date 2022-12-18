import styled from 'styled-components';

export const Statistics = styled.section`
  display: flex;
  flex-direction: column;
  width: ${p => p.widthFactor * 113.6}px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  box-shadow: ${p => p.theme.shadow.medium};
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.secondary};
  margin-top: ${p => p.theme.space[5]};
  margin-bottom: ${p => p.theme.space[5]};
`;

export const StatList = styled.ul`
  display: flex;
  flex-basis: 100%;
  border-top: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.background};
`;
