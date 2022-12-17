import styled from 'styled-components';

export const ListOfFriends = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${p => p.theme.radii.normal};
  margin-left: auto;
  margin-right: auto;
`;
