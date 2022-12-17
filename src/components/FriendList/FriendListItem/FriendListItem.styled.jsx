import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  box-shadow: ${p => p.theme.shadow.medium};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]};
  }
`;

export const Status = styled.span`
  position: absolute;
  right: ${p => p.theme.space[0]};
  width: ${p => p.theme.space[4]};
  height: 100%;
  background-color: ${({ isOnline }) => {
    if (isOnline) {
      return '#17e610';
    }
    return 'tomato';
  }};
`;

export const Avatar = styled.img`
  height: 100%;
  width: 90px;
  object-fit: cover;
  overflow: hidden;
  background-color: ${p => p.theme.colors.secondary};
  border-right: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.background};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.secondary};
  margin-left: ${p => p.theme.space[4]};
  margin-top: ${p => p.theme.space[5]};
  margin-bottom: ${p => p.theme.space[5]};
`;
