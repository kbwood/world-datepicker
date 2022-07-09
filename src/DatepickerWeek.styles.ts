import styled from 'styled-components';
import { Theme } from './theme';

type DayProps = {
  inThisMonth?: boolean
  selected?: boolean
  theme: Theme,
  today?: boolean
  weekend?: boolean
}

const getColorName = (props: DayProps, suffix: string): string => {
  if (!props.inThisMonth) {
    return props.weekend ? `weekend${suffix}` : `otherMonth${suffix}`;
  }
  if (props.selected) {
    return `selected${suffix}`;
  }
  if (props.today) {
    return `today${suffix}`;
  }
  if (props.weekend) {
    return `weekend${suffix}`;
  }
  return `day${suffix}`;
};

export const DayCell = styled.td<DayProps>`
  background-color: ${(props) => props.theme.color[getColorName(props, 'BG')]};
  border: 1px solid ${(props) => props.theme.color.dayBorder};
  padding: 0;
  text-align: center;
  button {
    color: ${(props) => props.theme.color[getColorName(props, 'FG')]};
  }
`;

export const DayButton = styled.button.attrs(({ onClick, value }) => ({
  onclick: onClick, value
}))`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.font.sizeBody};
  padding: 0.5em 0;
  width: 100%;
`;

export const DayLabel = styled.span`
  color: ${(props) => props.theme.color.unselectableFG};
`;
