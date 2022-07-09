import styled from 'styled-components';

export const Datepicker = styled.div`
  border: 1px solid ${(props) => props.theme.color.border};
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.font.sizeHeader};
  width: 18em;
`;
