import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  height: 90px;
  padding: 20px 0;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0.7px 0.7px hsl(var(--shadow-color) / 0.41),
    -0.1px 2.1px 2.2px -1px hsl(var(--shadow-color) / 0.38),
    -0.3px 5.5px 5.9px -1.9px hsl(var(--shadow-color) / 0.35),
    -0.8px 13.7px 14.6px -2.9px hsl(var(--shadow-color) / 0.32);

  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Status = styled.span`
  position: absolute;
  right: 0px;
  width: 15px;
  height: 90px;
  background-color: ${({ isOnline }) => {
    if (isOnline) {
      return '#17e610';
    }
    return 'tomato';
  }};
`;

export const Avatar = styled.img`
  height: 90px;
  width: 90px;
  object-fit: cover;
  overflow: hidden;
  background-color: whitesmoke;
`;

export const Name = styled.p`
  font-size: 23px;
  font-weight: 500;
  margin-left: 15px;
`;
