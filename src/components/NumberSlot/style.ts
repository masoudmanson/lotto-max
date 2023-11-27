import { styled, Button } from "@mui/material";
import { NumberSlotProps } from "./";

const doNotForward = ["active", "correct", "done", "empty", "showcase"];

const activeState = () => {
    return `
        box-shadow: inset 0 0 0 8px rgba(15, 85, 180, 1);
        border-color: rgba(15, 85, 180, 1);

        &:hover {
            border-color: rgba(15, 85, 180, 1);
            box-shadow: inset 0 0 0 8px rgba(15, 85, 180, 1);
        }
    `;
}

const doneState = (props: NumberSlotProps) => {
    const { active } = props;

    return `
        opacity: ${active ? `1` : `.4`};
        cursor: ${active ? `pointer` : `default`};

        &:hover {
            border-color: ${active ? `1rgba(15, 85, 180, 1)` : `rgba(15, 85, 180, 0.35)`};
            box-shadow: ${active ? `inset 0 0 0 8px rgba(15, 85, 180, 1)` : `inset 0 0 0 8px rgba(15, 85, 180, 0.15)`};
        }
    `;
}

const showcaseState = () => {
    return `
        box-shadow: inset 0 0 0 8px rgba(230, 185, 10, 1);
        border-color: rgba(230, 185, 10, 1);
        cursor: default;
        color: rgba(230, 185, 40, 1);

        &:hover {
            border-color:  rgba(230, 185, 10, 1);
            box-shadow: inset 0 0 0 8px rgba(230, 185, 10, 1);
        }
    `;
};

const correctState = () => {
    return `
        box-shadow: inset 0 0 0 8px rgba(25, 175, 40, 1);
        border-color: rgba(25, 175, 40, 1);
        cursor: default;

        &:hover {
            border-color:  rgba(25, 175, 40, 1);
            box-shadow: inset 0 0 0 8px rgba(25, 175, 40, 1);
        }
    `;
};

export const StyledButton = styled(Button, {
    shouldForwardProp: (prop: string) => !doNotForward.includes(prop)
})`
    ${(props: NumberSlotProps) => {
        const { active, correct, done, showcase } = props;

        return `
            font-family: "Inter";
            border-radius: 50%;
            height: 40px;
            width: 40px;
            text-align: center;
            min-width: 40px;
            box-shadow: inset 0 0 0 8px rgba(15, 85, 180, 0.15);
            border-color: rgba(15, 85, 180, 0.35);
            font-weight: 500;
            font-size: 14px;
            position: relative;
            overflow: hidden;
            transition: all .2s;
        
            &:focus {
                outline: none;
            }
        
            &:hover {
                border-color: rgba(15, 85, 180, 1);
                box-shadow: inset 0 0 0 8px rgba(15, 85, 180, 0.15), 0 3px 10px rgba(0, 0, 0, 0.2);
            }
        
            &::before {
                content: "";
                width: 2px;
                height: 12px;
                background-color: white;
                position: absolute;
                left: 0;
                border-radius: 0px 12px 12px 0px;
            }
        
            &::after {
                content: "";
                width: 2px;
                height: 12px;
                background-color: white;
                position: absolute;
                right: 0;
                border-radius: 12px 0px 0px 12px;
            }

            ${active && activeState()};
            ${done && doneState(props)};
            ${showcase && showcaseState()};
            ${correct && correctState()};
        `;
    }}
`;
