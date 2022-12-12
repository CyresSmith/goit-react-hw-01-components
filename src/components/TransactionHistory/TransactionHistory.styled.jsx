import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 600px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  background: white;
  border-radius: 13px;
  box-shadow: 0px 0.7px 0.7px hsl(var(--shadow-color) / 0.41),
    -0.1px 2.1px 2.2px -1px hsl(var(--shadow-color) / 0.38),
    -0.3px 5.5px 5.9px -1.9px hsl(var(--shadow-color) / 0.35),
    -0.8px 13.7px 14.6px -2.9px hsl(var(--shadow-color) / 0.32);

  thead th {
    font-weight: bold;
    text-align: center;
    border: none;
    padding: 10px 15px;
    background: lightblue;
    font-size: 14px;
  }

  thead tr th:first-of-type {
    border-radius: 10px 0 0 10px;
  }

  thead tr th:last-of-type {
    border-radius: 0 10px 10px 0;
  }

  tbody td {
    text-align: center;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    vertical-align: top;
  }

  tbody tr:nth-of-type(even) {
    background: whitesmoke;
  }

  tbody tr td:first-of-type {
    border-radius: 10px 0 0 10px;
  }

  tbody tr td:last-of-type {
    border-radius: 0 10px 10px 0;
  }
`;
