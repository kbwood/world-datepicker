import styled from 'styled-components';

export const Select = styled.select`
  background-color: ${(props) => props.theme.color.monthBG};
  border: 0;
  color: ${(props) => props.theme.color.monthFG};
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.font.sizeHeader};
  font-weight: bold;
`;
