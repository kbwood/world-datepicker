/// <reference types="react" />
import { Theme } from './theme';
declare type DayProps = {
    inThisMonth?: boolean;
    selected?: boolean;
    theme: Theme;
    today?: boolean;
    weekend?: boolean;
};
export declare const DayCell: import("styled-components").StyledComponent<"td", any, DayProps, never>;
export declare const DayButton: import("styled-components").StyledComponent<"button", any, {
    onclick: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    value: string | number | readonly string[] | undefined;
}, "value" | "onclick">;
export declare const DayLabel: import("styled-components").StyledComponent<"span", any, {}, never>;
export {};
