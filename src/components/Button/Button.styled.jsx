import styled from 'styled-components';
import { theme } from 'theme';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]};
  color: ${p => p.theme.colors.secondary};
  font-size: large;
  border: ${(p => p, theme.borders.none)};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.primary};
  cursor: pointer;

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.accent};
  }
`;
