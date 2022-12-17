import styled from 'styled-components';

export const Container = styled.div`
  width: ${p => p.theme.sizes.conrtainer};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[5]};
`;

export const Section = styled.section`
  padding-top: ${p => p.theme.space[6]};
  padding-bottom: ${p => p.theme.space[6]};
  display: flex;
  justify-content: space-between;
`;
