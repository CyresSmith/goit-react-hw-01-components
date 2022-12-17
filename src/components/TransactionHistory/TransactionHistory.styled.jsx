import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 600px;
  border: ${p => p.theme.borders.none};
  margin-left: auto;
  margin-right: auto;
  background: ${p => p.theme.colors.primary};
  border-radius: ${p => {
    return parseInt(p.theme.radii.normal) + 2;
  }}px;
  box-shadow: ${p => p.theme.shadow.medium};

  thead th {
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.regular};
    color: ${p => p.theme.colors.accent};
    text-align: center;
    border: ${p => p.theme.borders.none};
    padding: ${p => p.theme.space[3]} ${p => p.theme.space[5]};
    background: ${p => p.theme.colors.secondary};
  }

  thead tr th:first-of-type {
    border-radius: ${p => p.theme.radii.normal} ${p => p.theme.radii.none}
      ${p => p.theme.radii.none} ${p => p.theme.radii.normal};
  }

  thead tr th:last-of-type {
    border-radius: ${p => p.theme.radii.none} ${p => p.theme.radii.normal}
      ${p => p.theme.radii.normal} ${p => p.theme.radii.none};
  }

  tbody td {
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.light};
    text-align: center;
    border: ${p => p.theme.borders.none};
    padding: ${p => p.theme.space[3]} ${p => p.theme.space[5]};
    vertical-align: top;
  }

  tbody tr:nth-of-type(even) {
    background: ${p => p.theme.colors.background};
  }

  tbody tr td:first-of-type {
    border-radius: ${p => p.theme.radii.normal} ${p => p.theme.radii.none}
      ${p => p.theme.radii.none} ${p => p.theme.radii.normal};
  }

  tbody tr td:last-of-type {
    border-radius: ${p => p.theme.radii.none} ${p => p.theme.radii.normal}
      ${p => p.theme.radii.normal} ${p => p.theme.radii.none};
  }
`;
