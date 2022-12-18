import styled from 'styled-components';
import { theme } from 'theme';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.regular};
  padding: ${p => p.theme.space[3]};
  color: ${p => p.theme.colors.secondary};
  background-color: ${p =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.primary};
  cursor: pointer;
  border: ${(p => p, theme.borders.none)};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadow.medium};
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.accent};
    box-shadow: ${p => p.theme.shadow.high};
    scale: 1.05;
  }
`;

export const ButtonText = styled.span`
  margin-left: ${p => (p.isIconThere ? p.theme.space[3] : p.theme.space[0])};
`;
