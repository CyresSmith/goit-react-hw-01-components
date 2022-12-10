import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 300px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0.7px 0.7px hsl(var(--shadow-color) / 0.41),
    -0.1px 2.1px 2.2px -1px hsl(var(--shadow-color) / 0.38),
    -0.3px 5.5px 5.9px -1.9px hsl(var(--shadow-color) / 0.35),
    -0.8px 13.7px 14.6px -2.9px hsl(var(--shadow-color) / 0.32);
`;

export const Description = styled.div`
  height: 325px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const Avatar = styled.img`
  height: 140px;
  width: auto;
  object-fit: cover;
  background-color: whitesmoke;
  border-radius: 50%;
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  font-size: 23px;
  height: 35px;
  font-weight: 500;
  margin-top: 20px;
`;

export const Tag = styled.p`
  display: flex;
  align-items: center;
  height: 20px;
  font-size: 17px;
  font-weight: 400;
  margin-top: 15px;
  color: grey;
`;

export const Location = styled.p`
  display: flex;
  align-items: center;
  height: 20px;
  font-size: 17px;
  font-weight: 400;
  margin-top: 15px;
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  height: 75px;
  background-color: whitesmoke;
  border-top: 1px solid rgb(233, 231, 231);

  li {
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }

  li:nth-of-type(2) {
    border-left: 1px solid rgb(233, 231, 231);
    border-right: 1px solid rgb(233, 231, 231);
  }
`;

export const Label = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: grey;
`;

export const Quantity = styled.span`
  margin-top: 5px;
  font-size: 18px;
  font-weight: 500;
`;
