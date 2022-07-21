import styled from 'styled-components';

export const MonthTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHeader = styled.thead`
  th {
    padding: 0.5em;
  }
`;

export const MonthHeader = styled.tr`
  background-color: ${(props) => props.theme.color.monthBG};
  border: 1px solid ${(props) => props.theme.color.monthBG};
  color: ${(props) => props.theme.color.monthFG};
`;

export const WeekHeader = styled.tr`
  background-color: ${(props) => props.theme.color.weekBG};
  border: 1px solid ${(props) => props.theme.color.weekBG};
  color: ${(props) => props.theme.color.weekFG};
`;

export const TableBody = styled.tbody`
  font-size: ${(props) => props.theme.font.sizeBody};
`;
