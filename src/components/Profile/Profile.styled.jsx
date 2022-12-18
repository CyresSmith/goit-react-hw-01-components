import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  box-shadow: ${p => p.theme.shadow.medium};
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[5]};
`;

export const Avatar = styled.img`
  height: 140px;
  object-fit: cover;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.round};
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.secondary};
  margin-top: ${p => p.theme.space[5]};
`;

export const Tag = styled.p`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.light};
  margin-top: ${p => p.theme.space[4]};
  color: ${p => p.theme.colors.secondary};
`;

export const Location = styled.p`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.light};
  margin-top: ${p => p.theme.space[4]};
  color: ${p => p.theme.colors.secondary};
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  background-color: ${p => p.theme.colors.secondary};
  border-top: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.background};

  li {
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${p => p.theme.space[4]};
    padding-bottom: ${p => p.theme.space[4]};

    :not(:last-child) {
      border-right: ${p => p.theme.borders.normal};
      border-color: ${p => p.theme.colors.background};
    }
  }
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.light};
  color: ${p => p.theme.colors.accent};
`;

export const Quantity = styled.span`
  margin-top: ${p => p.theme.space[3]};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.accent};
`;
